import { useEffect, useState } from 'react';
import type { DetailPengajuanSuratSchema, PilihanJenisSurat } from '../../types/pengajuanSurat.types';
import { usePengajuanSuratForm } from '../../hooks/PengajuanSurat/usePengajuanSuratForm';
import { PendudukSelect } from '../pendudukSelect';
import SelectInput from '../ui/SelectInput';
import { KeteranganUsahaFields } from './fields/KeteranganUsahaFields';
import { KeteranganTidakMampuSekolahFields } from './fields/SKTMSekolahFields';
import { Button } from '../ui/Button';
import { jenisSuratOptions, lingkupSuratOptions } from '../../constant/suratOption';
import { KeteranganSuamiIstriKeluarNegeriFields } from './fields/SuamiIstriKeluarNegeriFields';
import { KeteranganDomisiliFields } from './fields/KeteranganDomisili';
import { KeteranganAhliWarisFields } from './fields/KeteranganAhliWaris';

interface PengajuanSuratFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    pengajuan?: DetailPengajuanSuratSchema | null;
    onSuccess: () => void;
    pendudukOptions: any[];
    pendudukSearch: string;
    onPendudukSearchChange: (value: string) => void;
    isPendudukLoading: boolean;
    targetOptions: any[];
    targetSearch: string;
    onTargetSearchChange: (value: string) => void;
    isTargetLoading: boolean;
}

export function PengajuanSuratFormModal({
    isOpen,
    onClose,
    pengajuan,
    onSuccess,
    pendudukOptions,
    pendudukSearch,
    onPendudukSearchChange,
    isPendudukLoading,
    targetOptions,
    targetSearch,
    onTargetSearchChange,
    isTargetLoading,
}: PengajuanSuratFormModalProps) {

    // console.log(`TargetOptions: ${JSON.stringify(targetOptions, null, 2)}`);

    const isEditMode = !!pengajuan;
    const [selectedJenis, setSelectedJenis] = useState<PilihanJenisSurat>(
        pengajuan?.jenis as PilihanJenisSurat || 'KETERANGAN_USAHA'
    );

    const { form, onSubmit, onInvalid, isLoading } = usePengajuanSuratForm({
        pengajuan,
        jenisUntukBuat: selectedJenis,
        onSuccess,
    });

    // Ambil method yang dibutuhkan dari hook form
    const { register, watch, setValue, formState: { errors } } = form;

    // Tonton perubahan 'jenis' untuk render field kondisional
    const watchedJenis = watch('jenis');

    useEffect(() => {
        if (!isEditMode) {
            // Set nilai 'jenis' di form state saat dropdown berubah
            setValue('jenis', selectedJenis, { shouldValidate: true });
        }
    }, [selectedJenis, isEditMode, setValue]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[95vh] flex flex-col overflow-y-auto scrollbar-hide-y">
                <div className="py-5 px-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        {isEditMode ? 'Edit Pengajuan Surat' : 'Tambah Pengajuan Surat'}
                    </h2>
                    <p className="text-md text-gray-600 mt-4 font-bold"><span className="text-red-500">*</span> Wajib diisi</p>
                </div>

                <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="space-y-4 p-6 overflow-y-auto">
                    <SelectInput
                        id="jenis"
                        label="Jenis Surat"
                        error={errors.jenis?.message}
                        disabled={isEditMode}
                        {...register("jenis", {
                            onChange: (e) => setSelectedJenis(e.target.value as PilihanJenisSurat)
                        })}
                    >
                        {jenisSuratOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </SelectInput>

                    <PendudukSelect
                        label="Pemohon"
                        value={pendudukOptions.find(p => p.id === Number(watch('pendudukId'))) || null}
                        onChange={(val) => setValue('pendudukId', val ? Number(val.id) : 0, { shouldValidate: true })}
                        options={pendudukOptions}
                        onSearchChange={onPendudukSearchChange}
                        searchTerm={pendudukSearch}
                        isLoading={isPendudukLoading}
                        error={errors.pendudukId?.message as string}
                    />

                    <SelectInput
                        id="lingkup"
                        label="Lingkup Surat"
                        error={errors.lingkup?.message}
                        {...register("lingkup")}
                    >
                        <option>--- Pilih Lingkup Surat ---</option>
                        {lingkupSuratOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </SelectInput>

                    {watchedJenis === "KETERANGAN_USAHA" && (
                        <KeteranganUsahaFields form={form} />
                    )}

                    {watchedJenis === "KETERANGAN_TIDAK_MAMPU_SEKOLAH" && (
                        <KeteranganTidakMampuSekolahFields
                            form={form}
                            targetOptions={targetOptions}
                            targetSearch={targetSearch}
                            onTargetSearchChange={onTargetSearchChange}
                            isTargetLoading={isTargetLoading}
                        />
                    )}

                    {watchedJenis === "KETERANGAN_SUAMI_ISTRI_KELUAR_NEGERI" && (
                        <KeteranganSuamiIstriKeluarNegeriFields
                            form={form}
                            targetOptions={targetOptions}
                            targetSearch={targetSearch}
                            onTargetSearchChange={onTargetSearchChange}
                            isTargetLoading={isTargetLoading}
                        />
                    )}

                    {watchedJenis === "KETERANGAN_DOMISILI" && (
                        <KeteranganDomisiliFields form={form} />
                    )}

                    {watchedJenis === "KETERANGAN_AHLI_WARIS" && (
                        <KeteranganAhliWarisFields
                            form={form}
                            targetOptions={targetOptions}
                            targetSearch={targetSearch}
                            onTargetSearchChange={onTargetSearchChange}
                            isTargetLoading={isTargetLoading}
                        />
                    )}

                    <div className="flex gap-3 justify-end mt-10">
                        <Button type="button" variant="secondary" onClick={onClose}>
                            Batal
                        </Button>
                        <Button
                            type="submit"
                            variant="primary"
                            icon="fas fa-save"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Menyimpan...' : isEditMode ? 'Perbarui' : 'Simpan'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}