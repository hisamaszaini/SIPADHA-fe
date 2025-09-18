/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import type { z } from 'zod';
import { fullCreatePengajuanSuratSchema, type fullCreatePengajuanSuratDto, type PengajuanSuratDetail } from '../../types/pengajuanSurat.types';
import type { JenisSuratEnum } from './jenisSuratMap';
import { usePengajuanSuratMutations } from './usePengajuranSuratMutation';

/**
 * Helper untuk menghasilkan nilai awal form berdasarkan mode (edit/create)
 * dan jenis surat yang dipilih.
 */
export const getInitialValues = (
  pengajuan: PengajuanSuratDetail | null,
  jenisUntukBuat: z.infer<typeof JenisSuratEnum> | null
): fullCreatePengajuanSuratDto => {
  
  // --- MODE EDIT ---
  if (pengajuan) {
    const baseFields = {
      pendudukId: String(pengajuan.pendudukId),
      status: pengajuan.status,
    };

    switch (pengajuan.jenis) {
      case 'KETERANGAN_USAHA':
        return {
          ...baseFields,
          jenis: 'KETERANGAN_USAHA',
          pertanian: pengajuan.dataPermohonan.pertanian || '',
          perdagangan: pengajuan.dataPermohonan.perdagangan || '',
          peternakan: pengajuan.dataPermohonan.peternakan || '',
          perindustrian: pengajuan.dataPermohonan.perindustrian || '',
          jasa: pengajuan.dataPermohonan.jasa || '',
          lain: pengajuan.dataPermohonan.lain || '',
        };

      case 'KETERANGAN_TIDAK_MAMPU_SEKOLAH':
        return {
          ...baseFields,
          jenis: 'KETERANGAN_TIDAK_MAMPU_SEKOLAH',
          targetId: pengajuan.targetId || 0,
          institusi: pengajuan.dataPermohonan.institusi,
          alamatSiswa: pengajuan.dataPermohonan.alamatSiswa,
          penghasilan: pengajuan.dataPermohonan.penghasilan,
          keterangan: pengajuan.dataPermohonan.keterangan,
        };
      
      // Tambahkan case lain jika ada jenis surat baru
      
      default:
        // Fallback untuk jenis surat yang belum ditangani
        throw new Error("Jenis surat tidak didukung dalam mode edit.");
    }
  }

  // --- MODE CREATE ---
  const baseCreateFields = {
    pendudukId: '', // Atau '' jika inputnya string
    status: 'PENDING' as const,
  };

  switch (jenisUntukBuat) {
    case 'KETERANGAN_USAHA':
      return {
        ...baseCreateFields,
        jenis: 'KETERANGAN_USAHA',
        pertanian: '',
        perdagangan: '',
        peternakan: '',
        perindustrian: '',
        jasa: '',
        lain: '',
      };

    case 'KETERANGAN_TIDAK_MAMPU_SEKOLAH':
      return {
        ...baseCreateFields,
        jenis: 'KETERANGAN_TIDAK_MAMPU_SEKOLAH',
        targetId: 0,
        institusi: '',
        alamatSiswa: '',
        penghasilan: '',
        keterangan: '',
      };

    // Tambahkan case lain jika ada jenis surat baru

    default:
        // Default form state saat belum ada jenis surat dipilih
        return {
            ...baseCreateFields,
            jenis: 'KETERANGAN_USAHA', // Default ke jenis pertama
            pertanian: '',
            perdagangan: '',
            peternakan: '',
            perindustrian: '',
            jasa: '',
            lain: '',
        }
  }
};

interface UsePengajuanSuratFormProps {
  pengajuan?: PengajuanSuratDetail | null;
  jenisUntukBuat?: z.infer<typeof JenisSuratEnum> | null;
  onSuccess: () => void;
}

export const usePengajuanSuratForm = ({
  pengajuan,
  jenisUntukBuat = 'KETERANGAN_USAHA', // Default jenis
  onSuccess,
}: UsePengajuanSuratFormProps) => {

  const [apiError, setApiError] = useState<string | null>(null);
  const { createMutation, updateMutation } = usePengajuanSuratMutations();
  const isEditMode = Boolean(pengajuan);

  const defaultValues = useMemo(
    () => getInitialValues(pengajuan || null, jenisUntukBuat),
    [pengajuan, jenisUntukBuat]
  );

  const form = useForm<fullCreatePengajuanSuratDto>({
    resolver: zodResolver(fullCreatePengajuanSuratSchema),
    // `values` akan me-reset form jika `defaultValues` berubah. Cocok untuk kasus ini.
    values: defaultValues, 
  });

  const { setError } = form;

  // Helper untuk menangani error dari API (misal: validasi backend)
  const handleApiError = (error: any) => {
    console.error('API Error:', error);
    const messages = error.response?.data?.message;

    if (messages && Array.isArray(messages)) {
        messages.forEach(msg => {
            if(msg.path && msg.message){
                setError(msg.path.join('.') as any, {
                    type: 'server',
                    message: msg.message,
                });
            }
        });
        toast.error('Gagal menyimpan data, periksa error pada form.');
    } else {
      setApiError(messages || 'Terjadi kesalahan pada server.');
      toast.error(messages || 'Terjadi kesalahan pada server.');
    }
  };

  const onSubmit = async (data: fullCreatePengajuanSuratDto) => {
    setApiError(null);

    const mutation = isEditMode
      ? updateMutation.mutateAsync({ id: pengajuan!.id, data })
      : createMutation.mutateAsync(data);

    await mutation
      .then(() => {
        onSuccess();
        form.reset();
      })
      .catch(handleApiError);
  };

  // Handler untuk error validasi dari sisi klien (Zod)
  const onInvalid = (errors: any) => {
    console.error('Validation Errors:', errors);
    toast.error('Formulir tidak valid, periksa kembali input Anda.');
  };

  return {
    form,
    apiError,
    isEditMode,
    onSubmit,
    onInvalid,
    isLoading: createMutation.isPending || updateMutation.isPending,
  };
};