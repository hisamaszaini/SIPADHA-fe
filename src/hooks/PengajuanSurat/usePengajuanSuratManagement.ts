import { useMemo, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { usePengajuanSuratFilters } from './usePengajuanSuratFilters';
import { usePengajuanSuratModals } from './usePengajuanSuratModals';
import { usePengajuanSuratQueries } from './usePengajuanSuratQueries';
import { usePengajuanSuratMutations } from './usePengajuranSuratMutation';
import { pengajuanSuratService } from '../../services/pengajuanSuratService';
import type { PengajuanSuratResponse } from '../../types/pengajuanSurat.types';
import { useDebounce } from '../useDebounce';
import { useAuth } from '../../contexts/AuthContext';

/**
 * Hook orkestrator utama untuk fitur Pengajuan Surat.
 * Menggabungkan semua logika: filtering, state modal, query data, dan mutasi.
 */
export function usePengajuanSuratManagement() {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  
  // State lokal untuk ID yang sedang diedit/dilihat & pencarian di form
  const [activeId, setActiveId] = useState<number | null>(null);
  const [pendudukSearch, setPendudukSearch] = useState('');
  const [targetSearch, setTargetSearch] = useState('');

  const debouncedPendudukSearch = useDebounce(pendudukSearch, 500);
  const debouncedTargetSearch = useDebounce(targetSearch, 500);

  // --- Integrasi Child Hooks ---
  const filters = usePengajuanSuratFilters();
  const modals = usePengajuanSuratModals();
  const { removeMutation } = usePengajuanSuratMutations();
  const queries = usePengajuanSuratQueries({
    params: filters.queryParams,
    pengajuanSuratId: activeId,
    pendudukSearch: debouncedPendudukSearch,
    targetSearch: debouncedTargetSearch,
  });

  // --- Transformasi Data untuk UI (misal: options untuk Select) ---
  const pendudukOptions = useMemo(() => {
    const list = queries.searchPendudukQuery.data?.data || [];
    const detail = queries.findOneQuery.data?.data;

    if (detail?.penduduk && !list.some((p) => p.id === detail.penduduk.id)) {
      return [
        {
          id: detail.penduduk.id, nik: detail.penduduk.nik, nama: detail.penduduk.nama
        },
        ...list,
      ];
    }
    return list;
  }, [queries.searchPendudukQuery.data, queries.findOneQuery.data]);

  const targetOptions = useMemo(() => {
    const list = queries.searchTargetQuery.data?.data ?? [];
    const detail = queries.findOneQuery.data?.data;
    if (!detail?.target) return list;

    const { id, nik, nama } = detail.target;
    if (list.some((t) => t.id === id)) return list;

    return [{ id, nik, nama }, ...list];
  }, [queries.searchTargetQuery.data, queries.findOneQuery.data]);

  // --- Handlers Tingkat Tinggi ---

  // Fungsi untuk menutup semua modal dan mereset state setelah aksi berhasil
  const handleSuccess = () => {
    modals.resetAllModals();
    setActiveId(null);
  };

  // Ambil data terbaru sebelum membuka modal edit
  const handleEdit = async (id: number) => {
    setActiveId(id);
    try {
      const result = await queryClient.fetchQuery({
        queryKey: ['pengajuan-surat', id],
        queryFn: () => pengajuanSuratService.findOne(id),
      });
      if (result.data) {
        modals.openFormModal(result.data);
      }
    } catch (error) {
      console.error('Gagal mengambil data untuk edit:', error);
    }
  };

  // Ambil data terbaru sebelum membuka modal lihat detail
  const handleView = async (id: number) => {
    setActiveId(id);
    try {
      const result = await queryClient.fetchQuery({
        queryKey: ['pengajuan-surat', id],
        queryFn: () => pengajuanSuratService.findOne(id),
      });
      if (result.data) {
        modals.openViewModal(result.data);
      }
    } catch (error) {
      console.error('Gagal mengambil data untuk dilihat:', error);
    }
  };

  // Buka modal proses (misal: ubah status)
  const handleProcess = (data: PengajuanSuratResponse) => {
    modals.openProcessModal(data);
  }

  // Hapus data berdasarkan ID
  const handleDelete = (id: number) => {
    removeMutation.mutate(id, {
      onSuccess: handleSuccess,
    });
  };

  return {
    // Sebarkan semua properti dari filters dan modals agar bisa diakses langsung
    ...filters,
    ...modals,

    // Data dan Options
    data: queries.findAllQuery.data,
    detailData: queries.findOneQuery.data,
    pendudukOptions,
    targetOptions,
    setPendudukSearch,
    setTargetSearch,

    // Loading States
    isLoading: queries.findAllQuery.isLoading || queries.findAllQuery.isFetching,
    isLoadingDetail: queries.findOneQuery.isFetching,
    isLoadingPenduduk: queries.searchPendudukQuery.isFetching,
    isLoadingTarget: queries.searchTargetQuery.isFetching,
    isDeleting: removeMutation.isPending,

    // Handlers
    handleEdit,
    handleView,
    handleDelete,
    handleProcess,
    handleSuccess,
  };
}