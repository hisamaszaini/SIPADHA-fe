import React, { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
import type { JenisSurat, CreateJenisSuratDto, UpdateJenisSuratDto } from '../../types/jenisSurat.types';
import TextInput from '../ui/TextInput';
import { Button } from '../ui/Button';

interface JenisSuratFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (formData: CreateJenisSuratDto | UpdateJenisSuratDto, id: number | null, file?: File) => Promise<void>;
    editingItem: JenisSurat | null;
}

const JenisSuratFormModal: React.FC<JenisSuratFormModalProps> = ({ isOpen, onClose, onSave, editingItem }) => {
    const isEditing = !!editingItem;
    const initialFormState = {
        kode: '',
        namaSurat: '',
        deskripsi: '',
    };

    const [formData, setFormData] = useState(initialFormState);
    const [file, setFile] = useState<File | null>(null);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (isOpen) {
            if (isEditing && editingItem) {
                setFormData({
                    kode: editingItem.kode,
                    namaSurat: editingItem.namaSurat,
                    deskripsi: editingItem.deskripsi,
                });
                setFile(null);
            } else {
                setFormData(initialFormState);
                setFile(null);
            }
            setErrors({});
        }
    }, [isOpen, isEditing, editingItem]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Hapus error saat user mulai mengisi
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            // Hapus error file jika ada
            if (errors.file) {
                setErrors(prev => {
                    const newErrors = { ...prev };
                    delete newErrors.file;
                    return newErrors;
                });
            }
        }
    };

    const validate = (): boolean => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.kode.trim()) newErrors.kode = "Kode surat wajib diisi.";
        if (!formData.namaSurat.trim()) newErrors.namaSurat = "Nama surat wajib diisi.";
        if (!formData.deskripsi.trim()) newErrors.deskripsi = "Deskripsi wajib diisi.";

        // Hanya validasi file jika sedang tidak dalam mode edit
        if (!isEditing && !file) {
            newErrors.file = "File template wajib diunggah saat create.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        console.log('File sebelum validate:', file);
        if (!validate()) {
            console.log('Validasi gagal, errors:', errors);
            return;
        }

        setIsSaving(true);
        try {
            await onSave(formData, isEditing ? editingItem!.id : null, file || undefined);
            onClose(); // Tutup modal setelah berhasil menyimpan
        } catch (error) {
            console.error("Gagal menyimpan:", error);
            setErrors({ submit: "Terjadi kesalahan saat menyimpan. Silakan coba lagi." });
        } finally {
            setIsSaving(false);
        }
    };

    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4" onClick={onClose}>
            <div
                className="bg-white rounded-2xl shadow-xl w-full max-w-xl max-h-[95vh] flex flex-col overflow-y-auto scrollbar-hide-y"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="py-4 px-6 border-b border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-800">
                        {isEditing ? 'Edit Jenis Surat' : 'Tambah Jenis Surat Baru'}
                    </h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 p-6 overflow-y-auto">
                    <TextInput
                        id="kode"
                        label="Kode Surat"
                        name="kode"
                        value={formData.kode}
                        onChange={handleChange}
                        error={errors.kode}
                        placeholder="Masukan kode surat..."
                        disabled={isSaving}
                        autoFocus
                        required
                    />

                    <TextInput
                        id="namaSurat"
                        label="Nama Surat"
                        name="namaSurat"
                        value={formData.namaSurat}
                        onChange={handleChange}
                        error={errors.namaSurat}
                        placeholder="Masukan nama surat..."
                        disabled={isSaving}
                        required
                    />

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                        <textarea
                            name="deskripsi"
                            value={formData.deskripsi}
                            onChange={handleChange}
                            rows={3}
                            className={`w-full px-4 py-3 bg-gray-50 border rounded-md text-gray-900 focus:outline-none focus:ring-2 transition-colors duration-200 ${errors.deskripsi ? 'border-red-500 ring-red-500 focus:border-red-500' : 'border-blue-300 focus:ring-blue-500 focus:border-blue-500'}`}
                            placeholder="Jelaskan kegunaan surat ini..."
                            disabled={isSaving}
                        ></textarea>
                        {errors.deskripsi && <p className="text-red-600 text-sm mt-1">{errors.deskripsi}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Upload File Template {isEditing ? '(opsional)' : ''}
                        </label>
                        <div className="flex items-center">
                            <label className="flex flex-col items-center px-4 py-3 bg-white text-blue-500 rounded-lg border-2 border-dashed border-blue-500 cursor-pointer hover:bg-blue-50 transition-colors w-full">
                                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                </svg>
                                <span className="text-sm">{file ? 'Ganti File' : 'Pilih File'}</span>
                                <input
                                    type="file"
                                    accept=".pdf,.docx,.xlsx"
                                    onChange={handleFileChange}
                                    disabled={isSaving}
                                    className="hidden"
                                />
                            </label>
                            {file && (
                                <div className="ml-4">
                                    <span className="text-sm text-gray-700">{file.name}</span>
                                    <button
                                        type="button"
                                        onClick={() => setFile(null)}
                                        className="ml-2 text-red-500 hover:text-red-700"
                                    >
                                        ×
                                    </button>
                                </div>
                            )}
                        </div>
                        {errors.file && <p className="text-red-600 text-sm mt-1">{errors.file}</p>}
                        <p className="text-xs text-gray-500 mt-1">Format file: PDF, DOCX, XLSX</p>
                    </div>

                    {errors.submit && <p className="text-red-600 text-sm mt-1">{errors.submit}</p>}

                    <div className="flex gap-3 justify-end mt-10">
                        <Button type="button" variant="secondary" disabled={isSaving} onClick={onClose}>
                            Batal
                        </Button>
                        <Button
                            type="submit"
                            variant="primary"
                            icon="fas fa-save"
                            disabled={isSaving}
                        >
                            {isSaving ? 'Menyimpan...' : isEditing ? 'Perbarui' : 'Simpan'}
                        </Button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default JenisSuratFormModal;