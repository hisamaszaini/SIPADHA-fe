import React from 'react';
import { StatusSuratEnum } from '../../types/pengajuanSurat.types';

interface PengajuanSuratFiltersProps {
  searchTerm: string;
  statusFilter: string;
  limit: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onStatusChange: (value: string) => void;
  onLimitChange: (value: string) => void;
}

export function PengajuanSuratFilters({
  searchTerm,
  statusFilter,
  limit,
  onSearchChange,
  onStatusChange,
  onLimitChange,
}: PengajuanSuratFiltersProps) {
  const statusOptions = StatusSuratEnum.options;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-end gap-4 bg-white border-b border-gray-200">
      {/* Input Pencarian */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">Cari Nama / NIK Pemohon</label>
        <input
          id="search"
          type="text"
          placeholder="Ketik untuk mencari..."
          value={searchTerm}
          onChange={onSearchChange}
          className="mt-1 w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Dropdown Filter Status */}
      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
          Status Surat
        </label>
        <select
          id="status"
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value)}
          className="mt-1 w-full px-3 py-2.5 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="">Semua Status</option>
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      {/* Dropdown Limit per Halaman */}
      <div>
        <label htmlFor="limit" className="block text-sm font-medium text-gray-700 mb-1">
          Perhalaman
        </label>
        <select
          id="limit"
          value={limit}
          onChange={(e) => onLimitChange(e.target.value)}
          className="mt-1 w-full px-3 py-2.5 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
}