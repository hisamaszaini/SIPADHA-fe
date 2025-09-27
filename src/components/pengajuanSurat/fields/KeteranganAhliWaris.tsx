import type { UseFormReturn } from "react-hook-form";
import TextInput from "../../ui/TextInput";
import { jenisKelaminOptions } from "../../../constant/pendudukOption";
import SelectInput from "../../ui/SelectInput";

interface KeteranganAhliWarisFieldsProps {
    form: UseFormReturn<any>;
    isViewOnly?: boolean;
}

export function KeteranganAhliWarisFields({
    form, isViewOnly
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
                disabled={isViewOnly}
                error={errors.namaAhli?.message as string}
            />

            <TextInput
                id="tempatLahir"
                label="Tempat Lahir Ahli Waris"
                placeholder="Tempat Lahir Ahli Waris"
                {...register("tempatLahir")}
                disabled={isViewOnly}
                error={errors.tempatLahir?.message as string}
            />

            <TextInput
                type="date"
                id="tanggalLahir"
                label="Tanggal Lahir Ahli Waris"
                placeholder="Tanggal Lahir Ahli Waris"
                {...register("tanggalLahir")}
                disabled={isViewOnly}
                error={errors.tanggalLahir?.message as string}
            />

            <SelectInput
                id="jenisKelamin"
                label="Jenis Kelamin"
                {...register("jenisKelamin")}
                disabled={isViewOnly}
                error={errors.jenisKelamin?.message as string}
            >
                <option value="">-- Pilih Jenis Kelamin --</option>
                {jenisKelaminOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </SelectInput>

            <TextInput
                id="hubungan"
                label="Hubungan dengan Almarhum"
                placeholder="Contoh: Anak Kandung"
                {...register("hubungan")}
                disabled={isViewOnly}
                error={errors.hubungan?.message as string}
            />

            <TextInput
                id="alamat"
                label="Alamat Ahli Waris"
                placeholder="Alamat tempat tinggal atau domisili ahli waris"
                {...register("alamat")}
                disabled={isViewOnly}
                error={errors.alamat?.message as string}
            />

            <TextInput
                id="keterangan"
                label="Keterangan Tujuan Pengajuan Surat"
                placeholder="Contoh: Kepentingan warisan, pengurusan dokumen, dsb."
                {...register("keterangan")}
                disabled={isViewOnly}
                error={errors.keterangan?.message as string}
            />
        </div>
    );
}
