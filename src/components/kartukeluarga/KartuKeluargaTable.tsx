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

  if (isLoading) {
    return <div className="p-6 text-center text-gray-500">Memuat data kartu keluarga...</div>;
  }

  const formatWilayah = (kk: FindAllKartuKeluargaResponse) => {
    const rt = kk.rt?.nomor ? `RT ${kk.rt.nomor}` : '';
    const rw = kk.rt?.rw?.nomor ? `RW ${kk.rt.rw.nomor}` : '';
    const dukuh = kk.rt?.rw?.dukuh?.nama ?? '';
    if (!rt && !rw && !dukuh) return 'N/A';
    return `${rt}/${rw}, ${dukuh}`;
  };

  return (
    <table className="min-w-full text-left text-sm text-gray-900">
      <thead className="bg-gray-50">
        <tr className="text-xs font-medium uppercase tracking-wider text-gray-500">
          <SortableHeader columnKey="id" onSort={onSort} queryParams={queryParams}>
            NO.
          </SortableHeader>
          <SortableHeader columnKey="noKk" onSort={onSort} queryParams={queryParams}>
            No. KK
          </SortableHeader>
          <SortableHeader columnKey="kepalaKeluarga" onSort={onSort} queryParams={queryParams}>
            Kepala Keluarga
          </SortableHeader>
          <SortableHeader columnKey="alamat" onSort={onSort} queryParams={queryParams}>
            Alamat
          </SortableHeader>
          <th className="px-6 py-3">Wilayah</th>
          <SortableHeader columnKey="anggotaKeluarga" onSort={onSort} queryParams={queryParams}>
            Jml. Anggota
          </SortableHeader>
          <th className="px-6 py-3 text-right">Aksi</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {kkList.length > 0 ? (
          kkList.map((kk, index) => (
            <tr key={kk.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-gray-500">{startingNumber + index}</td>
              <td className="px-6 py-4 font-semibold text-gray-800">{kk.noKk}</td>
              <td className="px-6 py-4 font-medium">{kk.kepalaKeluarga?.nama ?? 'N/A'}</td>
              <td className="px-6 py-4 text-gray-600">{kk.alamat}</td>
              <td className="px-6 py-4 text-gray-600">{formatWilayah(kk)}</td>
              <td className="px-6 py-4 text-center font-medium">{kk._count.anggotaKeluarga}</td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end items-center gap-2">
                  <button
                    onClick={() => onViewMembers(kk)}
                    title="Lihat Anggota Keluarga"
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-100 text-sky-600 hover:bg-sky-200 transition-colors"
                  >
                    <Users className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onEdit(kk)}
                    title="Edit KK & Kepala Keluarga"
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors"
                  >
                    <FileEdit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onDelete(kk.id)}
                    title="Hapus KK"
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
              Tidak ada data Kartu Keluarga yang ditemukan.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default KartuKeluargaTable;