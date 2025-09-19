import type { UseFormReturn } from "react-hook-form";
import { PendudukSelect } from "../../pendudukSelect";
import TextInput from "../../ui/TextInput";

interface KeteranganSuamiIstriKeluarNegeriFieldsProps {
    form: UseFormReturn<any>;
    targetOptions: any[];
    targetSearch: string;
    onTargetSearchChange: (value: string) => void;
    isTargetLoading: boolean;
}

export function KeteranganSuamiIstriKeluarNegeriFields({
    form,
    targetOptions,
    targetSearch,
    onTargetSearchChange,
    isTargetLoading,
}: KeteranganSuamiIstriKeluarNegeriFieldsProps) {

    const { register, formState: { errors }, watch, setValue } = form;
    const groupErrorMessage = errors.root?.message;

    return (
        <div className="space-y-4 border-t border-gray-200 pt-4 mt-4">
            <h4 className="font-semibold text-gray-700">Detail Surat Keterangan Suami / Istri Keluar Negeri</h4>
            <p className="text-sm text-gray-500 -mt-2">
                Isi data suami atau istri yang menjadi sasaran surat ini.
            </p>

            <PendudukSelect
                label="Cari Suami / Istri yang Keluar Negeri"
                value={targetOptions.find(p => p.id === Number(watch('targetId'))) || null}
                onChange={(val) => setValue('targetId', val ? String(val.id) : '', { shouldValidate: true })}
                options={targetOptions}
                onSearchChange={onTargetSearchChange}
                searchTerm={targetSearch}
                isLoading={isTargetLoading}
                error={errors.targetId?.message as string}
            />

            <TextInput
                id="negaraTujuan"
                label="Negara Tujuan"
                error={(errors as any).negaraTujuan?.message}
                {...register("negaraTujuan")}
            />
            <TextInput
                type="number"
                id="tahun"
                label="Tahun berangkat"
                error={(errors as any).tahun?.message}
                {...register("tahun")}
            />
            <TextInput
                id="keterangan"
                label="Keperluan Pengajuan Surat"
                {...register("keterangan")}
                error={(errors as any).keterangan?.message}
            />

            {groupErrorMessage && (
                <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm">
                    <p>{groupErrorMessage as string}</p>
                </div>
            )}

        </div>
    );
};