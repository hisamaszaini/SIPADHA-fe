import type { UseFormReturn } from "react-hook-form";
import TextInput from "../../ui/TextInput";

interface KeteranganUsahaFieldsProps {
  form: UseFormReturn<any>;
  isViewOnly?: boolean;
}

export function KeteranganUsahaFields({ form, isViewOnly }: KeteranganUsahaFieldsProps) {
  const { register, formState: { errors } } = form;

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
        disabled={isViewOnly}
        error={errors.pertanian?.message as string}
      />

      <TextInput
        id="perdagangan"
        label="Jenis Usaha Perdagangan"
        placeholder="Contoh: Toko Kelontong, Warung Makan"
        {...register("perdagangan")}
        disabled={isViewOnly}
        error={errors.perdagangan?.message as string}
      />

      <TextInput
        id="peternakan"
        label="Jenis Usaha Peternakan"
        placeholder="Contoh: Ternak Ayam Potong, Ternak Lele"
        {...register("peternakan")}
        disabled={isViewOnly}
        error={errors.peternakan?.message as string}
      />

      <TextInput
        id="perindustrian"
        label="Jenis Usaha Perindustrian"
        placeholder="Contoh: Pembuatan Tahu, Kerajinan Kayu"
        {...register("perindustrian")}
        disabled={isViewOnly}
        error={errors.perindustrian?.message as string}
      />

      <TextInput
        id="jasa"
        label="Jenis Usaha Jasa"
        placeholder="Contoh: Bengkel Motor, Jasa Jahit"
        {...register("jasa")}
        disabled={isViewOnly}
        error={errors.jasa?.message as string}
      />

      <TextInput
        id="lain"
        label="Jenis Usaha Lainnya"
        helpText="Opsional, jika usaha tidak termasuk kategori di atas."
        {...register("lain")}
        disabled={isViewOnly}
        error={errors.lain?.message as string}
      />

      <TextInput
        id="alamatUsaha"
        label="Alamat Usaha"
        {...register("alamatUsaha")}
        disabled={isViewOnly}
        error={errors.alamatUsaha?.message as string}
      />

      <TextInput
        type="number"
        id="tahun"
        label="Tahun Mulai Usaha"
        {...register("tahun")}
        disabled={isViewOnly}
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