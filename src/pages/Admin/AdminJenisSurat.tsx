import React, { useState } from 'react';
import { useJenisSuratData } from '../../hooks/useJenisSuratData';
import type { CreateJenisSuratDto, JenisSurat, UpdateJenisSuratDto } from '../../types/jenisSurat.types';
import JenisSuratTable from '../../components/jenisSurat/JenisSuratTable';
import JenisSuratFilter from '../../components/jenisSurat/JenisSuratFilter';
import JenisSuratFormModal from '../../components/jenisSurat/JenisSuratModal';
import { Button } from '../../components/ui/Button';
import { Pagination } from '../../components/ui/Pagination';
import { toast } from 'sonner';

const AdminJenisSurat: React.FC = () => {
    const {
        jenisSuratList, isLoading, paginationMeta, queryParams,
        searchTerm, setSearchTerm,
        handleSort, handlePageChange,
        findOneJenisSurat, saveJenisSurat, deleteJenisSurat
    } = useJenisSuratData();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<JenisSurat | null>(null);

    const handleOpenModal = async (item: JenisSurat | null = null) => {
        if (item && item.id) {
            try {
                const response = await findOneJenisSurat(item.id);
                setEditingItem(response.data);
            } catch (error) {
                console.error("Gagal mengambil detail jenis surat:", error);
                return;
            }
        } else {
            setEditingItem(null);
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingItem(null);
    };

    const handleSave = async (
        formData: CreateJenisSuratDto | UpdateJenisSuratDto, 
        id: number | null, 
        file?: File
    ) => {
        try {
            await saveJenisSurat(formData, id, file);
            toast.success(`Jenis surat berhasil ${editingItem ? 'diperbarui' : 'ditambahkan'}`)
            handleCloseModal();
        } catch (error) {
            toast.error(`Gagal  ${editingItem ? 'menyimpan' : 'menambahkan'} jenis surat`);
            console.error("Gagal menyimpan jenis surat:", error);
            throw error;
        }
    };

    return (
        <div className="w-full mx-auto bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">
            <header className="p-4 md:p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-base md:text-xl font-bold text-gray-800">Manajemen Jenis Surat</h2>
                <div className="flex items-center ml-auto">
                    <Button variant="primary" size="mid" icon="fas fa-plus" onClick={() => handleOpenModal()}
                    >Tambah Jenis Surat</Button>
                </div>
            </header>

            <JenisSuratFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <div className="flex-grow overflow-y-auto">
                <JenisSuratTable
                    jenisSuratList={jenisSuratList}
                    isLoading={isLoading}
                    onEdit={handleOpenModal}
                    onDelete={deleteJenisSurat}
                    onSort={handleSort}
                    queryParams={queryParams}
                />
            </div>

            {paginationMeta && <Pagination currentItemCount={jenisSuratList.length} meta={paginationMeta} onPageChange={handlePageChange} />}

            {isModalOpen && (
                <JenisSuratFormModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onSave={handleSave}
                    editingItem={editingItem}
                />
            )}
        </div>
    );
};

export default AdminJenisSurat;