// components/pengajuanSurat/form/FormSktmSekolah.tsx

import React from 'react';
import { useFormContext } from 'react-hook-form'; // <-- 1. Import useFormContext
import type { PengajuanSuratFormInput } from '../../../types/pengajuanSurat.types';
import { PendudukSelect } from '../../pendudukSelect';
import TextInput from '../../ui/TextInput';

// Props yang diterima dari induk tetap sama
interface FormSktmSekolahProps {
    targetOptions: any[];
    targetSearch: string;
    setTargetSearch: (value: string) => void;
    isTargetLoading: boolean;
}

const FormSktmSekolah: React.FC<FormSktmSekolahProps> = ({
    targetOptions, targetSearch, setTargetSearch, isTargetLoading
}) => {
    // 2. Gunakan useFormContext untuk mendapatkan 'register', 'formState', dll.
    const { register, formState: { errors }, watch, setValue } = useFormContext<PengajuanSuratFormInput>();

    return (
        <div className="space-y-4 border-t pt-4">
            <h4 className="font-semibold text-gray-700">Detail Surat Keterangan Tidak Mampu</h4>

            {/* Field Anak (Target) */}
            <PendudukSelect
                value={targetOptions.find(p => String(p.id) === watch('targetId')) || null}
                onChange={(val) => setValue('targetId', val ? String(val.id) : '', { shouldValidate: true })}
                options={targetOptions}
                searchTerm={targetSearch}
                onSearchChange={setTargetSearch}
                isLoading={isTargetLoading}
                error={(errors as any).targetId?.message}
            />

            {/* Field lain yang dibutuhkan oleh SKTM */}
            <TextInput
                id="institusi"
                label="Nama Sekolah / Universitas"
                error={(errors as any).institusi?.message}
                {...register("institusi")}
            />
            <TextInput
                id="alamatSiswa"
                label="Alamat Siswa / Mahasiswa"
                error={(errors as any).alamatSiswa?.message}
                {...register("alamatSiswa")}
            />
            <TextInput
                id="penghasilan"
                label="Penghasilan Orang Tua / Wali"
                {...register("penghasilan")}
                error={(errors as any).penghasilan?.message}
                placeholder="Contoh: Rp 2.000.000"
            />

            <TextInput
                id="keterangan"
                label="Keterangan Pembayaran Gaji / Biaya"
                {...register("keterangan")}
                error={(errors as any).keterangan?.message}
            />
        </div>
    );
};

export default FormSktmSekolah;