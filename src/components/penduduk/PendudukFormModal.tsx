import React, { useState, useEffect, type FormEvent, type ChangeEvent, Fragment } from 'react';
import { useWilayahContext } from '../../contexts/wilayahContext';
import { createPendudukSchema, type CreatePendudukDto, type KartuKeluargaSimple, type Penduduk, type PendudukDto, type UpdatePendudukDto } from '../../types/penduduk.types';
import kartuKeluargaService from '../../services/kartuKeluargaService';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import TextInput from '../ui/TextInput';
import { agamaOptions, hubunganKeluargaOptions, jenisKelaminOptions, pendidikanOptions, statusPerkawinanOptions } from '../../constant/pendudukOption';
import { toast } from 'sonner';
import { Button } from '../ui/Button';
import { formatDateForInput } from '../../utils/date';
import SelectInput from '../ui/SelectInput';
import z from 'zod';

type FormData = Omit<PendudukDto, 'tanggalLahir'> & { tanggalLahir: string };

interface PendudukFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (dto: CreatePendudukDto | UpdatePendudukDto, id?: number | null) => Promise<void>;
    editingPenduduk: Penduduk | null;
}

export const PendudukFormModal: React.FC<PendudukFormModalProps> = ({
    isOpen,
    onClose,
    onSave,
    editingPenduduk,
}) => {
    const isEditing = !!editingPenduduk;

    const { } = useWilayahContext()

    const initialFormState: FormData = {
        nik: "",
        nama: "",
        tempatLahir: "",
        tanggalLahir: "",
        jenisKelamin: "",
        agama: "",
        statusPerkawinan: "",
        pendidikan: "",
        pekerjaan: "",
        hubunganDalamKeluarga: "",
        kartuKeluargaId: 0,
    };

    const [formData, setFormData] = useState<FormData>(initialFormState);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [kkOptions, setKkOptions] = useState<KartuKeluargaSimple[]>([]);
    const [kkSearchTerm, setKkSearchTerm] = useState("");
    const [isKkLoading, setIsKkLoading] = useState(false);
    const [selectedKk, setSelectedKk] = useState<KartuKeluargaSimple | null>(null);

    useEffect(() => {
        if (!isOpen) return;

        const timer = setTimeout(async () => {
            setIsKkLoading(true);
            try {
                const response = await kartuKeluargaService.findAll({
                    limit: 10,
                    search: kkSearchTerm,
                });
                setKkOptions(response.data);
            } catch (error) {
                console.error("Gagal mencari Kartu Keluarga:", error);
            } finally {
                setIsKkLoading(false);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [kkSearchTerm, isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        if (isEditing && editingPenduduk) {
            setFormData({
                nik: editingPenduduk.nik,
                nama: editingPenduduk.nama,
                tempatLahir: editingPenduduk.tempatLahir,
                tanggalLahir: formatDateForInput(editingPenduduk.tanggalLahir),
                jenisKelamin: editingPenduduk.jenisKelamin,
                agama: editingPenduduk.agama,
                statusPerkawinan: editingPenduduk.statusPerkawinan,
                pendidikan: editingPenduduk.pendidikan || "",
                pekerjaan: editingPenduduk.pekerjaan || "",
                hubunganDalamKeluarga: editingPenduduk.hubunganDalamKeluarga,
                kartuKeluargaId: editingPenduduk.kartuKeluargaId,
            });

            if (editingPenduduk.kartuKeluarga) {
                setSelectedKk(editingPenduduk.kartuKeluarga);
                setKkOptions([editingPenduduk.kartuKeluarga]);
            }
        } else {
            setFormData(initialFormState);
            setSelectedKk(null);
            setKkOptions([]);
            setKkSearchTerm("");
        }
    }, [isOpen, isEditing, editingPenduduk]);

    const handleKkSelect = (kk: KartuKeluargaSimple | null) => {
        if (formData.kartuKeluargaId !== 0 && kk?.id !== formData.kartuKeluargaId) {
            const isConfirmed = window.confirm(
                "Mengganti Kartu Keluarga akan mereset field 'Hubungan Dalam Keluarga'. Lanjutkan?"
            );

            if (!isConfirmed) {
                setSelectedKk(kkOptions.find((opt) => opt.id === formData.kartuKeluargaId) || null);
                return;
            }
        }

        setSelectedKk(kk);

        setFormData((prev) => ({
            ...prev,
            kartuKeluargaId: kk ? kk.id : 0,
            hubunganDalamKeluarga: "",
        }));
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});

        try {
            // const schema = isEditing ? updatePendudukSchema : createPendudukSchema;
            const schema = createPendudukSchema;
            const parsed = schema.parse({
                ...formData,
                kartuKeluargaId: formData.kartuKeluargaId.toString(),
            });

            await onSave(parsed, isEditing ? editingPenduduk?.id ?? null : null);

            toast.success(`Penduduk berhasil ${isEditing ? "diperbarui" : "ditambahkan"}`);
            onClose();
        } catch (err: any) {
            if (err instanceof z.ZodError) {
                const fieldErrors: Record<string, string> = {};
                err.issues.forEach((e) => {
                    if (e.path[0]) fieldErrors[e.path[0].toString()] = e.message;
                });
                setErrors(fieldErrors);
                toast.error("Periksa kembali data yang kamu isi.");
            } else {
                const apiError = err?.response?.data;
                if (apiError?.error?.code === "VALIDATION_ERROR" && apiError?.error?.details) {
                    const fieldErrors: Record<string, string> = {};
                    for (const key in apiError.error.details) {
                        fieldErrors[key] = apiError.error.details[key][0];
                    }
                    setErrors(fieldErrors);
                    toast.error("Periksa kembali data yang kamu isi.");
                } else if (apiError?.error?.code === "Conflict") {
                    setErrors({ _global: apiError.message });
                    toast.error(apiError?.message || "Terjadi konflik data (misalnya NIK sudah terdaftar)");
                } else {
                    toast.error(
                        apiError?.message || `Gagal ${isEditing ? "memperbarui" : "menambahkan"} penduduk`
                    );
                }
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4" onClick={onClose}>
            <div
                className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[95vh] flex flex-col overflow-y-auto scrollbar-hide-y"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="py-4 px-6 border-b border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-800">
                        {isEditing ? 'Edit Data Penduduk' : 'Tambah Penduduk Baru'}</h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 p-6 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {/* Kolom Kiri */}
                        <fieldset className="space-y-4">
                            <legend className="font-semibold text-lg border-b border-gray-300 pb-2 text-gray-700 w-full">Data Diri</legend>

                            <TextInput
                                id="nik"
                                name="nik"
                                label="NIK"
                                value={formData.nik}
                                placeholder="Masukan NIK..."
                                error={errors.nik}
                                onChange={handleChange}
                            />
                            <TextInput
                                id="nama"
                                name="nama"
                                label="Nama"
                                value={formData.nama}
                                placeholder="Masukan Nama..."
                                error={errors.nama}
                                onChange={handleChange}
                            />
                            <TextInput
                                id="tempatLahir"
                                name="tempatLahir"
                                label="Tempat Lahir"
                                value={formData.tempatLahir}
                                placeholder="Masukan Tempat Lahir"
                                error={errors.tempatLahir}
                                onChange={handleChange}
                            />
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Lahir</label>
                                <input type="date" name="tanggalLahir" value={formData.tanggalLahir} onChange={handleChange} className={`w-full px-4 py-3 bg-gray-50 border rounded-md text-gray-900 focus:outline-none focus:ring-2 ${errors.tanggalLahir ? "border-red-500 ring-red-500" : "border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"}`} />
                            </div>
                            <SelectInput
                                id="jenisKelamin"
                                name="jenisKelamin"
                                label="Jenis Kelamin"
                                value={formData.jenisKelamin}
                                onChange={handleChange}
                                error={errors.jenisKelamin}
                            >
                                <option value="">-- Pilih Jenis Kelamin --</option>
                                {jenisKelaminOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </SelectInput>
                            <SelectInput
                                id="agama"
                                name="agama"
                                label="Agama"
                                value={formData.agama}
                                onChange={handleChange}
                                error={errors.agama}
                            >
                                <option value="">-- Pilih Agama --</option>
                                {agamaOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </SelectInput>
                        </fieldset>

                        {/* Kolom Kanan */}
                        <fieldset className="space-y-4">
                            <legend className="font-semibold text-lg border-b border-gray-300 pb-2 text-gray-700 w-full">Data Keluarga & Lainnya</legend>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Pilih Kartu Keluarga</label>
                                <Combobox value={selectedKk} onChange={handleKkSelect}>
                                    <div className="relative">
                                        <Combobox.Input
                                            className={`w-full px-4 py-3 bg-gray-50 border rounded-md text-gray-900 focus:outline-none focus:ring-2 ${errors.kartuKeluargaId
                                                ? 'border-red-500 ring-red-500'
                                                : 'border-gray-300 focus:ring-emerald-500 focus:border-emerald-500'
                                                }`}
                                            onChange={(event) => setKkSearchTerm(event.target.value)}
                                            displayValue={(kk: KartuKeluargaSimple) => (kk ? kk.noKk || kk.noKk : '')}
                                            placeholder="Cari No. KK atau Nama Kepala"
                                        />
                                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                            <ChevronsUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </Combobox.Button>

                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full max-w-xs overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                {isKkLoading && (
                                                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                        Memuat...
                                                    </div>
                                                )}
                                                {!isKkLoading && kkOptions.length === 0 && kkSearchTerm !== '' ? (
                                                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                        Tidak ditemukan.
                                                    </div>
                                                ) : (
                                                    kkOptions.map((kk) => (
                                                        <Combobox.Option
                                                            key={kk.id}
                                                            className={({ active }) =>
                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-emerald-600 text-white' : 'text-gray-900'
                                                                }`
                                                            }
                                                            value={kk}
                                                        >
                                                            {({ selected, active }) => (
                                                                <>
                                                                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                                        {kk.noKk} - {kk.kepalaKeluarga?.nama}
                                                                    </span>
                                                                    {selected && (
                                                                        <span
                                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-emerald-600'
                                                                                }`}
                                                                        >
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    )}
                                                                </>
                                                            )}
                                                        </Combobox.Option>
                                                    ))
                                                )}
                                            </Combobox.Options>
                                        </Transition>
                                    </div>
                                </Combobox>
                            </div>
                            <SelectInput
                                id="hubunganDalamKeluarga"
                                name="hubunganDalamKeluarga"
                                label="Hubungan Dalam Keluarga"
                                value={formData.hubunganDalamKeluarga}
                                onChange={handleChange}
                                error={errors.hubunganDalamKeluarga}
                            >
                                <option value="">-- Pilih Hubungan --</option>
                                {hubunganKeluargaOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </SelectInput>
                            <SelectInput
                                id="statusPerkawinan"
                                name="statusPerkawinan"
                                label="Status Perkawinan"
                                value={formData.statusPerkawinan}
                                onChange={handleChange}
                                error={errors.statusPerkawinan}
                            >
                                <option value="">-- Pilih Perkawinan --</option>
                                {statusPerkawinanOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </SelectInput>
                            <SelectInput
                                id="pendidikan"
                                name="pendidikan"
                                label="Pendidikan Terakhir"
                                value={formData.pendidikan}
                                onChange={handleChange}
                                error={errors.pendidikan}
                            >
                                <option value="">-- Pilih Pendidikan --</option>
                                {pendidikanOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </SelectInput>
                            <TextInput
                                id="pekerjaan"
                                name="pekerjaan"
                                label="Pekerjaan"
                                value={formData.pekerjaan}
                                placeholder="Masukan Pekerjaan..."
                                error={errors.pekerjaan}
                                onChange={handleChange}
                            />
                        </fieldset>
                    </div>

                    {errors._global && (
                        <div className="mb-3 rounded bg-red-100 p-2 text-sm text-red-700">
                            {errors._global}
                        </div>
                    )}

                    <div className="flex gap-3 justify-end mt-10">
                        <Button type="button" variant="secondary" disabled={isSubmitting} onClick={onClose}>
                            Batal
                        </Button>
                        <Button
                            type="submit"
                            variant="primary"
                            icon="fas fa-save"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Menyimpan...' : isEditing ? 'Perbarui' : 'Simpan'}
                        </Button>
                    </div>

                </form>
            </div >
        </div >
    );
};

export default PendudukFormModal;