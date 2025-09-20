import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { useEffect } from 'react';
import { statusSuratEnum } from '../../../types/pengajuanSurat.types';
import type { MinimalProsesStatusSurat } from '../../../types/pengajuanSurat.types';
import { usePengajuanSuratMutations } from '../../../hooks/PengajuanSurat/usePengajuranSuratMutation';
import { Button } from '../../ui/Button';
import { jenisSuratOptions, statusSuratOptions } from '../../../constant/suratOption';
import SelectInput from '../../ui/SelectInput';

const processSchema = z.object({
  statusSurat: statusSuratEnum,
  catatan: z.string().optional(),
});
type ProcessFormData = z.infer<typeof processSchema>;

// Tipe props untuk modal
interface ProcessSuratModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: MinimalProsesStatusSurat | null;
  onSuccess: () => void;
}

export function ProcessSuratModal({ isOpen, onClose, data, onSuccess }: ProcessSuratModalProps) {
  const { updateMutation } = usePengajuanSuratMutations();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProcessFormData>({
    resolver: zodResolver(processSchema),
  });

  // Reset form setiap kali modal dibuka dengan data baru
  useEffect(() => {
    if (data) {
      reset({
        catatan: data.catatan || '',
      });
    }
  }, [data, reset]);


  const onSubmit = (formData: ProcessFormData) => {
    if (!data) return;

    // Panggil mutasi update dengan data dari form
    updateMutation.mutate(
      { id: data.id, data: formData },
      {
        onSuccess: () => {
          toast.success('Status surat berhasil diperbarui.');
          onSuccess(); // Panggil onSuccess dari props untuk menutup modal & refresh
        },
        onError: () => {
          toast.error('Gagal memperbarui status surat.');
        },
      }
    );
  };

  const getLabel = (value: string) =>
    jenisSuratOptions.find(opt => opt.value === value)?.label ?? value;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl max-h-[95vh] flex flex-col overflow-y-auto scrollbar-hide-y">
        <div className="py-5 px-6 border-b border-gray-200">
          <h3 className="text-xl font-bold mb-4">Proses Pengajuan Surat</h3>
          <p className="text-sm text-gray-600 mb-2">Pemohon: <span className="font-semibold">{data?.penduduk.nama}</span></p>
          <p className="text-sm text-gray-600">Jenis: <span className="font-semibold">{getLabel(data?.jenis ?? '')}</span></p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 overflow-y-auto">
          <SelectInput
            id="status"
            label="Ubah Status"
            error={errors.statusSurat?.message}
            {...register("statusSurat")}
          >
            {statusSuratOptions.map(statusSurat => (
              <option key={statusSurat.value} value={statusSurat.value}>
                {statusSurat.label}
              </option>
            ))}
          </SelectInput>
          <div>
            <label htmlFor="catatan" className="block text-sm font-medium text-gray-700 mb-1">Catatan (Opsional)</label>
            <textarea
              id="catatan"
              rows={3}
              {...register('catatan')}
              className={`w-full px-4 py-3 bg-white-50 border rounded-md text-gray-900 focus:outline-none focus:ring-2 transition-colors duration-200 ${errors.catatan
                ? 'border-red-500 ring-red-500 focus:border-red-500'
                : 'border-blue-300 focus:ring-emerald-500 focus:border-emerald-500'}`} placeholder="Tambahkan catatan untuk pemohon atau arsip..."
            />
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Button type="button" variant="secondary" disabled={updateMutation.isPending} onClick={onClose}>
              Batal
            </Button>
            <Button
              type="submit"
              variant="primary"
              icon="fas fa-save"
              disabled={updateMutation.isPending}
            >
              {updateMutation.isPending ? 'Menyimpan...' : 'Simpan'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}