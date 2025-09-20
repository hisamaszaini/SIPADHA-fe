import React from 'react';
import { FileEdit, Trash2 } from 'lucide-react';
import type { RtQueryParams, RtSortableKeys, RtWithRelations } from '../../types/rt.types';
import type { PaginationMeta } from '../../types/api.types';
import { SortableHeader } from '../ui/SortableHeader'; // Pastikan path import ini benar

// props yang dibutuhkan
interface RtTableProps {
    rtList: RtWithRelations[];
    isLoading: boolean;
    meta: PaginationMeta | null;
    onEdit: (rt: RtWithRelations) => void;
    onDelete: (id: number) => void;
    onSort: (sortKey: RtSortableKeys) => void;
    queryParams: RtQueryParams;
}

const RtTable: React.FC<RtTableProps> = ({ rtList, isLoading, meta, onEdit, onDelete, onSort, queryParams }) => {
    // Hitung nomor awal untuk paginasi
    const startingNumber = meta ? (meta.page - 1) * meta.limit + 1 : 1;

    // Tampilkan pesan loading jika data sedang diambil
    if (isLoading) {
        return <div className="p-6 text-center text-gray-500">Memuat data RT...</div>;
    }

    // Tampilkan pesan jika tidak ada data
    if (rtList.length === 0) {
        return <div className="p-6 text-center text-gray-500">Tidak ada data RT yang ditemukan.</div>;
    }

    return (
        <>
            {/* Desktop Table View (hidden on small screens) */}
            <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full text-left text-sm text-gray-900">
                    <thead className="bg-gray-50">
                        <tr className="text-xs font-medium uppercase tracking-wider text-gray-500">
                            <th className="px-6 py-3 w-16">No.</th>
                            <SortableHeader columnKey="nomor" onSort={onSort} queryParams={queryParams}>Nomor RT</SortableHeader>
                            <SortableHeader columnKey="rw" onSort={onSort} queryParams={queryParams}>Induk RW</SortableHeader>
                            <th className="px-6 py-3">Induk Dukuh</th>
                            <SortableHeader columnKey="kartuKeluarga" onSort={onSort} queryParams={queryParams}>Jumlah KK</SortableHeader>
                            <th className="px-6 py-3 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {rtList.map((rt, index) => (
                            <tr key={rt.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-500">{startingNumber + index}</td>
                                <td className="px-6 py-4 font-semibold">{`RT ${rt.nomor}`}</td>
                                <td className="px-6 py-4 text-gray-600">{rt.rw ? `RW ${rt.rw.nomor}` : 'N/A'}</td>
                                <td className="px-6 py-4 text-gray-600">{rt.rw?.dukuh?.nama ?? 'N/A'}</td>
                                <td className="px-6 py-4 text-gray-600">{rt._count.KartuKeluarga}</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end items-center gap-2">
                                        <button onClick={() => onEdit(rt)} title="Edit RT" className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors">
                                            <FileEdit className="w-5 h-5" />
                                        </button>
                                        <button onClick={() => onDelete(rt.id)} title="Hapus RT" className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
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
                {rtList.map((rt) => (
                    <div key={rt.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                        {/* Card Header */}
                        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-9 h-9 bg-green-100 text-green-600 rounded-md flex items-center justify-center font-bold text-sm">
                                        {rt.nomor}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 text-base">{`RT ${rt.nomor}`}</h3>
                                        <p className="text-xs text-gray-500">{rt.rw ? `RW ${rt.rw.nomor}` : 'N/A'}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 flex-shrink-0">
                                    <button onClick={() => onEdit(rt)} title="Edit RT" className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors">
                                        <FileEdit className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => onDelete(rt.id)} title="Hapus RT" className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Card Body */}
                        <div className="p-4 space-y-3 text-sm">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500">Induk Dukuh:</span>
                                <span className="font-medium text-gray-800">{rt.rw?.dukuh?.nama ?? 'N/A'}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500">Jumlah KK:</span>
                                <span className="font-medium text-gray-800">{rt._count.KartuKeluarga} KK</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default RtTable;