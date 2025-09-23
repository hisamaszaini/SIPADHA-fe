import React, { useState, useEffect, type FormEvent, type ChangeEvent } from "react";
import { toast } from "sonner";
import type { Rt } from "../../types/rt.types";
import { useWilayahContext } from "../../contexts/wilayahContext";
import SelectInput from "../ui/SelectInput";
import TextInput from "../ui/TextInput";
import { Button } from "../ui/Button";
import {
  createRtSchema,
  updateRtSchema,
  type createRtDto,
  type updateRtDto,
} from "../../types/rt.types";

interface RtFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (
    formData: createRtDto | updateRtDto,
    id: number | null
  ) => Promise<void>;
  editingRt: Rt | null;
}

const initialFormState = { nomor: "", rwId: "", dukuhId: "" };

const RtFormModal: React.FC<RtFormModalProps> = ({
  isOpen,
  onClose,
  onSave,
  editingRt,
}) => {
  const isEditing = !!editingRt;
  const { allDukuh, filteredRw, handleDukuhChange, isLoadingRw } =
    useWilayahContext();

  const [formData, setFormData] = useState(initialFormState);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (isEditing && editingRt) {
        const dukuhId = String(editingRt.rw.dukuh.id);
        setFormData({
          nomor: editingRt.nomor,
          rwId: String(editingRt.rwId),
          dukuhId,
        });
        handleDukuhChange(Number(dukuhId));
      } else {
        setFormData(initialFormState);
        handleDukuhChange(null);
      }
      setFieldErrors({});
      setGlobalError(null);
    }
  }, [editingRt, isOpen, isEditing, handleDukuhChange]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "dukuhId" && { rwId: "" }),
    }));

    if (name === "dukuhId") {
      handleDukuhChange(value ? Number(value) : null);
    }

    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    if (globalError) setGlobalError(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFieldErrors({});
    setGlobalError(null);

    const schema = isEditing ? updateRtSchema : createRtSchema;
    const result = schema.safeParse({
      nomor: formData.nomor,
      rwId: formData.rwId,
    });

    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0] as string] = err.message;
        }
      });
      setFieldErrors(newErrors);
      return;
    }

    setIsSaving(true);
    try {
      await onSave(result.data, editingRt ? editingRt.id : null);
      toast.success(`RT berhasil ${isEditing ? "diperbarui" : "ditambahkan"}`);
      onClose();
    } catch (err: any) {
      const response = err?.response?.data;
      if (response?.message && typeof response.message === "object") {
        setFieldErrors(response.message);
      } else {
        const msg =
          response?.message || "Terjadi kesalahan. Silakan coba lagi.";
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
            {isEditing ? "Edit RT" : "Tambah RT"}
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

          <SelectInput
            id="dukuhId-rt"
            label="Induk Dukuh"
            name="dukuhId"
            value={formData.dukuhId}
            onChange={handleChange}
            error={fieldErrors.dukuhId}
            disabled={isSaving}
            required
          >
            <option value="">-- Pilih Dukuh --</option>
            {allDukuh.map((dukuh) => (
              <option key={dukuh.id} value={dukuh.id}>
                {dukuh.nama}
              </option>
            ))}
          </SelectInput>

          <SelectInput
            id="rwId-rt"
            label="Induk RW"
            name="rwId"
            value={formData.rwId}
            onChange={handleChange}
            error={fieldErrors.rwId}
            disabled={!formData.dukuhId || isLoadingRw || isSaving}
            required
          >
            <option value="">
              {isLoadingRw ? "Memuat..." : "-- Pilih RW --"}
            </option>
            {filteredRw.map((rw) => (
              <option key={rw.id} value={rw.id}>
                {`RW ${rw.nomor}`}
              </option>
            ))}
          </SelectInput>

          <TextInput
            id="nomor-rt"
            label="Nomor RT"
            name="nomor"
            value={formData.nomor}
            onChange={handleChange}
            error={fieldErrors.nomor}
            placeholder="Contoh: 001"
            disabled={isSaving}
            required
          />

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
              {isSaving ? "Menyimpan..." : isEditing ? "Perbarui" : "Simpan"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RtFormModal;
