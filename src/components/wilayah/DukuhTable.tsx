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

    if (isLoading) {
        return <div className="p-6 text-center">Memuat data...</div>;
    }

    return (
        <table className="min-w-full text-left text-sm text-gray-900">
            <thead className="bg-gray-50">
                <tr className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    <th className="px-6 py-3 w-16">No.</th>
                    <th className="px-6 py-3">Nama Dukuh</th>
                    <th className="px-6 py-3 text-right">Aksi</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {dukuhList.length > 0 ? (
                    dukuhList.map((dukuh, index) => (
                        <tr key={dukuh.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 font-medium text-gray-500">{startingNumber + index}</td>
                            <td className="px-6 py-4 font-medium">{dukuh.nama}</td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex justify-end items-center gap-2">
                                    <button onClick={() => onEdit(dukuh)} title="Edit" className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors">
                                        <FileEdit className="w-5 h-5" />
                                    </button>
                                    <button onClick={() => onDelete(dukuh.id)} title="Hapus" className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                            Tidak ada data yang ditemukan.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default DukuhTable;