import React from 'react';
import { FileEdit, Trash2 } from 'lucide-react';
import type { Rw, RwQueryParams, RwSortableKeys, RwWithRelations } from '../../types/rw.types';
import type { PaginationMeta } from '../../types/api.types';
import { SortableHeader } from '../ui/SortableHeader';

interface RwTableProps {
  rwList: RwWithRelations[];
  isLoading: boolean;
  meta: PaginationMeta | null;
  onEdit: (rw: RwWithRelations) => void;
  onDelete: (id: number) => void;
  onSort: (sortKey: RwSortableKeys) => void;
  queryParams: RwQueryParams;
}

const RwTable: React.FC<RwTableProps> = ({ rwList, isLoading, meta, onEdit, onDelete, onSort, queryParams }) => {
  const startingNumber = meta ? (meta.page - 1) * meta.limit + 1 : 1;

  const getSortIcon = (key: keyof Rw) => {
    if (queryParams.sortBy !== key) return 'opacity-20';
    return queryParams.sortOrder === 'asc' ? '▲' : '▼';
  };

  if (isLoading) {
    return (
      <div className="p-6 text-center text-gray-500">
        Memuat data RW...
      </div>
    );
  }

  return (
    <table className="min-w-full text-left text-sm text-gray-900">
      <thead className="bg-gray-50">
        <tr className="text-xs font-medium uppercase tracking-wider text-gray-500">
          <SortableHeader columnKey="id" onSort={onSort} queryParams={queryParams}>
            NO.
          </SortableHeader>
          <SortableHeader columnKey="nomor" onSort={onSort} queryParams={queryParams}>
            Nomor RW
          </SortableHeader>
          <SortableHeader columnKey="dukuh" onSort={onSort} queryParams={queryParams}>
            Induk Dukuh
          </SortableHeader>
          <SortableHeader columnKey="rts" onSort={onSort} queryParams={queryParams}>
            Jumlah RT
          </SortableHeader>
          <th className="px-6 py-3 text-right">Aksi</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {rwList.length > 0 ? (
          rwList.map((rw, index) => (
            <tr key={rw.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-500">
                {startingNumber + index}
              </td>
              <td className="px-6 py-4 font-semibold">
                {`RW ${rw.nomor}`}
              </td>
              <td className="px-6 py-4 text-gray-600">
                {rw.dukuh ? rw.dukuh.nama : 'N/A'}
              </td>
              <td className="px-6 py-4 text-gray-600">
                {rw._count.rts}
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end items-center gap-2">
                  <button
                    onClick={() => onEdit(rw)}
                    title="Edit RW"
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors"
                  >
                    <FileEdit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onDelete(rw.id)}
                    title="Hapus RW"
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
            <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
              Tidak ada data RW yang ditemukan.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default RwTable;