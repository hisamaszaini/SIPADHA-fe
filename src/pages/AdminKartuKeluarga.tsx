import React, { useState } from 'react';
import { PlusIcon } from 'lucide-react';

import Pagination from '../components/ui/Pagination';
import KkFilter from '../components/kartukeluarga/KartuKeluargaFilter';
import KartuKeluargaTable from '../components/kartukeluarga/KartuKeluargaTable';
import KartuKeluargaFormModal from '../components/kartukeluarga/KartuKeluargaFormModal';

// Types
import type { KartuKeluarga, FindAllKartuKeluargaResponse } from '../types/kartuKeluarga.types';
import { KartuKeluargaProvider } from '../contexts/kartuKeluargaContext';
import { useKartuKeluargaData } from '../hooks/useKartuKeluargaData';

const AdminKartuKeluarga: React.FC = () => {
    return (
        <KartuKeluargaProvider>
            <KartuKeluargaPage />
        </KartuKeluargaProvider>
    );
};

const KartuKeluargaPage: React.FC = () => {
    const {
        kkList, isLoading, paginationMeta, queryParams,
        handleFilterChange, handlePageChange, findOneKk, saveKk, deleteKk, handleSort
    } = useKartuKeluargaData();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingKk, setEditingKk] = useState<KartuKeluarga | null>(null);

    const handleOpenModal = async (kkToEdit: FindAllKartuKeluargaResponse | null = null) => {
        if (kkToEdit) {
            try {
                const response = await findOneKk(kkToEdit.id);
                setEditingKk(response.data);
            } catch (error) {
                console.error("Gagal mengambil detail KK:", error);
                return;
            }
        } else {
            setEditingKk(null);
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingKk(null);
    };

    const handleSave = async (formData: any, id: number | null) => {
        try {
            await saveKk(formData, id);
            handleCloseModal();
        } catch (error) {
            console.error("Gagal menyimpan data KK:", error);
            throw error;
        }
    };

    const handleViewMembers = (kk: FindAllKartuKeluargaResponse) => {
        console.log("Lihat anggota keluarga dari KK:", kk.noKk);
        // navigate logic here
    };

    return (
        <div className="w-full mx-auto bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">
             <header className="p-4 md:p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-base md:text-xl font-bold text-gray-800">Manajemen Kartu Keluarga</h2>
                <button
                    onClick={() => handleOpenModal()}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-3 rounded-lg flex items-center gap-2"
                >
                    <PlusIcon className="w-5 h-5" />
                    <span>Tambah KK Baru</span>
                </button>
            </header>

            <KkFilter onFilterChange={handleFilterChange} filters={queryParams} />

            <div className="flex-grow overflow-y-auto">
                <KartuKeluargaTable
                    kkList={kkList}
                    isLoading={isLoading}
                    meta={paginationMeta}
                    onEdit={handleOpenModal}
                    onDelete={deleteKk}
                    onViewMembers={handleViewMembers}
                    onSort={handleSort}
                    queryParams={queryParams}
                />
            </div>

            {paginationMeta && <Pagination meta={paginationMeta} onPageChange={handlePageChange} />}

            {isModalOpen && (
                <KartuKeluargaFormModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onSave={handleSave}
                    editingKk={editingKk}
                />
            )}
        </div>
    );
};

export default AdminKartuKeluarga;