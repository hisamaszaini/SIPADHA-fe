import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSetting } from "../../hooks/useSettingData";
import { updateSettingSchema, type UpdateSettingDto } from "../../types/setting.types";
import TextInput from "../../components/ui/TextInput";
import SelectInput from "../../components/ui/SelectInput";
import { Button } from "../../components/ui/Button";
import { formatDateForInput } from "../../utils/date";

const Icon = ({ className }: { className: string }) => (
    <i className={`${className} text-indigo-500`}></i>
);

export default function AdminSetting() {
    const {
        data: setting,
        isLoading,
        updateSetting,
        isUpdating,
    } = useSetting();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<UpdateSettingDto>({
        resolver: zodResolver(updateSettingSchema),
        mode: "onBlur",
    });

    useEffect(() => {
        if (setting) {
            reset({
                namaKepdes: setting.namaKepdes,
                nikKepdes: setting.nikKepdes,
                jenisKelaminKepdes: setting.jenisKelaminKepdes,
                alamatKepdes: setting.alamatKepdes,
                tempatLahirKepdes: setting.tempatLahirKepdes,
                tanggalLahirKepdes: formatDateForInput(setting.tanggalLahirKepdes),
                endPointWa: setting.endPointWa,
            });
        }
    }, [setting, reset]);

    const onSubmit: SubmitHandler<UpdateSettingDto> = (data) => {
        const payload = {
            ...data,
            tanggalLahirKepdes: `${data.tanggalLahirKepdes}T00:00:00`,
        };

        console.log(payload.tanggalLahirKepdes);
        updateSetting(payload);
    };


    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-full">
                <Icon className="fas fa-spinner animate-spin text-4xl" />
            </div>
        );
    }

    return (
        <div className="w-full mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Sidebar Info Setting */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                        <div className="flex flex-col items-center text-center">
                            <div className="relative mb-4">
                                <div className="w-28 h-28 bg-gradient-to-br from-blue-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-5xl font-bold">
                                    {setting?.namaKepdes.charAt(0).toUpperCase()}
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-800 capitalize">
                                {setting?.namaKepdes}
                            </h2>
                            <p className="font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full text-sm mt-1">
                                Kepala Desa
                            </p>
                        </div>

                        <hr className="my-6 border-gray-200" />

                        <div className="space-y-4 text-gray-600">
                            <div className="flex items-center space-x-3">
                                <Icon className="fas fa-id-card w-5 text-center" />
                                <div className="flex-1">
                                    <p className="text-xs text-gray-400">NIK</p>
                                    <p className="font-mono">{setting?.nikKepdes}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Icon className="fas fa-user w-5 text-center" />
                                <div className="flex-1">
                                    <p className="text-xs text-gray-400">Jenis Kelamin</p>
                                    <p>{setting?.jenisKelaminKepdes}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Icon className="fas fa-map-marker-alt w-5 text-center" />
                                <div className="flex-1">
                                    <p className="text-xs text-gray-400">Alamat</p>
                                    <p>{setting?.alamatKepdes}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Update Setting */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                Pengaturan Kepala Desa
                            </h3>

                            <div className="space-y-5">
                                <TextInput
                                    id="namaKepdes"
                                    label="Nama Kepala Desa"
                                    {...register("namaKepdes")}
                                    error={errors.namaKepdes?.message}
                                />

                                <TextInput
                                    id="nikKepdes"
                                    label="NIK Kepala Desa"
                                    {...register("nikKepdes")}
                                    error={errors.nikKepdes?.message}
                                />

                                <SelectInput
                                    id="jenisKelamin"
                                    label="Jenis Kelamin"
                                    {...register('jenisKelaminKepdes')}
                                    error={errors.jenisKelaminKepdes?.message}
                                >
                                    <option value="">Pilih Jenis Kelamin</option>
                                    <option value="Laki-laki">Laki-laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </SelectInput>

                                <TextInput
                                    id="alamatKepdes"
                                    label="Alamat Kepala Desa"
                                    {...register("alamatKepdes")}
                                    error={errors.alamatKepdes?.message}
                                />

                                <TextInput
                                    id="tempatLahirKepdes"
                                    label="Tempat Lahir Kepala Desa"
                                    {...register("tempatLahirKepdes")}
                                    error={errors.tempatLahirKepdes?.message}
                                />

                                <TextInput
                                    id="tanggalLahirKepdes"
                                    label="Tanggal Lahir Kepala Desa"
                                    type="date"
                                    {...register("tanggalLahirKepdes")}
                                    error={errors.tanggalLahirKepdes?.message}
                                />

                                <TextInput
                                    id="endPointWa"
                                    label="Endpoint WhatsApp API"
                                    {...register("endPointWa")}
                                    error={errors.endPointWa?.message}
                                />
                            </div>

                            <div className="flex justify-end mt-6">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="mid"
                                    isLoading={isUpdating}
                                    icon="fas fa-save"
                                >
                                    Simpan Perubahan
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
