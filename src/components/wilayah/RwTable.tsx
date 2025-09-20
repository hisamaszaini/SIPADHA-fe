import React from 'react';
import { FileEdit, Trash2 } from 'lucide-react';
import type { FindAllRwResponse, RwQueryParams, RwSortableKeys } from '../../types/rw.types';
import type { PaginationMeta } from '../../types/api.types';
import { SortableHeader } from '../ui/SortableHeader';

interface RwTableProps {
    rwList: FindAllRwResponse[];
    isLoading: boolean;
    meta: PaginationMeta | null;
    onEdit: (rw: FindAllRwResponse) => void;
    onDelete: (id: number) => void;
    onSort: (sortKey: RwSortableKeys) => void;
    queryParams: RwQueryParams;
}

const RwTable: React.FC<RwTableProps> = ({ rwList, isLoading, meta, onEdit, onDelete, onSort, queryParams }) => {
    const startingNumber = meta ? (meta.page - 1) * meta.limit + 1 : 1;

    // Handle loading state
    if (isLoading) {
        return <div className="p-6 text-center text-gray-500">Memuat data RW...</div>;
    }

    // Handle empty state
    if (rwList.length === 0) {
        return <div className="p-6 text-center text-gray-500">Tidak ada data RW yang ditemukan.</div>;
    }

    return (
        <>
            {/* Desktop Table View (hidden on small screens) */}
            <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full text-left text-sm text-gray-900">
                    <thead className="bg-gray-50">
                        <tr className="text-xs font-medium uppercase tracking-wider text-gray-500">
                            <SortableHeader columnKey="id" onSort={onSort} queryParams={queryParams}>NO.</SortableHeader>
                            <SortableHeader columnKey="nomor" onSort={onSort} queryParams={queryParams}>Nomor RW</SortableHeader>
                            <SortableHeader columnKey="dukuh" onSort={onSort} queryParams={queryParams}>Induk Dukuh</SortableHeader>
                            <SortableHeader columnKey="rts" onSort={onSort} queryParams={queryParams}>Jumlah RT</SortableHeader>
                            <th className="px-6 py-3 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {rwList.map((rw, index) => (
                            <tr key={rw.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-500">{startingNumber + index}</td>
                                <td className="px-6 py-4 font-semibold">{`RW ${rw.nomor}`}</td>
                                <td className="px-6 py-4 text-gray-600">{rw.dukuh ? rw.dukuh.nama : 'N/A'}</td>
                                <td className="px-6 py-4 text-gray-600">{rw._count.rts}</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end items-center gap-2">
                                        <button onClick={() => onEdit(rw)} title="Edit RW" className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors">
                                            <FileEdit className="w-5 h-5" />
                                        </button>
                                        <button onClick={() => onDelete(rw.id)} title="Hapus RW" className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View (visible only on small screens) */}
            <div className="md:hidden space-y-4">
                {rwList.map((rw) => (
                    <div key={rw.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                        {/* Card Header */}
                        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-9 h-9 bg-blue-100 text-blue-600 rounded-md flex items-center justify-center font-bold text-sm">
                                        {rw.nomor}
                                    </div>
                                    <h3 className="font-semibold text-gray-800 text-base">{`RW ${rw.nomor}`}</h3>
                                </div>
                                <div className="flex items-center gap-2 flex-shrink-0">
                                    <button onClick={() => onEdit(rw)} title="Edit RW" className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors">
                                        <FileEdit className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => onDelete(rw.id)} title="Hapus RW" className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Card Body */}
                        <div className="p-4 space-y-3 text-sm">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500">Induk Dukuh</span>
                                <span className="font-medium text-gray-800">{rw.dukuh ? rw.dukuh.nama : 'N/A'}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500">Jumlah RT</span>
                                <span className="font-medium text-gray-800">{rw._count.rts} RT</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default RwTable;