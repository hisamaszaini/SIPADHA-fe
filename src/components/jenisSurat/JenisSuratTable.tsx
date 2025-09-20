import React from 'react';
import type { JenisSurat, JenisSuratQueryParams, JenisSuratSortableKeys } from '../../types/jenisSurat.types';
import { SortableHeader } from '../ui/SortableHeader';
import { FileEdit, Trash2, FileText, FileSpreadsheet, File } from 'lucide-react';

function getFileIcon(fileName: string | null | undefined, customClass = "w-4 h-4") {
    if (!fileName) return <File className={`${customClass} text-gray-400`} />;
    const ext = fileName.split(".").pop()?.toLowerCase();
    switch (ext) {
        case "pdf":
            return <FileText className={`${customClass} text-red-500`} />;
        case "xlsx":
        case "xls":
            return <FileSpreadsheet className={`${customClass} text-green-500`} />;
        case "doc":
        case "docx":
            return <FileText className={`${customClass} text-blue-500`} />;
        default:
            return <File className={`${customClass} text-gray-500`} />;
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

    const renderStateMessage = (message: string, colSpan: number) => (
        <tr><td colSpan={colSpan} className="text-center p-8 text-gray-500">{message}</td></tr>
    );
    
    return (
        <>
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto bg-white rounded-lg shadow">
                <table className="min-w-full text-left text-sm text-gray-900">
                    <thead className="bg-gray-50">
                        <tr className="text-xs font-medium uppercase tracking-wider text-gray-500">
                            <th className="px-6 py-3 w-16">No.</th>
                            <SortableHeader columnKey="kode" onSort={onSort} queryParams={queryParams}>Kode</SortableHeader>
                            <SortableHeader columnKey="namaSurat" onSort={onSort} queryParams={queryParams}>Nama Surat</SortableHeader>
                            <th className="px-6 py-3">Deskripsi</th>
                            <th className="px-6 py-3">File</th>
                            <th className="px-6 py-3 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {isLoading
                            ? renderStateMessage('Memuat data...', 6)
                            : jenisSuratList.length === 0
                            ? renderStateMessage('Tidak ada data jenis surat.', 6)
                            : jenisSuratList.map((item, index) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">{index + 1}</td>
                                    <td className="px-6 py-4 font-semibold text-gray-700">{item.kode}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{item.namaSurat}</td>
                                    <td className="px-6 py-4 text-gray-500 max-w-sm truncate" title={item.deskripsi}>{item.deskripsi}</td>
                                    <td className="px-6 py-4">
                                        {item.templateFile ? (
                                            <a href={`${import.meta.env.VITE_API_BASE_URL}/uploads/${item.templateFile}`} target="_blank" rel="noopener noreferrer" className="flex justify-center">
                                                {getFileIcon(item.templateFile, "w-5 h-5")}
                                            </a>
                                        ) : (
                                            <span className="text-gray-400 flex justify-center">-</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-end items-center gap-2">
                                            <button onClick={() => onEdit(item)} title="Edit" className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors">
                                                <FileEdit className="w-5 h-5" />
                                            </button>
                                            <button onClick={() => onDelete(item.id)} title="Hapus" className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View with YOUR EXACT STYLE */}
            <div className="md:hidden">
                {isLoading ? (
                    <div className="text-center p-8 text-gray-500">Memuat data...</div>
                ) : jenisSuratList.length === 0 ? (
                    <div className="text-center p-8 text-gray-500">Tidak ada data jenis surat.</div>
                ) : (
                    <div className="space-y-4">
                        {jenisSuratList.map((item, index) => (
                            <div key={item.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                                {/* Card Header */}
                                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 px-4 py-3">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm font-semibold shadow-sm">
                                                {index + 1}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">{item.namaSurat}</h3>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <div className="flex justify-center items-center space-x-1.5">
                                                <button onClick={() => onEdit(item)} title="Edit" className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors">
                                                    <FileEdit className="w-4 h-4" />
                                                </button>
                                                <button onClick={() => onDelete(item.id)} title="Hapus" className="flex items-center justify-center w-7 h-7 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Card Body */}
                                <div className="p-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Kode Surat</span>
                                            <span className="text-sm font-medium text-gray-900 text-right font-mono">{item.kode}</span>
                                        </div>
                                        <div>
                                           <p className="text-sm text-gray-600 mb-1">Deskripsi</p>
                                           <p className="text-sm text-gray-800 leading-relaxed">{item.deskripsi || <span className="italic">Tidak ada deskripsi</span>}</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Template File</span>
                                            {item.templateFile ? (
                                                <a 
                                                    href={`${import.meta.env.VITE_API_BASE_URL}/uploads/${item.templateFile}`} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition-colors"
                                                >
                                                    {getFileIcon(item.templateFile, "w-3.5 h-3.5 mr-1.5")}
                                                    {item.templateFile.split(".").pop()?.toUpperCase()}
                                                </a>
                                            ) : (
                                                <span className="text-sm font-medium text-gray-500 text-right">-</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default JenisSuratTable;