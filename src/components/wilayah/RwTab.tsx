import React, { useState } from 'react';
import { PlusIcon } from 'lucide-react';

// Custom Hooks
import { useRwData } from '../../hooks/useRwData';
import { useWilayahContext } from '../../contexts/wilayahContext';

// Types
import type { RwWithRelations, CreateRwDto } from '../../types/rw.types';

// Components
import RwTable from '../../components/wilayah/RwTable';
import RwFormModal from '../../components/wilayah/RwFormModal';
import Pagination from '../../components/ui/Pagination';

const RwTab: React.FC = () => {
    const {
        rwList,
        paginationMeta,
        isLoading,
        searchTerm,
        setSearchTerm,
        queryParams,
        saveRw,
        deleteRw,
        handlePageChange,
        handleFilterChange,
        handleSort
    } = useRwData();

    const { allDukuh } = useWilayahContext();

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [editingItem, setEditingItem] = useState<RwWithRelations | null>(null);

    const handleOpenModal = (item: RwWithRelations | null = null) => {
        setEditingItem(item);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingItem(null);
    };

    const handleSave = async (formData: CreateRwDto | Partial<CreateRwDto>, id: number | null) => {
    await saveRw(formData, id); 
    handleCloseModal();
};

    return (
        <div>
            {/* AREA FILTER */}
            <div className="p-4 flex flex-col md:flex-row items-center gap-4 bg-gray-50/50">
                <select 
                    name="dukuhId" 
                    value={queryParams.dukuhId || ''} 
                    onChange={handleFilterChange} 
                    className="filter-select mt-1 w-full md:w-64 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option value="">Semua Dukuh</option>
                    {allDukuh.map(d => (<option key={d.id} value={d.id}>{d.nama}</option>))}
                </select>
                <input 
                    type="text" 
                    placeholder="Cari nomor RW..." 
                    value={searchTerm} 
                    onChange={e => setSearchTerm(e.target.value)}
                    className="mt-1 w-full md:w-64 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                />
                 <button
                    onClick={() => handleOpenModal()}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-3 rounded-lg flex items-center gap-2 ml-auto"
                >
                    <PlusIcon className="w-5 h-5" />
                    <span>Tambah RW</span>
                </button>
            </div>

            {/* KONTEN TABEL */}
            <div className="flex-grow overflow-y-auto">
                <RwTable
                    rwList={rwList}
                    isLoading={isLoading}
                    meta={paginationMeta}
                    onEdit={handleOpenModal}
                    onDelete={deleteRw}
                    onSort={handleSort}
                    queryParams={queryParams}
                />
            </div>

            {paginationMeta && (
                <Pagination meta={paginationMeta} onPageChange={handlePageChange} />
            )}

            {isModalOpen && (
                <RwFormModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onSave={handleSave}
                    editingRw={editingItem}
                    dukuhList={allDukuh}
                />
            )}
        </div>
    );
};

export default RwTab;