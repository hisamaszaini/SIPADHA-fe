import React, { useState } from 'react';

import { usePendudukData } from '../hooks/usePendudukData';
import PendudukTable from '../components/penduduk/PendudukTable';
import { WilayahProvider } from '../contexts/wilayahContext';
import Pagination from '../components/ui/Pagination';
import PendudukFilter from '../components/penduduk/PendudukFilter';
import type { FindAllPendudukResponse, Penduduk, PendudukDto } from '../types/penduduk.types';
import { PlusIcon } from 'lucide-react';
import PendudukFormModal from '../components/penduduk/PendudukFormModal';

const AdminPenduduk: React.FC = () => {
    return (
        <WilayahProvider>
            <PendudukPage />
        </WilayahProvider>
    );
};

const PendudukPage: React.FC = () => {
    const {
        pendudukList, isLoading, paginationMeta, queryParams,
        handleFilterChange, handleSort, handlePageChange, findOnePenduduk, savePenduduk, deletePenduduk
    } = usePendudukData();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingPenduduk, setEditingPenduduk] = useState<Penduduk | null>(null);

    const handleOpenModal = async (pendudukToEdit: FindAllPendudukResponse | null = null) => {
        if (pendudukToEdit) {
            try {
                const response = await findOnePenduduk(pendudukToEdit.id);
                setEditingPenduduk(response.data);
            } catch (error) {
                console.error("Gagal mengambil detail penduduk:", error);
                return;
            }
        } else {
            setEditingPenduduk(null);
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingPenduduk(null);
    };

    const handleSave = async (formData: PendudukDto, id: number | null) => {
        try {
            await savePenduduk(formData, id);
            handleCloseModal();
        } catch (error) {
            console.error("Gagal menyimpan data penduduk:", error);
            throw error;
        }
    };

    return (
        <div className="w-full mx-auto bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">
            <header className="p-4 md:p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-base md:text-xl font-bold text-gray-800">Manajemen Penduduk</h2>
                <button
                    onClick={() => handleOpenModal()}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-3 rounded-lg flex items-center gap-2"
                >
                    <PlusIcon className="w-5 h-5" />
                    <span>Tambah Penduduk</span>
                </button>
            </header>

            <PendudukFilter filters={queryParams} onFilterChange={handleFilterChange} />

            <div className="flex-grow overflow-y-auto">
                <PendudukTable
                    pendudukList={pendudukList}
                    isLoading={isLoading}
                    queryParams={queryParams}
                    onSort={handleSort}
                    onEdit={handleOpenModal}
                    onDelete={deletePenduduk}
                />
            </div>

            {paginationMeta && <Pagination meta={paginationMeta} onPageChange={handlePageChange} />}

            {isModalOpen && <PendudukFormModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSave={handleSave}
                editingPenduduk={editingPenduduk}
            />}
        </div>
    );
};

export default AdminPenduduk;