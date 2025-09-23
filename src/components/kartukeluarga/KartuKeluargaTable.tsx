import React from 'react';
import { FileEdit, Trash2, Users } from 'lucide-react';
import type { FindAllKartuKeluargaResponse, KartuKeluargaQueryParams, KartuKeluargaSortableKeys } from '../../types/kartuKeluarga.types';
import type { PaginationMeta } from '../../types/api.types';
import { SortableHeader } from '../ui/SortableHeader';

interface KartuKeluargaTableProps {
    kkList: FindAllKartuKeluargaResponse[];
    isLoading: boolean;
    meta: PaginationMeta | null;
    onEdit: (kk: FindAllKartuKeluargaResponse) => void;
    onDelete: (id: number) => void;
    onViewMembers: (kk: FindAllKartuKeluargaResponse) => void;
    onSort: (sortKey: KartuKeluargaSortableKeys) => void;
    queryParams: KartuKeluargaQueryParams;
}

const KartuKeluargaTable: React.FC<KartuKeluargaTableProps> = ({
    kkList,
    isLoading,
    meta,
    onEdit,
    onDelete,
    onViewMembers,
    onSort,
    queryParams
}) => {
    const startingNumber = meta ? (meta.page - 1) * meta.limit + 1 : 1;

    const formatWilayah = (kk: FindAllKartuKeluargaResponse) => {
        const rt = kk.rt?.nomor ? `RT ${kk.rt.nomor}` : '';
        const rw = kk.rt?.rw?.nomor ? `RW ${kk.rt.rw.nomor}` : '';
        const dukuh = kk.rt?.rw?.dukuh?.nama ?? '';
        if (!rt && !rw && !dukuh) return 'N/A';
        return `${rt}/${rw}, ${dukuh}`;
    };

    if (isLoading) {
        return <div className="p-6 text-center text-gray-500">Memuat data kartu keluarga...</div>;
    }

    if (kkList.length === 0) {
        return <div className="p-6 text-center text-gray-500">Tidak ada data Kartu Keluarga yang ditemukan.</div>;
    }

    return (
        <>
            {/* Desktop Table View (hidden on small screens) */}
            <div className="hidden md:block overflow-x-auto border-y border-gray-200 rounded-lg shadow-md">
                <table className="min-w-full text-left text-sm text-gray-900">
                    <thead className="bg-gray-50">
                        <tr className="text-xs font-medium uppercase tracking-wider text-gray-500">
                            <SortableHeader columnKey="id" onSort={onSort} queryParams={queryParams}>NO.</SortableHeader>
                            <SortableHeader columnKey="noKk" onSort={onSort} queryParams={queryParams}>No. KK</SortableHeader>
                            <SortableHeader columnKey="kepalaKeluarga" onSort={onSort} queryParams={queryParams}>Kepala Keluarga</SortableHeader>
                            <SortableHeader columnKey="alamat" onSort={onSort} queryParams={queryParams}>Alamat</SortableHeader>
                            <th className="px-6 py-3">Wilayah</th>
                            <SortableHeader columnKey="anggotaKeluarga" onSort={onSort} queryParams={queryParams}>Jml. Anggota</SortableHeader>
                            <th className="px-6 py-3 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {kkList.map((kk, index) => (
                            <tr key={kk.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-gray-500">{startingNumber + index}</td>
                                <td className="px-6 py-4 font-semibold text-gray-800">{kk.noKk}</td>
                                <td className="px-6 py-4 font-medium max-w-xs break-words">{kk.kepalaKeluarga?.nama ?? 'N/A'}</td>
                                <td className="px-6 py-4 text-gray-600">{kk.alamat}</td>
                                <td className="px-6 py-4 text-gray-600">{formatWilayah(kk)}</td>
                                <td className="px-6 py-4 text-center font-medium">{kk._count.anggotaKeluarga}</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end items-center gap-2">
                                        <button onClick={() => onViewMembers(kk)} title="Lihat Anggota Keluarga" className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-100 text-sky-600 hover:bg-sky-200 transition-colors">
                                            <Users className="w-5 h-5" />
                                        </button>
                                        <button onClick={() => onEdit(kk)} title="Edit KK & Kepala Keluarga" className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors">
                                            <FileEdit className="w-5 h-5" />
                                        </button>
                                        <button onClick={() => onDelete(kk.id)} title="Hapus KK" className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View (visible only on small screens) -- UPDATED SECTION */}
            <div className="md:hidden space-y-4">
                {kkList.map((kk, index) => (
                    <div key={kk.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                        {/* Card Header */}
                        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                            <div className="flex justify-between items-start gap-3">
                                <div className="flex items-start gap-3 flex-1">
                                    {/* Number Box */}
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-700 rounded-md font-semibold text-sm">
                                        {startingNumber + index}
                                    </span>
                                    {/* Main Info */}
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-800 text-sm">{kk.noKk}</p>
                                        <p className="text-sm text-gray-600 break-words">{kk.kepalaKeluarga?.nama ?? 'N/A'}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 flex-shrink-0">
                                    <button onClick={() => onViewMembers(kk)} title="Lihat Anggota" className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-100 text-sky-600 hover:bg-sky-200 transition-colors">
                                        <Users className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => onEdit(kk)} title="Edit KK" className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors">
                                        <FileEdit className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => onDelete(kk.id)} title="Hapus KK" className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Card Body */}
                        <div className="p-4 space-y-3 text-sm">
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Alamat</span>
                                <span className="font-medium text-gray-800">{kk.alamat}</span>
                            </div>
                            <div className="border-t border-gray-100"></div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500">Wilayah:</span>
                                <span className="font-medium text-gray-800 text-right">{formatWilayah(kk)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500">Jumlah Anggota:</span>
                                <span className="font-medium text-gray-800">{kk._count.anggotaKeluarga} Orang</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default KartuKeluargaTable;