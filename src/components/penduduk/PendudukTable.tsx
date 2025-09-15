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

export const PendudukTable: React.FC<PendudukTableProps> = ({ pendudukList, isLoading, queryParams, onSort, onEdit, onDelete }) => {
    return (
        <table className="min-w-full text-left text-sm text-gray-900">
            <thead className="bg-gray-50">
                <tr className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    <SortableHeader columnKey="id" onSort={onSort} queryParams={queryParams}>NO.</SortableHeader>
                    <SortableHeader columnKey="nama" onSort={onSort} queryParams={queryParams}>Nama</SortableHeader>
                    <SortableHeader columnKey="nik" onSort={onSort} queryParams={queryParams}>NIK</SortableHeader>
                    <SortableHeader columnKey="jenisKelamin" onSort={onSort} queryParams={queryParams}>J. Kelamin</SortableHeader>
                    <SortableHeader columnKey="tanggalLahir" onSort={onSort} queryParams={queryParams}>Tgl. Lahir</SortableHeader>
                    <SortableHeader columnKey="noKk" onSort={onSort} queryParams={queryParams}>No. KK</SortableHeader>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wilayah (Dukuh/RW/RT)</th>
                    <th scope="col" className="relative px-6 py-3"><span className="sr-only">Aksi</span></th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {isLoading ? (
                    <tr><td colSpan={6} className="text-center p-8 text-gray-500">Memuat data...</td></tr>
                ) : pendudukList.length === 0 ? (
                    <tr><td colSpan={6} className="text-center p-8 text-gray-500">Tidak ada data penduduk.</td></tr>
                ) : (
                    pendudukList.map((penduduk, index) => (
                        <tr key={penduduk.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{penduduk.nama}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{penduduk.nik}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{penduduk.jenisKelamin}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatTanggal(penduduk.tanggalLahir)}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{penduduk.kartuKeluarga.noKk}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {`${penduduk.kartuKeluarga.rt.rw.dukuh.nama}, RW ${penduduk.kartuKeluarga.rt.rw.nomor}, RT ${penduduk.kartuKeluarga.rt.nomor}`}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div className="flex justify-end items-center gap-2">
                                    <button
                                        onClick={() => onEdit(penduduk)}
                                        title="Edit RW"
                                        className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors"
                                    >
                                        <FileEdit className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => onDelete(penduduk.id)}
                                        title="Hapus RW"
                                        className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
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

export default PendudukTable;