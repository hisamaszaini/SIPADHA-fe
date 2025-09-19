import type { UseFormReturn } from "react-hook-form";
import { PendudukSelect } from "../../pendudukSelect";
import TextInput from "../../ui/TextInput";

// Tipe props yang dibutuhkan oleh komponen ini
interface KeteranganTidakMampuSekolahFieldsProps {
  form: UseFormReturn<any>;
  targetOptions: any[]; // Sebaiknya gunakan tipe yang lebih spesifik, misal: Penduduk[]
  targetSearch: string;
  onTargetSearchChange: (value: string) => void;
  isTargetLoading: boolean;
}

export function KeteranganTidakMampuSekolahFields({
  form,
  targetOptions,
  targetSearch,
  onTargetSearchChange,
  isTargetLoading,
}: KeteranganTidakMampuSekolahFieldsProps) {

  const { register, formState: { errors }, watch, setValue } = form;

  return (
    <div className="space-y-4 border-t border-gray-200 pt-4 mt-4">
      <h4 className="font-semibold text-gray-700">Detail SKTM untuk Sekolah</h4>
      <p className="text-sm text-gray-500 -mt-2">
        Isi data anak yang menjadi sasaran surat ini.
      </p>

      {/* Komponen Pencarian Anak/Target */}
      <PendudukSelect
        label="Cari Anak / Siswa (Target)"
        value={targetOptions.find(p => p.id === Number(watch('targetId'))) || null}
        onChange={(val) => setValue('targetId', val ? String(val.id) : '', { shouldValidate: true })}
        options={targetOptions}
        onSearchChange={onTargetSearchChange}
        searchTerm={targetSearch}
        isLoading={isTargetLoading}
        error={errors.targetId?.message as string}
      />

      <TextInput
        id="institusi"
        label="Nama Sekolah / Universitas"
        placeholder="Contoh: SMA Negeri 1 Model"
        {...register("institusi")}
        error={errors.institusi?.message as string}
      />

      <TextInput
        id="alamatSiswa"
        label="Alamat Siswa / Mahasiswa"
        placeholder="Alamat tempat tinggal siswa saat ini"
        {...register("alamatSiswa")}
        error={errors.alamatSiswa?.message as string}
      />

      <TextInput
        id="penghasilan"
        label="Penghasilan Orang Tua / Wali"
        placeholder="Contoh: Kurang dari Rp 2.000.000 per bulan"
        {...register("penghasilan")}
        error={errors.penghasilan?.message as string}
      />

      <TextInput
        id="keterangan"
        label="Keterangan Tambahan"
        placeholder="Contoh: Untuk pengajuan beasiswa KIP"
        helpText="Jelaskan tujuan atau kondisi yang relevan."
        {...register("keterangan")}
        error={errors.keterangan?.message as string}
      />
    </div>
  );
}