import React from 'react';
import { useFormContext } from 'react-hook-form';
import TextInput from '../../ui/TextInput';
import type { PengajuanSuratFormInput } from '../../../types/pengajuanSurat.types';

const FormKeteranganUsaha: React.FC = () => {
    // const { register, formState: { errors } } = useFormContext();
    const { register, formState: { errors } } = useFormContext<PengajuanSuratFormInput>();
    const groupErrorMessage = errors.root?.message || (errors as any).pertanian?.message;

    return (
        <div className="space-y-4 border-t pt-4 mt-4">
            <h4 className="font-semibold text-gray-700">Detail Keterangan Usaha</h4>
            <p className="text-sm text-gray-500 -mt-2">
                Isi salah satu atau beberapa bidang usaha yang dimiliki pemohon.
            </p>
            <TextInput
                id="pertanian"
                label="Jenis Usaha Pertanian"
                placeholder="Contoh: Tani Padi"
                {...register("pertanian")}
                error={(errors as any).pertanian?.message}
            />
            <TextInput
                id="perdagangan"
                label="Jenis Usaha Perdagangan"
                placeholder="Contoh: Warung Mie Ayam"
                {...register("perdagangan")}
                error={(errors as any).perdagangan?.message}
            />
            <TextInput
                id="peternakan"
                label="Jenis Usaha Peternakan"
                placeholder="Contoh: Ternak Ayam"
                {...register("peternakan")}
                error={(errors as any).peternakan?.message}
            />
            <TextInput
                id="perindustrian"
                label="Jenis Usaha Perindustrian"
                {...register("perindustrian")}
                error={(errors as any).perindustrian?.message}
            />
            <TextInput
                id="jasa"
                label="Jenis Usaha Jasa"
                {...register("jasa")}
                error={(errors as any).jasa?.message}
            />
            <TextInput
                id="lain"
                label="Jenis Usaha Lain"
                helpText="Opsional, jika usaha tidak termasuk kategori di atas"
                {...register("lain")}
                error={(errors as any).lain?.message}
            />

            {groupErrorMessage && (
                <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm">
                    <p>{groupErrorMessage}</p>
                </div>
            )}
        </div>
    );
};

export default FormKeteranganUsaha;
