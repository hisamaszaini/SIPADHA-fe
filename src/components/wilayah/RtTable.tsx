import React from 'react';
import { FileEdit, Trash2 } from 'lucide-react';
import type { RtQueryParams, RtSortableKeys, RtWithRelations } from '../../types/rt.types';
import type { PaginationMeta } from '../../types/api.types';

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

const RtTable: React.FC<RtTableProps> = ({ rtList, isLoading, meta, onEdit, onDelete }) => {
  // Hitung nomor awal untuk paginasi
  const startingNumber = meta ? (meta.page - 1) * meta.limit + 1 : 1;

  // Tampilkan pesan loading jika data sedang diambil
  if (isLoading) {
    return (
      <div className="p-6 text-center text-gray-500">
        Memuat data RT...
      </div>
    );
  }

  return (
    <table className="min-w-full text-left text-sm text-gray-900">
      <thead className="bg-gray-50">
        <tr className="text-xs font-medium uppercase tracking-wider text-gray-500">
          <th className="px-6 py-3 w-16">No.</th>
          <th className="px-6 py-3">Nomor RT</th>
          <th className="px-6 py-3">Induk RW</th>
          <th className="px-6 py-3">Induk Dukuh</th>
          <th className="px-6 py-3">Jumlah KK</th>
          <th className="px-6 py-3 text-right">Aksi</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {rtList.length > 0 ? (
          rtList.map((rt, index) => (
            <tr key={rt.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-500">
                {startingNumber + index}
              </td>
              <td className="px-6 py-4 font-semibold">
                {`RT ${rt.nomor}`}
              </td>
              <td className="px-6 py-4 text-gray-600">
                {rt.rw ? `RW ${rt.rw.nomor}` : 'N/A'}
              </td>
              <td className="px-6 py-4 text-gray-600">
                {rt.rw?.dukuh?.nama ?? 'N/A'}
              </td>
              <td className="px-6 py-4 text-gray-600">
                {rt._count.KartuKeluarga}
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end items-center gap-2">
                  <button
                    onClick={() => onEdit(rt)}
                    title="Edit RT"
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors"
                  >
                    <FileEdit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onDelete(rt.id)}
                    title="Hapus RT"
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          // Tampilkan pesan jika tidak ada data
          <tr>
            <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
              Tidak ada data RT yang ditemukan.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default RtTable;