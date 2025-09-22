import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { fullCreatePengajuanSuratSchema, type DetailPengajuanSuratSchema, type fullCreatePengajuanSuratDto, type LingkupSurat, type PengajuanSuratFormInput, type PilihanJenisSurat } from '../../types/pengajuanSurat.types';
import { usePengajuanSuratMutations } from './usePengajuranSuratMutation';

/**
 * Helper untuk menghasilkan nilai awal form berdasarkan mode (edit/create)
 * dan jenis surat yang dipilih.
 */
export const getInitialValues = (
  pengajuan: DetailPengajuanSuratSchema | null,
  jenisUntukBuat: PilihanJenisSurat | null
): fullCreatePengajuanSuratDto => {

  // --- MODE EDIT ---
  if (pengajuan) {
    const baseFields = {
      pendudukId: pengajuan.pendudukId ?? 0,
      statusSurat: pengajuan.statusSurat,
      lingkup: pengajuan.lingkup,
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
          tahun: Number(pengajuan.dataPermohonan?.tahun) || 0,
          alamatUsaha: pengajuan.dataPermohonan?.alamatUsaha || '',
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

      case 'KETERANGAN_SUAMI_ISTRI_KELUAR_NEGERI':
        return {
          ...baseFields,
          jenis: 'KETERANGAN_SUAMI_ISTRI_KELUAR_NEGERI',
          targetId: pengajuan.targetId || 0,
          negaraTujuan: pengajuan.dataPermohonan.negaraTujuan,
          tahun: Number(pengajuan.dataPermohonan?.tahun) || 0,
          keterangan: pengajuan.dataPermohonan.keterangan,
        }

      case 'KETERANGAN_TIDAK_MEMILIKI_MOBIL':
        return {
          ...baseFields,
          jenis: 'KETERANGAN_TIDAK_MEMILIKI_MOBIL'
        }

      case 'KETERANGAN_PROFESI':
        return {
          ...baseFields,
          jenis: 'KETERANGAN_PROFESI'
        }

      case 'KETERANGAN_DOMISILI':
        return {
          ...baseFields,
          jenis: 'KETERANGAN_DOMISILI',
          keterangan: pengajuan.dataPermohonan.keterangan,
        }

      case 'KETERANGAN_AHLI_WARIS':
        return {
          ...baseFields,
          jenis: 'KETERANGAN_AHLI_WARIS',
          targetId: pengajuan.targetId || 0,
          hubungan: pengajuan.dataPermohonan.hubungan,
          alamatTerakhir: pengajuan.dataPermohonan.alamatTerakhir || '',
          keterangan: pengajuan.dataPermohonan.keterangan,
        }

      default:
        throw new Error("Jenis surat tidak didukung dalam mode edit.");
    }
  }

  // --- MODE CREATE ---
  const baseCreateFields = {
    pendudukId: 0,
    statusSurat: 'PENDING' as const,
    lingkup: 'KOTA' as LingkupSurat,
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
        alamatUsaha: '',
        tahun: 0,
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
        alamatUsaha: '',
        tahun: 0,
      }
  }
};

interface UsePengajuanSuratFormProps {
  pengajuan?: DetailPengajuanSuratSchema | null;
  jenisUntukBuat?: PilihanJenisSurat | null;
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
    resolver: zodResolver(fullCreatePengajuanSuratSchema as any),
    values: defaultValues, //Reset Form
  });

  const { setError } = form;

  const handleApiError = (error: any) => {
    console.error('API Error:', error);
    const messages = error.response?.data?.message;

    if (messages && Array.isArray(messages)) {
      messages.forEach(msg => {
        if (msg.path && msg.message) {
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

  const onSubmit = async (values: PengajuanSuratFormInput) => {
    setApiError(null);

    const data = fullCreatePengajuanSuratSchema.parse(values);

    try {
      if (isEditMode) {
        await updateMutation.mutateAsync({ id: pengajuan!.id, data });
      } else {
        await createMutation.mutateAsync(data);
      }
      onSuccess();
      form.reset();
    } catch (err) {
      handleApiError(err);
    }
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