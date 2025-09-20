import React from 'react';
import { FileEdit, Trash2 } from 'lucide-react';
import type { Dukuh } from '../../types/dukuh.types';
import type { PaginationMeta } from '../../types/api.types';

interface DukuhTableProps {
    dukuhList: Dukuh[];
    isLoading: boolean;
    meta: PaginationMeta | null;
    onEdit: (dukuh: Dukuh) => void;
    onDelete: (id: number) => void;
}

const DukuhTable: React.FC<DukuhTableProps> = ({ dukuhList, isLoading, meta, onEdit, onDelete }) => {
    const startingNumber = meta ? (meta.page - 1) * meta.limit + 1 : 1;

    // Handle loading state
    if (isLoading) {
        return <div className="p-6 text-center text-gray-500">Memuat data...</div>;
    }

    // Handle empty state
    if (dukuhList.length === 0) {
        return <div className="p-6 text-center text-gray-500">Tidak ada data dukuh yang ditemukan.</div>;
    }

    return (
        <>
            {/* Desktop Table View (hidden on small screens) */}
            <div className="hidden md:block overflow-x-auto border-y border-gray-200 rounded-lg shadow-md">
                <table className="min-w-full text-left text-sm text-gray-900">
                    <thead className="bg-gray-50">
                        <tr className="text-xs font-medium uppercase tracking-wider text-gray-500">
                            <th className="px-6 py-4 w-16">No.</th>
                            <th className="px-6">Nama Dukuh</th>
                            <th className="px-6 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {dukuhList.map((dukuh, index) => (
                            <tr key={dukuh.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-500">{startingNumber + index}</td>
                                <td className="px-6 py-4 font-medium">{dukuh.nama}</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end items-center gap-2">
                                        <button onClick={() => onEdit(dukuh)} title="Edit Dukuh" className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors">
                                            <FileEdit className="w-5 h-5" />
                                        </button>
                                        <button onClick={() => onDelete(dukuh.id)} title="Hapus Dukuh" className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
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
            <div className="md:hidden space-y-3">
                {dukuhList.map((dukuh, index) => (
                    <div key={dukuh.id} className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full font-semibold text-sm">
                                {startingNumber + index}
                            </span>
                            <span className="font-medium text-gray-800">{dukuh.nama}</span>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                            <button onClick={() => onEdit(dukuh)} title="Edit Dukuh" className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors">
                                <FileEdit className="w-4 h-4" />
                            </button>
                            <button onClick={() => onDelete(dukuh.id)} title="Hapus Dukuh" className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default DukuhTable;