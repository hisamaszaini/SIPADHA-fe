import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import type { fullCreatePengajuanSuratDto, UpdatePengajuanSuratDto } from '../../types/pengajuanSurat.types';
import { pengajuanSuratService } from '../../services/pengajuanSuratService';

/**
 * Custom hook yang menyediakan semua fungsi mutasi (create, update, delete)
 * terkait fitur "Pengajuan Surat".
 */
export function usePengajuanSuratMutations() {
  const queryClient = useQueryClient();

  const invalidateQueries = () => {
    queryClient.invalidateQueries({ queryKey: ['pengajuan-surat'] });
  };

  /**
   * Mutasi untuk membuat entri pengajuan surat baru.
   */
  const createMutation = useMutation({
    mutationFn: (data: fullCreatePengajuanSuratDto) => pengajuanSuratService.create(data),
    onSuccess: () => {
      toast.success('Pengajuan surat berhasil dibuat.');
      invalidateQueries();
    },
    onError: (error) => {
      console.error('Create Pengajuan Surat failed:', error);
      toast.error('Gagal membuat pengajuan surat.');
    },
  });

  /**
   * Mutasi untuk memperbarui entri pengajuan surat yang sudah ada.
   */
  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdatePengajuanSuratDto }) => 
      pengajuanSuratService.update(id, data),
    onSuccess: (data, variables) => {
      toast.success('Pengajuan surat berhasil diperbarui.');
      // Invalidate list dan juga detail query-nya jika ada
      invalidateQueries();
      queryClient.invalidateQueries({ queryKey: ['pengajuan-surat', variables.id] });
    },
    onError: (error) => {
      console.error('Update Pengajuan Surat failed:', error);
      toast.error('Gagal memperbarui pengajuan surat.');
    },
  });

  /**
   * Mutasi untuk menghapus entri pengajuan surat.
   */
  const removeMutation = useMutation({
    mutationFn: (id: number) => pengajuanSuratService.remove(id),
    onSuccess: () => {
      toast.success('Pengajuan surat berhasil dihapus.');
      invalidateQueries();
    },
    onError: (error) => {
      console.error('Remove Pengajuan Surat failed:', error);
      toast.error('Gagal menghapus pengajuan surat.');
    },
  });

  return {
    createMutation,
    updateMutation,
    removeMutation,
  };
}