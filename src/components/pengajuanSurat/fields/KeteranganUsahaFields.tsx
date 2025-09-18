import type { UseFormReturn } from "react-hook-form";
import TextInput from "../../ui/TextInput";

// Tentukan tipe props agar komponen lebih kuat dan jelas
interface KeteranganUsahaFieldsProps {
  // Menerima seluruh instance form dari react-hook-form
  form: UseFormReturn<any>;
}

export function KeteranganUsahaFields({ form }: KeteranganUsahaFieldsProps) {
  // Destructuring method yang dibutuhkan dari form instance
  const { register, formState: { errors } } = form;

  // Cek jika ada error global dari Zod .refine()
  // Error ini akan memiliki path 'root' atau 'root.message'
  const groupErrorMessage = errors.root?.message;

  return (
    <div className="space-y-4 border-t border-gray-200 pt-4 mt-4">
      <h4 className="font-semibold text-gray-700">Detail Keterangan Usaha</h4>
      <p className="text-sm text-gray-500 -mt-2">
        Isi salah satu atau beberapa bidang usaha yang dimiliki pemohon.
      </p>

      <TextInput
        id="pertanian"
        label="Jenis Usaha Pertanian"
        placeholder="Contoh: Tani Padi, Kebun Jagung"
        {...register("pertanian")}
        error={errors.pertanian?.message as string}
      />

      <TextInput
        id="perdagangan"
        label="Jenis Usaha Perdagangan"
        placeholder="Contoh: Toko Kelontong, Warung Makan"
        {...register("perdagangan")}
        error={errors.perdagangan?.message as string}
      />

      <TextInput
        id="peternakan"
        label="Jenis Usaha Peternakan"
        placeholder="Contoh: Ternak Ayam Potong, Ternak Lele"
        {...register("peternakan")}
        error={errors.peternakan?.message as string}
      />

      <TextInput
        id="perindustrian"
        label="Jenis Usaha Perindustrian"
        placeholder="Contoh: Pembuatan Tahu, Kerajinan Kayu"
        {...register("perindustrian")}
        error={errors.perindustrian?.message as string}
      />

      <TextInput
        id="jasa"
        label="Jenis Usaha Jasa"
        placeholder="Contoh: Bengkel Motor, Jasa Jahit"
        {...register("jasa")}
        error={errors.jasa?.message as string}
      />

      <TextInput
        id="lain"
        label="Jenis Usaha Lainnya"
        helpText="Opsional, jika usaha tidak termasuk kategori di atas."
        {...register("lain")}
        error={errors.lain?.message as string}
      />

      <TextInput
        id="alamatUsaha"
        label="Alamat Usaha"
        {...register("alamatUsaha")}
        error={errors.alamatUsaha?.message as string}
      />

      <TextInput
        type="number"
        id="tahun"
        label="Tahun Mulai Usaha"
        {...register("tahun")}
        error={errors.tahun?.message as string}
      />

      {/* Menampilkan pesan error validasi grup dari Zod .refine() */}
      {groupErrorMessage && (
        <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm">
          <p>{groupErrorMessage as string}</p>
        </div>
      )}
    </div>
  );
}