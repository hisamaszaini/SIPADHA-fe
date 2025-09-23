import React, { useState, useEffect, type FormEvent } from 'react';
import { toast } from 'sonner';
import type { RwDetail, CreateRwDto } from '../../types/rw.types';
import type { Dukuh } from '../../types/dukuh.types';
import TextInput from '../ui/TextInput';
import SelectInput from '../ui/SelectInput';
import { Button } from '../ui/Button';
import { createRwSchema } from '../../types/rw.types';

interface RwFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (
    formData: CreateRwDto | Partial<CreateRwDto>,
    id: number | null
  ) => Promise<void>;
  editingRw: RwDetail | null;
  dukuhList: Dukuh[];
}

const initialFormState = { nomor: '', dukuhId: '' };

const RwFormModal: React.FC<RwFormModalProps> = ({
  isOpen,
  onClose,
  onSave,
  editingRw,
  dukuhList,
}) => {
  const [formData, setFormData] = useState(initialFormState);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (editingRw) {
        setFormData({
          nomor: editingRw.nomor,
          dukuhId: String(editingRw.dukuhId),
        });
      } else {
        setFormData(initialFormState);
      }
      setFieldErrors({});
      setGlobalError(null);
    }
  }, [editingRw, isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    if (globalError) setGlobalError(null);
  };

  const validate = () => {
    const result = createRwSchema.safeParse({
      nomor: formData.nomor,
      dukuhId: formData.dukuhId ? Number(formData.dukuhId) : undefined,
    });

    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        errors[field] = issue.message;
      });
      return errors;
    }
    return {};
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFieldErrors({});
    setGlobalError(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      return;
    }

    setIsSaving(true);
    const payload = {
      ...formData,
      dukuhId: Number(formData.dukuhId),
    };

    try {
      await onSave(payload, editingRw ? editingRw.id : null);
      toast.success(
        `RW berhasil ${editingRw ? 'diperbarui' : 'ditambahkan'}`
      );
      onClose();
    } catch (err: any) {
      const response = err?.response?.data;
      if (response?.message && typeof response.message === 'object') {
        setFieldErrors(response.message);
      } else {
        const msg =
          response?.message || 'Terjadi kesalahan. Silakan coba lagi.';
        setGlobalError(msg);
        toast.error(msg);
      }
    } finally {
      setIsSaving(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-xl max-h-[95vh] flex flex-col overflow-y-auto scrollbar-hide-y"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="py-4 px-6 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800">
            {editingRw ? 'Edit RW' : 'Tambah RW'}
          </h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 p-6 overflow-y-auto">
          {globalError && (
            <div
              className="bg-red-100 text-red-700 px-4 py-2 rounded-md"
              role="alert"
            >
              {globalError}
            </div>
          )}

          <TextInput
            id="nomor"
            label="Nomor RW"
            name="nomor"
            value={formData.nomor}
            onChange={handleChange}
            error={fieldErrors.nomor}
            placeholder="Contoh: 01"
            disabled={isSaving}
            autoFocus
            required
          />

          <SelectInput
            id="dukuhId"
            label="Induk Dukuh"
            name="dukuhId"
            value={formData.dukuhId}
            onChange={handleChange}
            error={fieldErrors.dukuhId}
            disabled={isSaving}
            required
          >
            <option value="" disabled>
              -- Pilih Dukuh --
            </option>
            {dukuhList.map((dukuh) => (
              <option key={dukuh.id} value={dukuh.id}>
                {dukuh.nama}
              </option>
            ))}
          </SelectInput>

          <div className="flex gap-3 justify-end mt-10">
            <Button
              type="button"
              variant="secondary"
              disabled={isSaving}
              onClick={onClose}
            >
              Batal
            </Button>
            <Button
              type="submit"
              variant="primary"
              icon="fas fa-save"
              disabled={isSaving}
            >
              {isSaving
                ? 'Menyimpan...'
                : editingRw
                ? 'Perbarui'
                : 'Simpan'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RwFormModal;