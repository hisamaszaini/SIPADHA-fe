import React, { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
import { useWilayahContext } from '../../contexts/wilayahContext';
import type { KartuKeluargaSimple, Penduduk, PendudukDto } from '../../types/penduduk.types';
import kartuKeluargaService from '../../services/kartuKeluargaService';
import { Combobox } from '@headlessui/react';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import TextInput from '../ui/TextInput';
import { agamaOptions, hubunganKeluargaOptions, jenisKelaminOptions, pendidikanOptions, statusPerkawinanOptions } from '../../constant/pendudukOption';
import { toast } from 'sonner';

type FormData = Omit<PendudukDto, 'tanggalLahir'> & { tanggalLahir: string };

interface PendudukFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (formData: PendudukDto, id: number | null) => Promise<void>;
    editingPenduduk: Penduduk | null;
}

const formatDateForInput = (isoDate: string | Date | undefined): string => {
    if (!isoDate) return '';
    try {
        return new Date(isoDate).toISOString().split('T')[0];
    } catch (e) {
        return '';
    }
};

const PendudukFormModal: React.FC<PendudukFormModalProps> = ({ isOpen, onClose, onSave, editingPenduduk }) => {
    const isEditing = !!editingPenduduk;

    const {
        // Asumsi context wilayah tidak perlu diubah
    } = useWilayahContext();

    const initialFormState: FormData = {
        nik: '', nama: '', tempatLahir: '', tanggalLahir: '', jenisKelamin: 'Laki-laki',
        agama: 'Islam', statusPerkawinan: 'Belum Kawin', pendidikan: '', pekerjaan: '',
        hubunganDalamKeluarga: '', kartuKeluargaId: 0, userId: null,
    };

    const [formData, setFormData] = useState<FormData>(initialFormState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const [kkOptions, setKkOptions] = useState<KartuKeluargaSimple[]>([]);
    const [kkSearchTerm, setKkSearchTerm] = useState('');
    const [isKkLoading, setIsKkLoading] = useState(false);
    const [selectedKk, setSelectedKk] = useState<KartuKeluargaSimple | null>(null);

    // useEffect untuk fetching data Kartu Keluarga (sudah baik)
    useEffect(() => {
        if (!isOpen) return;

        const timer = setTimeout(async () => {
            setIsKkLoading(true);
            try {
                const response = await kartuKeluargaService.findAll({
                    limit: 10,
                    search: kkSearchTerm
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

    // useEffect untuk mengisi form saat mode edit atau membersihkan saat mode tambah
    useEffect(() => {
        if (isOpen) {
            if (isEditing && editingPenduduk) {
                setFormData({
                    nik: editingPenduduk.nik,
                    nama: editingPenduduk.nama,
                    tempatLahir: editingPenduduk.tempatLahir,
                    tanggalLahir: formatDateForInput(editingPenduduk.tanggalLahir),
                    jenisKelamin: editingPenduduk.jenisKelamin,
                    agama: editingPenduduk.agama,
                    statusPerkawinan: editingPenduduk.statusPerkawinan,
                    pendidikan: editingPenduduk.pendidikan || '',
                    pekerjaan: editingPenduduk.pekerjaan || '',
                    hubunganDalamKeluarga: editingPenduduk.hubunganDalamKeluarga,
                    kartuKeluargaId: editingPenduduk.kartuKeluargaId,
                    userId: editingPenduduk.userId,
                });
                if (editingPenduduk.kartuKeluarga) {
                    setSelectedKk(editingPenduduk.kartuKeluarga);
                    setKkOptions([editingPenduduk.kartuKeluarga]);
                }
            } else {
                setFormData(initialFormState);
                setSelectedKk(null);
                setKkOptions([]);
                setKkSearchTerm('');
            }
        }
    }, [isOpen, isEditing, editingPenduduk]);

    const handleKkSelect = (kk: KartuKeluargaSimple | null) => {
        if (formData.kartuKeluargaId !== 0 && kk?.id !== formData.kartuKeluargaId) {
            const isConfirmed = window.confirm(
                "Mengganti Kartu Keluarga akan mereset field 'Hubungan Dalam Keluarga'. Lanjutkan?"
            );

            if (!isConfirmed) {
                setSelectedKk(kkOptions.find(opt => opt.id === formData.kartuKeluargaId) || null);
                return;
            }
        }

        setSelectedKk(kk);

        if (kk) {
            setFormData(prev => ({
                ...prev,
                kartuKeluargaId: kk.id,
                hubunganDalamKeluarga: '',
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                kartuKeluargaId: 0,
                hubunganDalamKeluarga: '',
            }));
        }
    };

    // --- PERUBAHAN KUNCI 1: Satu handler untuk semua input ---
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Bonus: Menghapus error saat pengguna mulai mengetik
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const payload: PendudukDto = {
                ...formData,
                tanggalLahir: new Date(formData.tanggalLahir),
            };
            await onSave(payload, isEditing ? editingPenduduk.id : null);
            toast.success(`Penduduk berhasil ${isEditing ? 'diperbarui' : 'ditambahkan'}`);
            onClose();
        } catch (error) {
            toast.error(`Gagal ${isEditing ? 'memperbarui' : 'menambahkan'} penduduk`);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-6 m-4 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{isEditing ? 'Edit Data Penduduk' : 'Tambah Penduduk Baru'}</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {/* Kolom Kiri */}
                        <fieldset className="space-y-4">
                            <legend className="font-semibold text-lg border-b pb-2 text-gray-700 w-full">Data Diri</legend>

                            {/* --- PERUBAHAN KUNCI 2: Menggunakan `handleChange` dan `name` --- */}
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
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Kelamin</label>
                                <select name="jenisKelamin" value={formData.jenisKelamin} onChange={handleChange} className={`w-full px-4 py-3 bg-gray-50 border rounded-md text-gray-900 focus:outline-none focus:ring-2 ${errors.jenisKelamin ? "border-red-500 ring-red-500" : "border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"}`}>
                                    {jenisKelaminOptions.map(option => (<option key={option.value} value={option.value}>{option.label}</option>))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Agama</label>
                                <select name="agama" value={formData.agama} onChange={handleChange} className={`w-full px-4 py-3 bg-gray-50 border rounded-md text-gray-900 focus:outline-none focus:ring-2 ${errors.agama ? "border-red-500 ring-red-500" : "border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"}`}>
                                    {agamaOptions.map(option => (<option key={option.value} value={option.value}>{option.label}</option>))}
                                </select>
                            </div>
                        </fieldset>

                        {/* Kolom Kanan */}
                        <fieldset className="space-y-4">
                            <legend className="font-semibold text-lg border-b pb-2 text-gray-700 w-full">Data Keluarga & Lainnya</legend>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Pilih Kartu Keluarga</label>
                                <Combobox value={selectedKk} onChange={handleKkSelect}>
                                    <div className="relative">
                                        <Combobox.Input
                                            className={`w-full px-4 py-3 bg-gray-50 border rounded-md text-gray-900 focus:outline-none focus:ring-2 ${errors.kartuKeluargaId ? "border-red-500 ring-red-500" : "border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"}`}
                                            onChange={(event) => setKkSearchTerm(event.target.value)}
                                            displayValue={(kk: KartuKeluargaSimple) => kk ? (kk.noKk || kk.noKk) : ''}
                                            placeholder="Cari No. KK atau Nama Kepala"
                                        />
                                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2"><ChevronsUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /></Combobox.Button>
                                    </div>
                                    <Combobox.Options className="absolute mt-1 max-h-60 w-full max-w-xs overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                                        {isKkLoading && <div className="relative cursor-default select-none py-2 px-4 text-gray-700">Memuat...</div>}
                                        {!isKkLoading && kkOptions.length === 0 && kkSearchTerm !== '' ? (
                                            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">Tidak ditemukan.</div>
                                        ) : (
                                            kkOptions.map((kk) => (
                                                <Combobox.Option key={kk.id} className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-emerald-600 text-white' : 'text-gray-900'}`} value={kk}>
                                                    {({ selected, active }) => (<><span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{kk.noKk} - {kk.kepalaKeluarga?.nama}</span>{selected ? (<span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-emerald-600'}`}><CheckIcon className="h-5 w-5" aria-hidden="true" /></span>) : null}</>)}
                                                </Combobox.Option>
                                            ))
                                        )}
                                    </Combobox.Options>
                                </Combobox>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Hubungan Dalam Keluarga</label>
                                <select name="hubunganDalamKeluarga" value={formData.hubunganDalamKeluarga} onChange={handleChange} className={`w-full px-4 py-3 bg-gray-50 border rounded-md text-gray-900 focus:outline-none focus:ring-2 ${errors.hubunganDalamKeluarga ? "border-red-500 ring-red-500" : "border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"}`}>
                                    <option value="">-- Pilih Hubungan --</option>
                                    {hubunganKeluargaOptions.map(option => (<option key={option.value} value={option.value}>{option.label}</option>))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Status Perkawinan</label>
                                <select name="statusPerkawinan" value={formData.statusPerkawinan} onChange={handleChange} className={`w-full px-4 py-3 bg-gray-50 border rounded-md text-gray-900 focus:outline-none focus:ring-2 ${errors.statusPerkawinan ? "border-red-500 ring-red-500" : "border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"}`}>
                                    {statusPerkawinanOptions.map(option => (<option key={option.value} value={option.value}>{option.label}</option>))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Pendidikan Terakhir</label>
                                <select name="pendidikan" value={formData.pendidikan} onChange={handleChange} className={`w-full px-4 py-3 bg-gray-50 border rounded-md text-gray-900 focus:outline-none focus:ring-2 ${errors.pendidikan ? "border-red-500 ring-red-500" : "border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"}`}>
                                    <option value="">-- Pilih Pendidikan --</option>
                                    {pendidikanOptions.map(option => (<option key={option.value} value={option.value}>{option.label}</option>))}
                                </select>
                            </div>
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

                    <div className="flex justify-end gap-4 pt-4">
                        <button type="button" onClick={onClose} disabled={isSubmitting} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition-colors disabled:opacity-50">
                            Batal
                        </button>
                        <button type="submit" disabled={isSubmitting} className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-colors disabled:opacity-50 flex items-center justify-center min-w-[120px]">
                            {isSubmitting ? (<> <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Menyimpan...</>) : ('Simpan')}
                        </button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default PendudukFormModal;