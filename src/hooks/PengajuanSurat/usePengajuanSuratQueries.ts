import { keepPreviousData, useQuery } from '@tanstack/react-query';
import type { PengajuanSuratQueryParams } from '../../types/pengajuanSurat.types';
import { pengajuanSuratService } from '../../services/pengajuanSuratService';
import pendudukService from '../../services/pendudukService';

interface PengajuanSuratQueriesProps {
  params?: PengajuanSuratQueryParams;  
  pengajuanSuratId?: number | null;  
  pendudukSearch?: string;
  targetSearch?: string;
}

export function usePengajuanSuratQueries({
  params,
  pengajuanSuratId,
  pendudukSearch = '',
  targetSearch = '',
}: PengajuanSuratQueriesProps) {

  /**
   * Query untuk mengambil daftar semua pengajuan surat dengan filter,
   * paginasi, dan sorting.
   */
  const findAllQuery = useQuery({
    queryKey: ['pengajuan-surat', params],
    queryFn: () => pengajuanSuratService.findAll(params),
    placeholderData: keepPreviousData, // Untuk UX yang lebih baik saat paginasi
  });

  /**
   * Query untuk mengambil detail satu pengajuan surat.
   * Hanya akan aktif (enabled) jika `pengajuanSuratId` ada nilainya.
   */
  const findOneQuery = useQuery({
    queryKey: ['pengajuan-surat', pengajuanSuratId],
    queryFn: () => pengajuanSuratService.findOne(pengajuanSuratId!),
    enabled: !!pengajuanSuratId, // Query hanya berjalan jika ID tersedia
  });

  /**
   * Query untuk mencari data penduduk (pemohon) untuk dropdown di form.
   * Query key menyertakan `pendudukSearch` sehingga otomatis di-cache dan
   * di-refetch saat nilai search berubah (ini menggantikan useEffect + debounce).
   */
  const searchPendudukQuery = useQuery({
      queryKey: ['penduduk-search', pendudukSearch],
      queryFn: () => pendudukService.findAll({ limit: 10, search: pendudukSearch }),
      enabled: typeof pendudukSearch === 'string', // Hanya aktif jika search term adalah string
      placeholderData: keepPreviousData,
  });

  /**
   * Query untuk mencari data target (misal: anak untuk surat tidak mampu).
   * Logikanya sama dengan searchPendudukQuery.
   */
  const searchTargetQuery = useQuery({
      queryKey: ['target-search', targetSearch],
      queryFn: () => pendudukService.findAll({ limit: 10, search: targetSearch }),
      enabled: typeof targetSearch === 'string',
      placeholderData: keepPreviousData,
  });

  return {
    findAllQuery,
    findOneQuery,
    searchPendudukQuery,
    searchTargetQuery,
  };
}