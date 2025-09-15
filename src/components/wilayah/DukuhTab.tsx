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
                <button
                    onClick={() => handleOpenModal()}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-3 rounded-lg flex items-center gap-2"
                >
                    <PlusIcon className="w-5 h-5" />
                    <span>Tambah Dukuh</span>
                </button>
            </div>

            <div className="flex-grow overflow-y-auto">
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