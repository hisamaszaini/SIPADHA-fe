import React, { useState, useEffect, useCallback } from 'react';
import { PlusIcon } from 'lucide-react';

// Services & Types
import dukuhService from '../../services/dukuhService';
import type { Dukuh, DukuhQueryParams } from '../../types/dukuh.types';

// Components
import DukuhTable from '../../components/wilayah/DukuhTable';
import DukuhFormModal from '../../components/wilayah/DukuhFormModal';
import type { PaginationMeta } from '../../types/api.types';
import { Pagination } from '../../components/ui/Pagination';

const AdminDukuh: React.FC = () => {
    // State untuk data dan UI
    const [dukuhList, setDukuhList] = useState<Dukuh[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [paginationMeta, setPaginationMeta] = useState<PaginationMeta | null>(null);
    const [queryParams, setQueryParams] = useState<DukuhQueryParams>({ page: 1, limit: 10 });

    // State untuk modal dan form
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [editingDukuh, setEditingDukuh] = useState<Dukuh | null>(null);

    // Fungsi untuk mengambil data dari API, dioptimalkan dengan useCallback
    const fetchDukuh = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await dukuhService.findAll(queryParams);
            setDukuhList(response.data);
            setPaginationMeta(response.meta || null);
        } catch (err) {
            setError('Gagal memuat data dukuh. Silakan coba lagi nanti.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, [queryParams]);

    // Effect untuk menjalankan fetchDukuh saat komponen dimuat atau queryParams berubah
    useEffect(() => {
        fetchDukuh();
    }, [fetchDukuh]);

    // Handler untuk membuka modal
    const handleOpenModal = (dukuh: Dukuh | null = null) => {
        setEditingDukuh(dukuh);
        setIsModalOpen(true);
    };

    // Handler untuk menutup modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingDukuh(null);
    };

    // Handler untuk menyimpan data (Create & Update)
    const handleSave = async (formData: { nama: string }, id: number | null) => {
        try {
            if (id) {
                await dukuhService.update(id, formData);
            } else {
                await dukuhService.create(formData);
            }
            handleCloseModal();
            fetchDukuh(); // Muat ulang data setelah berhasil
            // Disarankan: Tampilkan notifikasi toast sukses di sini
        } catch (err) {
            console.error('Gagal menyimpan data:', err);
            // Disarankan: Tampilkan notifikasi toast error di sini
            // Melempar error agar modal tahu prosesnya gagal dan tidak menutup otomatis
            throw err;
        }
    };

    // Handler untuk menghapus data
    const handleDelete = async (id: number) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus data ini? Aksi ini tidak dapat dibatalkan.')) {
            try {
                await dukuhService.remove(id);
                fetchDukuh(); // Muat ulang data setelah berhasil
                // Disarankan: Tampilkan notifikasi toast sukses di sini
            } catch (err) {
                console.error('Gagal menghapus data:', err);
                // Disarankan: Tampilkan notifikasi toast error di sini
            }
        }
    };

    // Handler untuk paginasi
    const handlePageChange = (newPage: number) => {
        setQueryParams(prev => ({ ...prev, page: newPage }));
    };

    return (
        <div className="w-full mx-auto bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">
            <header className="p-4 md:p-6 border-b border-gray-200 flex justify-between items-center flex-shrink-0">
                <h2 className="text-base md:text-xl font-bold text-gray-800">Manajemen Wilayah Administrasi</h2>
                <button
                    onClick={() => handleOpenModal()}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-3 rounded-lg transition-all shadow-lg text-sm flex items-center gap-2"
                >
                    <PlusIcon className="w-5 h-5" />
                    <span>Tambah Dukuh</span>
                </button>
            </header>

            <nav className="p-4 border-b border-gray-200 flex-shrink-0">
                <div className="flex items-center gap-2">
                    <button className="tab-btn active bg-emerald-500 text-white font-bold py-2 px-4 rounded-lg transition-all">Dukuh</button>
                    <button className="tab-btn bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg transition-all">RW</button>
                    <button className="tab-btn bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg transition-all">RT</button>
                </div>
            </nav>

            <div className="p-4 flex items-center gap-4 flex-shrink-0 bg-gray-50/50">
                {/* Tempat untuk filter pencarian di masa depan */}
            </div>

            <div className="flex-grow overflow-y-auto">
                {error && <div className="p-4 text-center text-red-600 bg-red-50">{error}</div>}
                <DukuhTable
                    dukuhList={dukuhList}
                    isLoading={isLoading}
                    meta={paginationMeta}
                    onEdit={handleOpenModal}
                    onDelete={handleDelete}
                />
            </div>

            {paginationMeta && (
                <Pagination
                    currentItemCount={dukuhList.length}
                    meta={paginationMeta}
                    onPageChange={handlePageChange}
                />
            )}

            <DukuhFormModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSave={handleSave}
                editingDukuh={editingDukuh}
            />
        </div>
    );
};

export default AdminDukuh;