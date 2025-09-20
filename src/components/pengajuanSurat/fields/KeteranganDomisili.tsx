import type { UseFormReturn } from "react-hook-form";
import TextInput from "../../ui/TextInput";

interface KeteranganDomisiliFieldsProps {
  form: UseFormReturn<any>;
}

export function KeteranganDomisiliFields({ form }: KeteranganDomisiliFieldsProps) {
  const { register, formState: { errors } } = form;
  const groupErrorMessage = errors.root?.message;

  return (
    <div className="space-y-4 border-t border-gray-200 pt-4 mt-4">
      <h4 className="font-semibold text-gray-700">Detail Keterangan Domisili</h4>
      <p className="text-sm text-gray-500 -mt-2">
        Isi keterangan dengan tujuan pengajuan surat domisili.
      </p>

      <TextInput
        id="keterangan"
        label="Keterangan"
        {...register("keterangan")}
        error={errors.keterangan?.message as string}
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