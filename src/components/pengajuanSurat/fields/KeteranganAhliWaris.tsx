import type { UseFormReturn } from "react-hook-form";
import TextInput from "../../ui/TextInput";
import { jenisKelaminOptions } from "../../../constant/pendudukOption";

interface KeteranganAhliWarisFieldsProps {
    form: UseFormReturn<any>;
}

export function KeteranganAhliWarisFields({
    form
}: KeteranganAhliWarisFieldsProps) {

    const { register, formState: { errors } } = form;

    return (
        <div className="space-y-4 border-t border-gray-200 pt-4 mt-4">
            <h4 className="font-semibold text-gray-700">Keterangan Ahli Waris</h4>
            <p className="text-sm text-gray-500 -mt-2">
                Pilih ahli waris atau yang mengajukan surat.
            </p>

            <TextInput
                id="namaAhli"
                label="Nama Ahli Waris"
                placeholder="Nama ahli waris"
                {...register("namaAhli")}
                error={errors.namaAhli?.message as string}
            />

            <TextInput
                id="tempatLahir"
                label="Tempat Lahir Ahli Waris"
                placeholder="Tempat Lahir Ahli Waris"
                {...register("tempatLahir")}
                error={errors.tempatLahir?.message as string}
            />

            <div>
                <label htmlFor="tanggalLahir" className="block text-sm font-medium text-gray-700 mb-1">
                    Tanggal Lahir
                </label>
                <input
                    type="date"
                    id="tanggalLahir"
                    {...register("tanggalLahir")}
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-md text-gray-900 focus:outline-none focus:ring-2 ${errors.tanggalLahir
                        ? "border-red-500 ring-red-500"
                        : "border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                        }`}
                />
                {errors.tanggalLahir && (
                    <p className="mt-1 text-sm text-red-600">{errors.tanggalLahir.message as string}</p>
                )}
            </div>

            <div>
                <label htmlFor="jenisKelamin" className="block text-sm font-medium text-gray-700 mb-1">
                    Jenis Kelamin
                </label>
                <select
                    id="jenisKelamin"
                    {...register("jenisKelamin")}
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-md text-gray-900 focus:outline-none focus:ring-2 ${errors.jenisKelamin
                        ? "border-red-500 ring-red-500"
                        : "border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                        }`}
                >
                    <option value="">-- Pilih Jenis Kelamin --</option>
                    {jenisKelaminOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {errors.jenisKelamin && (
                    <p className="mt-1 text-sm text-red-600">{errors.jenisKelamin.message as string}</p>
                )}
            </div>

            <TextInput
                id="hubungan"
                label="Hubungan dengan Almarhum"
                placeholder="Contoh: Anak Kandung"
                {...register("hubungan")}
                error={errors.hubungan?.message as string}
            />

            <TextInput
                id="alamat"
                label="Alamat Ahli Waris"
                placeholder="Alamat tempat tinggal atau domisili ahli waris"
                {...register("alamat")}
                error={errors.alamat?.message as string}
            />

            <TextInput
                id="keterangan"
                label="Keterangan Tujuan Pengajuan Surat"
                placeholder="Contoh: Kepentingan warisan, pengurusan dokumen, dsb."
                {...register("keterangan")}
                error={errors.keterangan?.message as string}
            />
        </div>
    );
}
