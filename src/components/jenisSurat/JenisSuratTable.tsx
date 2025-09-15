import React from 'react';
import type { JenisSurat, JenisSuratQueryParams, JenisSuratSortableKeys } from '../../types/jenisSurat.types';
import { SortableHeader } from '../ui/SortableHeader';
import { FileEdit, Trash2 } from 'lucide-react';

import { FileText, FileSpreadsheet, FileArchive, File } from "lucide-react";

function getFileIcon(fileName: string | null | undefined) {
    if (!fileName) return <File className="w-5 h-5 text-gray-400" />;

    const ext = fileName.split(".").pop()?.toLowerCase();
    switch (ext) {
        case "pdf":
            return <FileText className="w-5 h-5 text-red-500" />;
        case "xlsx":
        case "xls":
            return <FileSpreadsheet className="w-5 h-5 text-green-500" />;
        case "doc":
        case "docx":
            return <FileText className="w-5 h-5 text-blue-500" />;
        default:
            return <File className="w-5 h-5 text-gray-500" />;
    }
}

interface JenisSuratTableProps {
    jenisSuratList: JenisSurat[];
    isLoading: boolean;
    onEdit: (item: JenisSurat) => void;
    onDelete: (id: number) => void;
    onSort: (sortKey: JenisSuratSortableKeys) => void;
    queryParams: JenisSuratQueryParams;
}

const JenisSuratTable: React.FC<JenisSuratTableProps> = ({
    jenisSuratList, isLoading, onEdit, onDelete, onSort, queryParams
}) => {
    return (
        <table className="min-w-full text-left text-sm text-gray-900">
            <thead className="bg-gray-50">
                <tr className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    <th className="px-6 py-3 text-left uppercase tracking-wider w-16">No.</th>
                    <SortableHeader columnKey="kode" onSort={onSort} queryParams={queryParams}>Kode</SortableHeader>
                    <SortableHeader columnKey="namaSurat" onSort={onSort} queryParams={queryParams}>Nama Surat</SortableHeader>
                    <th className="px-6 py-3 text-left uppercase tracking-wider">Deskripsi</th>
                    <th className="px-6 py-3">File</th>
                    <th className="px-6 py-3 text-right">Aksi</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {isLoading ? (
                    <tr><td colSpan={5} className="text-center p-8 text-gray-500">Memuat data...</td></tr>
                ) : jenisSuratList.length === 0 ? (
                    <tr><td colSpan={5} className="text-center p-8 text-gray-500">Tidak ada data jenis surat.</td></tr>
                ) : (
                    jenisSuratList.map((item, index) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-700">{item.kode}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.namaSurat}</td>
                            <td className="px-6 py-4 text-sm text-gray-500 max-w-sm truncate">{item.deskripsi}</td>
                            <td className="px-6 py-4 text-sm text-center">
                                {item.templateFile ? (
                                    <a href={`${import.meta.env.VITE_API_BASE_URL}/uploads/${item.templateFile}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-blue-600 hover:underline"
                                    >{getFileIcon(item.templateFile)}</a>
                                ) : (
                                    <span className="text-gray-400">-</span>
                                )}
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex justify-end items-center gap-2">
                                    <button onClick={() => onEdit(item)} title="Edit" className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors">
                                        <FileEdit className="w-5 h-5" />
                                    </button>
                                    <button onClick={() => onDelete(item.id)} title="Hapus" className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
};

export default JenisSuratTable;