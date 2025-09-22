import type { UseFormReturn } from "react-hook-form";
import { PendudukSelect } from "../../pendudukSelect";
import TextInput from "../../ui/TextInput";

interface KeteranganAhliWarisFieldsProps {
    form: UseFormReturn<any>;
    targetOptions: any[];
    targetSearch: string;
    onTargetSearchChange: (value: string) => void;
    isTargetLoading: boolean;
}

export function KeteranganAhliWarisFields({
    form,
    targetOptions,
    targetSearch,
    onTargetSearchChange,
    isTargetLoading,
}: KeteranganAhliWarisFieldsProps) {

    const { register, formState: { errors }, watch, setValue } = form;

    return (
        <div className="space-y-4 border-t border-gray-200 pt-4 mt-4">
            <h4 className="font-semibold text-gray-700">Keterangan Ahli Waris</h4>
            <p className="text-sm text-gray-500 -mt-2">
                Pilih ahli waris atau almarhum yang menjadi target surat.
            </p>

            <PendudukSelect
                label="Cari Ahli Waris / Almarhum (Target)"
                value={targetOptions.find(p => p.id === Number(watch('targetId'))) || null}
                onChange={(val) => setValue('targetId', val ? val.id : NaN, { shouldValidate: true })}
                options={targetOptions}
                onSearchChange={onTargetSearchChange}
                searchTerm={targetSearch}
                isLoading={isTargetLoading}
                error={errors.targetId?.message as string}
            />

            <TextInput
                id="alamatTerakhir"
                label="Alamat Ahli Waris / Almarhum"
                placeholder="Alamat terakhir tempat tinggal atau domisili"
                {...register("alamatTerakhir")}
                error={errors.alamatTerakhir?.message as string}
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
