import React, { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
import type { User, UserDto } from '../../types/user.types';
import { userRoleOptions, userStatusOptions } from '../../constant/userOption';
import TextInput from '../ui/TextInput';
import SelectInput from '../ui/SelectInput';
import { Button } from '../ui/Button';

interface UserFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (formData: UserDto, id: number | null) => Promise<void>;
    editingUser: User | null;
}

const UserFormModal: React.FC<UserFormModalProps> = ({ isOpen, onClose, onSave, editingUser }) => {
    const isEditing = !!editingUser;

    const initialFormState: UserDto = {
        username: '',
        email: '',
        noHp: '',
        password: '',
        confirmPassword: '',
        role: 'WARGA',
        statusUser: 'ACTIVE',
        nik: '',
    };

    const [formData, setFormData] = useState<UserDto>(initialFormState);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [globalError, setGlobalError] = useState<string | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (isOpen) {
            if (isEditing && editingUser) {
                setFormData({
                    ...initialFormState,
                    username: editingUser.username,
                    email: editingUser.email,
                    role: editingUser.role,
                    noHp: editingUser.noHp || '',
                    statusUser: editingUser.statusUser,
                    nik: editingUser.penduduk?.nik || '',
                });
            } else {
                setFormData(initialFormState);
            }
            // Reset semua error saat modal dibuka
            setErrors({});
            setGlobalError(null);
        }
    }, [isOpen, isEditing, editingUser]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (globalError) {
            setGlobalError(null);
        }

        setFormData(prev => {
            const newFormData = { ...prev, [name]: value };
            if (name === 'role' && value !== 'WARGA') {
                newFormData.nik = '';
            }
            return newFormData;
        });
    };

    const validate = (): boolean => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.username.trim()) newErrors.username = "Username wajib diisi.";
        if (!formData.email.trim()) newErrors.email = "Email wajib diisi.";

        if (!isEditing) {
            if (!formData.password) newErrors.password = "Password wajib diisi.";
            if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Konfirmasi password tidak cocok.";
        } else if (formData.password && formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Konfirmasi password tidak cocok.";
        }

        if (formData.role === 'WARGA' && (!formData.nik || formData.nik.length !== 16)) {
            newErrors.nik = "NIK wajib diisi dan harus 16 digit untuk role Warga.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setGlobalError(null);
        if (!validate()) return;

        setIsSaving(true);
        try {
            console.log(formData);
            await onSave(formData, isEditing && editingUser ? editingUser.id : null);
        } catch (error: any) {
            console.error("Gagal menyimpan:", error);

            if (error.response && error.response.data && error.response.data.message) {
                setGlobalError(error.response.data.message);
            }
            else if (error.message) {
                setGlobalError(error.message);
            }
            else {
                setGlobalError("Terjadi kesalahan yang tidak diketahui. Silakan coba lagi.");
            }
        } finally {
            setIsSaving(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[95vh] flex flex-col overflow-y-auto scrollbar-hide-y" onClick={e => e.stopPropagation()}>
                <div className="py-5 px-6 border-b border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{isEditing ? 'Edit Pengguna' : 'Tambah Pengguna Baru'}</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-4 p-6 overflow-y-auto">
                        <TextInput
                            id="username"
                            name="username"
                            label="Username"
                            value={formData.username}
                            placeholder="Masukan Username..."
                            error={errors.username}
                            onChange={handleChange}
                        />
                        <TextInput
                            type="email"
                            id="email"
                            name="email"
                            label="Email"
                            value={formData.email}
                            placeholder="Masukan Email..."
                            error={errors.email}
                            onChange={handleChange}
                        />
                        <TextInput
                            type="password"
                            id="password"
                            name="password"
                            label="Password"
                            value={formData.password}
                            placeholder={isEditing ? "(Kosongkan jika tidak diubah)" : "Masukan Password..."}
                            error={errors.password}
                            onChange={handleChange}
                        />
                        <TextInput
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            label="Konfirmasi Password"
                            value={formData.confirmPassword}
                            placeholder="Masukan Konfirmasi Password..."
                            error={errors.confirmPassword}
                            onChange={handleChange}
                        />
                        <SelectInput
                            id="role"
                            name="role"
                            label="Role"
                            value={formData.role}
                            onChange={handleChange}
                            disabled={isSaving}
                            error={errors.role}
                            required
                        >
                            <option value="">-- Pilih Role --</option>
                            {userRoleOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                        </SelectInput>
                        <SelectInput
                            id="statusUser"
                            name="statusUser"
                            label="Status User"
                            value={formData.statusUser}
                            onChange={handleChange}
                            disabled={isSaving}
                            error={errors.statusUser}
                            required
                        >
                            <option value="">-- Pilih Status User --</option>
                            {userStatusOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                        </SelectInput>

                        <TextInput
                            id="noHp"
                            name="noHp"
                            label="Nomor HP"
                            value={formData.noHp}
                            error={errors.noHp}
                            onChange={handleChange} maxLength={16}
                            disabled={isSaving}
                            placeholder="Nomor HP" />

                        {formData.role === 'WARGA' && (
                            <TextInput
                                id="nik"
                                name="nik"
                                label="NIK"
                                value={formData.nik ?? ''}
                                error={errors.nik}
                                onChange={handleChange} maxLength={16}
                                disabled={isSaving}
                                placeholder="Hubungkan dengan NIK penduduk" />
                        )}

                    </div>


                    {globalError && (
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
                            <p className="font-bold">Gagal Menyimpan</p>
                            <p>{globalError}</p>
                        </div>
                    )}

                    <div className="flex gap-3 justify-end mt-10 p-6">
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

export default UserFormModal;