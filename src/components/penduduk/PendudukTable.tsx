import React from 'react';
import type { FindAllPendudukResponse, PendudukQueryParams, PendudukSortableKeys } from '../../types/penduduk.types';
import { SortableHeader } from '../ui/SortableHeader';
import { formatTanggal } from '../../utils/date';
import { FileEdit, Trash2 } from 'lucide-react';

interface PendudukTableProps {
    pendudukList: FindAllPendudukResponse[];
    isLoading: boolean;
    queryParams: PendudukQueryParams;
    onSort: (sortKey: PendudukSortableKeys) => void;
    onEdit: (penduduk: FindAllPendudukResponse) => void;
    onDelete: (id: number) => void;
}

const PendudukTable: React.FC<PendudukTableProps> = ({ pendudukList, isLoading, queryParams, onSort, onEdit, onDelete }) => {

    const formatWilayah = (penduduk: FindAllPendudukResponse) => {
        try {
            const { rt } = penduduk.kartuKeluarga;
            const dukuh = rt.rw.dukuh.nama;
            const rw = rt.rw.nomor;
            const nomorRt = rt.nomor;
            return `${dukuh}, RW ${rw}, RT ${nomorRt}`;
        } catch (error) {
            return 'N/A';
        }
    };
    
    // Helper component for loading/empty states to avoid repetition
    const renderStateMessage = (message: string, colSpan: number) => {
        return (
            <tr>
                <td colSpan={colSpan} className="text-center p-8 text-gray-500">{message}</td>
            </tr>
        );
    };

    return (
        <>
            {/* Desktop Table View (hidden on small screens) */}
            <div className="hidden md:block overflow-x-auto border-y border-gray-200 rounded-lg shadow-md">
                <table className="min-w-full text-left text-sm text-gray-900">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr className="text-xs font-medium uppercase tracking-wider text-gray-500">
                            <SortableHeader columnKey="id" onSort={onSort} queryParams={queryParams}>NO.</SortableHeader>
                            <SortableHeader columnKey="nama" onSort={onSort} queryParams={queryParams}>Nama</SortableHeader>
                            <SortableHeader columnKey="nik" onSort={onSort} queryParams={queryParams}>NIK</SortableHeader>
                            <SortableHeader columnKey="jenisKelamin" onSort={onSort} queryParams={queryParams}>J. Kelamin</SortableHeader>
                            <SortableHeader columnKey="tanggalLahir" onSort={onSort} queryParams={queryParams}>Tgl. Lahir</SortableHeader>
                            <SortableHeader columnKey="noKk" onSort={onSort} queryParams={queryParams}>No. KK</SortableHeader>
                            <th scope="col" className="px-6 py-3">Wilayah</th>
                            <th className="px-6 py-4 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {isLoading
                            ? renderStateMessage('Memuat data...', 8)
                            : pendudukList.length === 0
                            ? renderStateMessage('Tidak ada data penduduk.', 8)
                            : pendudukList.map((penduduk, index) => (
                                <tr key={penduduk.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{penduduk.nama}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{penduduk.nik}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{penduduk.jenisKelamin}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatTanggal(penduduk.tanggalLahir)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{penduduk.kartuKeluarga.noKk}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatWilayah(penduduk)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-semibold">
                                        <div className="flex justify-end items-center gap-2">
                                            <button onClick={() => onEdit(penduduk)} title="Edit Penduduk" className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors">
                                                <FileEdit className="w-5 h-5" />
                                            </button>
                                            <button onClick={() => onDelete(penduduk.id)} title="Hapus Penduduk" className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
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
            <div className="md:hidden">
                {isLoading 
                    ? <div className="p-6 text-center text-gray-500">Memuat data...</div>
                    : pendudukList.length === 0 
                    ? <div className="p-6 text-center text-gray-500">Tidak ada data penduduk.</div>
                    : (
                        <div className="space-y-4">
                            {pendudukList.map((penduduk, index) => (
                                <div key={penduduk.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                                    {/* Card Header */}
                                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50  px-4 py-3 border-b border-gray-200">
                                        <div className="flex justify-between items-start gap-3">
                                            <div className="flex items-start gap-3 flex-1">
                                                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-md font-semibold text-sm ">
                                                    {index + 1}
                                                </span>
                                                <div className="flex-1">
                                                    <p className="font-bold text-gray-800">{penduduk.nama}</p>
                                                    <p className="text-sm text-gray-500 font-mono">{penduduk.nik}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 flex-shrink-0">
                                                <button onClick={() => onEdit(penduduk)} title="Edit Penduduk" className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors">
                                                    <FileEdit className="w-4 h-4" />
                                                </button>
                                                <button onClick={() => onDelete(penduduk.id)} title="Hapus Penduduk" className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card Body */}
                                    <div className="p-4 space-y-3 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">No. KK:</span>
                                            <span className="font-medium font-mono">{penduduk.kartuKeluarga.noKk}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Jenis Kelamin:</span>
                                            <span className="font-medium">{penduduk.jenisKelamin}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Tgl. Lahir:</span>
                                            <span className="font-medium">{formatTanggal(penduduk.tanggalLahir)}</span>
                                        </div>
                                        <div className="border-t border-gray-200 pt-3 mt-2">
                                            <span className="text-xs text-gray-500">Wilayah</span>
                                            <p className="font-medium text-gray-800 text-right">{formatWilayah(penduduk)}</p>
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

export default PendudukTable;