import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { PengajuanSuratQueryParams } from '../../types/pengajuanSurat.types';
import { useDebounce } from '../useDebounce';

export function usePengajuanSuratFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  // State lokal untuk input pencarian agar bisa di-debounce
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const debouncedSearch = useDebounce(searchTerm, 500);

  // Effect untuk memperbarui URL setelah debounce
  useEffect(() => {
    // Hanya update URL jika nilai debounce berbeda dari nilai di URL
    if (debouncedSearch !== (searchParams.get('search') || '')) {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set('search', debouncedSearch);
      newParams.set('page', '1'); // Selalu reset ke halaman 1 saat ada pencarian baru
      setSearchParams(newParams);
    }
  }, [debouncedSearch, searchParams, setSearchParams]);

  // Memoized query params untuk efisiensi, akan menjadi parameter untuk API call
  const queryParams: PengajuanSuratQueryParams = useMemo(() => ({
    page: Number(searchParams.get('page') || '1'),
    limit: Number(searchParams.get('limit') || '10'), // Default limit 10
    search: searchParams.get('search') || undefined,
    sortBy: searchParams.get('sortBy') || 'createdAt', // Default sort
    sortOrder: (searchParams.get('sortOrder') as 'asc' | 'desc') || 'desc',
    statusSurat: (searchParams.get('statusSurat') as PengajuanSuratQueryParams['statusSurat']) || undefined,
  }), [searchParams]);

  // Handler untuk input pencarian
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handler untuk mengubah status filter
  const handleStatusChange = (value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (value) {
      newParams.set('statusSurat', value);
    } else {
      newParams.delete('statusSurat'); // Hapus dari URL jika value kosong
    }
    newParams.set('page', '1');
    setSearchParams(newParams);
  };

  // Handler untuk mengubah limit per halaman
  const handleLimitChange = (value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('limit', value);
    newParams.set('page', '1');
    setSearchParams(newParams);
  };

  // Handler untuk sorting kolom tabel
  const handleSortChange = (column: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    const isCurrentColumn = queryParams.sortBy === column;
    const newSortOrder = isCurrentColumn && queryParams.sortOrder === 'asc' ? 'desc' : 'asc';
    
    newParams.set('sortBy', column);
    newParams.set('sortOrder', newSortOrder);
    newParams.set('page', '1');
    setSearchParams(newParams);
  };

  // Handler untuk paginasi
  const setPage = (page: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('page', String(page));
    setSearchParams(newParams);
  };

  return {
    queryParams,
    searchTerm,
    handleSearchChange,
    handleStatusChange,
    handleLimitChange,
    handleSortChange,
    setPage,
  };
}