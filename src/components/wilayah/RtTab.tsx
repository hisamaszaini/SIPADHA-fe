import React, { useState } from 'react';

// Hooks
import { useRtData } from '../../hooks/useRtData';
import { useWilayahContext } from '../../contexts/wilayahContext';

// Types
import type { RtWithRelations, CreateRtDto } from '../../types/rt.types';

// Components
import RtTable from '../../components/wilayah/RtTable';
import RtFormModal from '../../components/wilayah/RtFormModal';
import Pagination from '../../components/ui/Pagination';
import { Button } from '../ui/Button';

const RtTab: React.FC = () => {
    const {
        rtList, paginationMeta, isLoading, searchTerm, setSearchTerm,
        queryParams, saveRt, deleteRt, handlePageChange,
        handleFilterChange, handleSort
    } = useRtData();

    const { allDukuh, filteredRw, handleDukuhChange, isLoadingRw } = useWilayahContext();

    // State UI
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [editingItem, setEditingItem] = useState<RtWithRelations | null>(null);

    const handleOpenModal = (item: RtWithRelations | null = null) => {
        setEditingItem(item);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingItem(null);
    };

    const handleSave = async (formData: CreateRtDto | Partial<CreateRtDto>, id: number | null) => {
        await saveRt(formData, id);
        handleCloseModal();
    };

    const onDukuhSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        handleFilterChange(e);
        const dukuhId = e.target.value ? Number(e.target.value) : null;
        handleDukuhChange(dukuhId);
    };

    return (
        <div>
            {/* AREA FILTER */}
            <div className="p-4 flex flex-col md:flex-row items-center gap-4 bg-white">
                <select name="dukuhId" value={queryParams.dukuhId || ''} onChange={onDukuhSelectChange} className="filter-select mt-1 w-full md:w-64 px-3 py-2.5 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option value="">Semua Dukuh</option>
                    {allDukuh.map(d => (<option key={d.id} value={d.id}>{d.nama}</option>))}
                </select>

                <select name="rwId" value={queryParams.rwId || ''} onChange={handleFilterChange} disabled={!queryParams.dukuhId || isLoadingRw} className="filter-select mt-1 w-full md:w-64 px-3 py-2.5 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-200">
                    <option value="">Semua RW</option>
                    {filteredRw.map(rw => (<option key={rw.id} value={rw.id}>RW {rw.nomor}</option>))}
                </select>

                <input type="text" placeholder="Cari nomor RT..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="mt-1 w-full md:w-64 px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                <div className="flex items-center ml-auto">
                    <Button variant="primary" size="mid" icon="fas fa-plus" onClick={() => handleOpenModal()}
                    >Tambah RT</Button>
                </div>
            </div>

            {/* KONTEN TABEL */}
            <div className="flex-grow overflow-y-auto">
                <RtTable
                    rtList={rtList}
                    isLoading={isLoading}
                    meta={paginationMeta}
                    onEdit={handleOpenModal}
                    onDelete={deleteRt}
                    onSort={handleSort}
                    queryParams={queryParams}
                />
            </div>

            {paginationMeta && (
                <Pagination currentItemCount={rtList.length} meta={paginationMeta} onPageChange={handlePageChange} />
            )}

            {isModalOpen && (
                <RtFormModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onSave={handleSave}
                    editingRt={editingItem}
                />
            )}
        </div>
    );
};

export default RtTab;