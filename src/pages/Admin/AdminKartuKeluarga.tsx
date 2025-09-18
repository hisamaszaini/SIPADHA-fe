import React, { useState } from 'react';

import KkFilter from '../../components/kartukeluarga/KartuKeluargaFilter';
import KartuKeluargaTable from '../../components/kartukeluarga/KartuKeluargaTable';
import KartuKeluargaFormModal from '../../components/kartukeluarga/KartuKeluargaFormModal';

// Types
import type { KartuKeluarga, FindAllKartuKeluargaResponse } from '../../types/kartuKeluarga.types';
import { KartuKeluargaProvider } from '../../contexts/kartuKeluargaContext';
import { useKartuKeluargaData } from '../../hooks/useKartuKeluargaData';
import { Button } from '../../components/ui/Button';
import { Pagination } from '../../components/ui/Pagination';

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
                <Button variant="primary" size="mid" icon="fas fa-plus" onClick={() => handleOpenModal()}>Tambah Kartu Keluarga</Button>
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

            {paginationMeta && <Pagination currentItemCount={kkList.length} meta={paginationMeta} onPageChange={handlePageChange} />}

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