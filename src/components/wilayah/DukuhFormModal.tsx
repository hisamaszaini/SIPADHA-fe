import React, { useState, useEffect, type FormEvent } from 'react';
import type { Dukuh } from '../../types/dukuh.types';
import { toast } from 'sonner';
import TextInput from '../ui/TextInput';
import { Button } from '../ui/Button';

interface DukuhFormData {
  nama: string;
}

interface DukuhFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (formData: DukuhFormData, id: number | null) => Promise<void>;
  editingDukuh: Dukuh | null;
}

const DukuhFormModal: React.FC<DukuhFormModalProps> = ({
  isOpen,
  onClose,
  onSave,
  editingDukuh,
}) => {
  const initialFormState: DukuhFormData = { nama: '' };
  const [formData, setFormData] = useState<DukuhFormData>(initialFormState);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (editingDukuh) {
        setFormData({ nama: editingDukuh.nama });
      } else {
        setFormData(initialFormState);
      }
      setFieldErrors({});
      setGlobalError(null);
    }
  }, [isOpen, editingDukuh]);

  const handleClose = () => {
    if (isSaving) return;
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFieldErrors({});
    setGlobalError(null);

    if (!formData.nama.trim()) {
      setFieldErrors({ nama: 'Nama dukuh wajib diisi.' });
      return;
    }

    setIsSaving(true);
    try {
      await onSave(formData, editingDukuh ? editingDukuh.id : null);
      toast.success(`Dukuh berhasil ${editingDukuh ? 'diperbarui' : 'ditambahkan'}`);
      onClose(); // Tutup modal setelah berhasil
    } catch (err: any) {
      const response = err?.response?.data;
      if (response?.message && typeof response.message === 'object') {
        setFieldErrors(response.message);
      } else {
        const msg = response?.message || 'Terjadi kesalahan. Silakan coba lagi.';
        setGlobalError(msg);
        toast.error(msg);
      }
    } finally {
      setIsSaving(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4" onClick={handleClose}>
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-xl max-h-[95vh] flex flex-col overflow-y-auto scrollbar-hide-y"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="py-4 px-6 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800">
            {editingDukuh ? 'Edit Dukuh' : 'Tambah Dukuh'}
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-6 overflow-y-auto">
          {globalError && (
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md" role="alert">
              {globalError}
            </div>
          )}

          <TextInput
            id="nama"
            label="Nama Dukuh"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            error={fieldErrors.nama}
            placeholder="Masukan nama dukuh..."
            required
            autoFocus
            disabled={isSaving}
          />

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
              {isSaving ? 'Menyimpan...' : editingDukuh ? 'Perbarui' : 'Simpan'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DukuhFormModal;