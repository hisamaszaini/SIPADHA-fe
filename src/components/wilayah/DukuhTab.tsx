import React, { useState } from 'react';
import { PlusIcon } from 'lucide-react';

// Custom Hook
import { useDukuhData } from '../../hooks/useDukuhData';

// Types
import type { CreateDukuhDto, Dukuh } from '../../types/dukuh.types';

// Components
import DukuhFormModal from './DukuhFormModal';
import Pagination from '../ui/Pagination';
import DukuhTable from './DukuhTable';
import { Button } from '../ui/Button';

const DukuhTab: React.FC = () => {
    // Memanggil hook untuk mendapatkan semua logika dan state data
    const {
        dukuhList,
        paginationMeta,
        isLoading,
        saveDukuh,
        deleteDukuh,
        handlePageChange
    } = useDukuhData();

    // State yang murni untuk UI di dalam tab ini
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [editingItem, setEditingItem] = useState<Dukuh | null>(null);

    // Handler untuk membuka modal (bisa untuk tambah baru atau edit)
    const handleOpenModal = (item: Dukuh | null = null) => {
        setEditingItem(item);
        setIsModalOpen(true);
    };

    // Handler untuk menutup modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingItem(null);
    };

    // Handler untuk proses penyimpanan dari form
    const handleSave = async (formData: CreateDukuhDto) => {
        const id = editingItem ? editingItem.id : null;
        await saveDukuh(formData, id);
        handleCloseModal();
    };

    return (
        <div>
            {/* Area filter bisa ditambahkan di sini.
              Logikanya akan ditambahkan di dalam `useDukuhData` 
              dan di-expose seperti `handleFilterChange`.
            */}
            <div className="p-4 flex justify-end">
                <Button variant="primary" size="mid" icon="fas fa-plus" onClick={() => handleOpenModal()}
                >Tambah Dukuh</Button>
            </div>

            <div className="flex-grow">
                <DukuhTable
                    dukuhList={dukuhList}
                    isLoading={isLoading}
                    meta={paginationMeta}
                    onEdit={handleOpenModal}
                    onDelete={deleteDukuh}
                />
            </div>

            {paginationMeta && (
                <Pagination meta={paginationMeta} onPageChange={handlePageChange} />
            )}

            {isModalOpen && (
                <DukuhFormModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onSave={handleSave}
                    editingDukuh={editingItem}
                />
            )}
        </div>
    );
};

export default DukuhTab;