import React, { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
import { createKartuKeluargaWithPendudukSchema, type CreateKartuKeluargaWithPendudukDto, type KartuKeluarga, type PecahKkDto } from '../../types/kartuKeluarga.types';
import { useKartuKeluargaContext } from '../../contexts/kartuKeluargaContext';
import TextInput from '../ui/TextInput';
import SelectInput from '../ui/SelectInput';
import { agamaOptions, jenisKelaminOptions, pendidikanOptions, statusPerkawinanOptions } from '../../constant/pendudukOption';
import type { Penduduk } from '../../types/penduduk.types';
import pendudukService from '../../services/pendudukService';
import { toast } from 'sonner';
import { Button } from '../ui/Button';
import { formatDateForInput } from '../../utils/date';

// Definisikan FormData dengan tipe string untuk enum fields
type FormData = {
  noKk: string;
  alamat: string;
  dukuhId: number;
  rwId: number;
  rtId: number;
  nik: string;
  nama: string;
  tempatLahir: string;
  tanggalLahir: string;
  jenisKelamin: string;
  agama: string;
  statusPerkawinan: string;
  pendidikan: string;
  pekerjaan: string;
  hubunganDalamKeluarga: string;
};

interface KartuKeluargaFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (formData: any, id: number | null) => Promise<void>;
  editingKk: KartuKeluarga | null;
}

const KartuKeluargaFormModal: React.FC<KartuKeluargaFormModalProps> = ({ isOpen, onClose, onSave, editingKk }) => {
  const isEditing = !!editingKk;

  const {
    allDukuh,
    filteredRw,
    filteredRt,
    handleDukuhChange,
    handleRwChange,
    isLoadingRw,
    isLoadingRt
  } = useKartuKeluargaContext();

  const [formData, setFormData] = useState<FormData>(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [foundPenduduk, setFoundPenduduk] = useState<Penduduk | null>(null);
  const [isCheckingNik, setIsCheckingNik] = useState(false);

  // Calculate display data for kepala keluarga
  const displayKepalaKeluarga = foundPenduduk ? {
    nama: foundPenduduk.nama,
    tempatLahir: foundPenduduk.tempatLahir,
    tanggalLahir: formatDateForInput(foundPenduduk.tanggalLahir),
    jenisKelamin: foundPenduduk.jenisKelamin,
    agama: foundPenduduk.agama,
    statusPerkawinan: foundPenduduk.statusPerkawinan,
    pendidikan: foundPenduduk.pendidikan || '',
    pekerjaan: foundPenduduk.pekerjaan || '',
  } : formData;

  useEffect(() => {
    if (isOpen) {
      if (isEditing && editingKk) {
        setFormData({
          noKk: editingKk.noKk,
          alamat: editingKk.alamat,
          dukuhId: editingKk.dukuhId,
          rwId: editingKk.rwId,
          rtId: editingKk.rtId,
          nik: editingKk.kepalaKeluarga.nik,
          nama: editingKk.kepalaKeluarga.nama,
          tempatLahir: editingKk.kepalaKeluarga.tempatLahir,
          tanggalLahir: formatDateForInput(editingKk.kepalaKeluarga.tanggalLahir),
          jenisKelamin: editingKk.kepalaKeluarga.jenisKelamin,
          agama: editingKk.kepalaKeluarga.agama,
          statusPerkawinan: editingKk.kepalaKeluarga.statusPerkawinan,
          pendidikan: editingKk.kepalaKeluarga.pendidikan || '',
          pekerjaan: editingKk.kepalaKeluarga.pekerjaan || '',
          hubunganDalamKeluarga: editingKk.kepalaKeluarga.hubunganDalamKeluarga,
        });
      } else {
        setFormData(initialFormState);
      }
      setErrors({});
      setGlobalError(null);
      setFoundPenduduk(null);
    }
  }, [isOpen, isEditing, editingKk]);

  // NIK lookup effect
  useEffect(() => {
    if (isEditing || formData.nik.length !== 16) {
      setFoundPenduduk(null);
      return;
    }

    const handler = setTimeout(async () => {
      setIsCheckingNik(true);
      try {
        const response = await pendudukService.findByNik(formData.nik);
        setFoundPenduduk(response.data || null);
      } catch (error) {
        setFoundPenduduk(null);
        console.log("NIK tidak ditemukan atau terjadi error:", error);
      } finally {
        setIsCheckingNik(false);
      }
    }, 800);

    return () => clearTimeout(handler);
  }, [formData.nik, isEditing]);

  // Load dependent selects when editing
  useEffect(() => {
    if (isOpen && isEditing && editingKk) {
      if (editingKk.dukuhId) {
        handleDukuhChange(editingKk.dukuhId);
      }
      if (editingKk.rwId) {
        handleRwChange(editingKk.rwId);
      }
    }
  }, [isOpen, isEditing, editingKk, handleDukuhChange, handleRwChange]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const isNumericField = ['dukuhId', 'rwId', 'rtId'].includes(name);
    const numericValue = isNumericField ? Number(value) : value;

    setFormData(prev => {
      const newFormData = { ...prev, [name]: numericValue };
      
      // Handle dependent selects
      if (name === 'dukuhId') {
        newFormData.rwId = 0;
        newFormData.rtId = 0;
        handleDukuhChange(Number(value) || null);
      } else if (name === 'rwId') {
        newFormData.rtId = 0;
        handleRwChange(Number(value) || null);
      }
      
      return newFormData;
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});
    setGlobalError(null);
    setIsSubmitting(true);

    try {
      // Prepare data for validation - convert tanggalLahir to Date string
      const dataToValidate = {
        ...formData,
        tanggalLahir: new Date(formData.tanggalLahir).toISOString()
      };

      // Validate form data using Zod schema
      createKartuKeluargaWithPendudukSchema.parse(dataToValidate);

      let payload: CreateKartuKeluargaWithPendudukDto | PecahKkDto;

      if (isEditing && editingKk) {
        payload = {
          noKk: formData.noKk,
          alamat: formData.alamat,
          dukuhId: formData.dukuhId,
          rwId: formData.rwId,
          rtId: formData.rtId,
          nik: formData.nik,
          nama: formData.nama,
          tempatLahir: formData.tempatLahir,
          tanggalLahir: new Date(formData.tanggalLahir).toISOString(),
          jenisKelamin: formData.jenisKelamin as any, // Karena tipe string sudah sesuai dengan enum? Tapi Zod sudah validasi jadi aman
          agama: formData.agama as any,
          statusPerkawinan: formData.statusPerkawinan as any,
          pendidikan: formData.pendidikan as any,
          pekerjaan: formData.pekerjaan,
          hubunganDalamKeluarga: formData.hubunganDalamKeluarga as any,
          kepalaPendudukId: editingKk.kepalaPendudukId,
        };
      } else {
        if (foundPenduduk) {
          payload = {
            noKk: formData.noKk,
            alamat: formData.alamat,
            dukuhId: formData.dukuhId,
            rwId: formData.rwId,
            rtId: formData.rtId,
            kepalaPendudukId: foundPenduduk.id,
          };
        } else {
          payload = {
            ...formData,
            tanggalLahir: new Date(formData.tanggalLahir).toISOString(),
            // Untuk enum fields, karena sudah divalidasi, kita bisa as any atau kita bisa lakukan type assertion
          } as CreateKartuKeluargaWithPendudukDto;
        }
      }

      await onSave(payload, isEditing ? editingKk.id : null);
      toast.success(`Kartu Keluarga berhasil ${isEditing ? 'diperbarui' : 'ditambahkan'}`);
      onClose();
    } catch (err: any) {
      if (err.name === 'ZodError') {
        // Handle validation errors
        const fieldErrors: Record<string, string> = {};
        err.errors.forEach((error: any) => {
          if (error.path[0]) {
            fieldErrors[error.path[0]] = error.message;
          }
        });
        setErrors(fieldErrors);
        toast.error("Periksa kembali data yang kamu isi.");
      } else {
        // Handle API errors
        const apiError = err?.response?.data;
        if (apiError?.error?.code === "VALIDATION_ERROR" && apiError?.error?.details) {
          const fieldErrors: Record<string, string> = {};
          for (const key in apiError.error.details) {
            fieldErrors[key] = apiError.error.details[key][0];
          }
          setErrors(fieldErrors);
          toast.error("Periksa kembali data yang kamu isi.");
        } else if (apiError?.error?.code === "Conflict") {
          setGlobalError(apiError.message);
          toast.error(apiError?.message || "Terjadi konflik data");
        } else {
          setGlobalError(apiError?.message || `Gagal ${isEditing ? "memperbarui" : "menambahkan"} kartu keluarga`);
          toast.error(apiError?.message || `Gagal ${isEditing ? "memperbarui" : "menambahkan"} kartu keluarga`);
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
            {isEditing ? 'Edit Kartu Keluarga' : 'Tambah Kartu Keluarga Baru'}
          </h3>
        </div>
        
        <form onSubmit={onFormSubmit} className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <fieldset className="space-y-4">
              <legend className="font-semibold text-lg border-b border-gray-300 pb-2 text-gray-700 w-full">
                Data Kartu Keluarga
              </legend>
              
              <TextInput
                id="noKk"
                name="noKk"
                label="Nomor KK"
                value={formData.noKk}
                placeholder="Masukan Nomor KK..."
                error={errors.noKk}
                onChange={handleChange}
                disabled={isEditing || isSubmitting}
              />
              
              <TextInput
                id="alamat"
                name="alamat"
                label="Alamat"
                value={formData.alamat}
                placeholder="Masukan Alamat..."
                error={errors.alamat}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              
              <SelectInput
                id="dukuhId"
                name="dukuhId"
                label="Dukuh"
                value={formData.dukuhId}
                onChange={handleChange}
                disabled={isSubmitting}
                error={errors.dukuhId}
                required
              >
                <option value={0}>-- Pilih Dukuh --</option>
                {allDukuh.map(d => <option key={d.id} value={d.id}>{d.nama}</option>)}
              </SelectInput>
              
              <SelectInput
                id="rwId"
                name="rwId"
                label="RW"
                value={formData.rwId}
                onChange={handleChange}
                disabled={!formData.dukuhId || isLoadingRw || isSubmitting}
                error={errors.rwId}
                required
              >
                <option value={0}>{isLoadingRw ? 'Memuat...' : '-- Pilih RW --'}</option>
                {filteredRw.map(rw => <option key={rw.id} value={rw.id}>RW {rw.nomor}</option>)}
              </SelectInput>
              
              <SelectInput
                id="rtId"
                name="rtId"
                label="RT"
                value={formData.rtId}
                onChange={handleChange}
                disabled={!formData.rwId || isLoadingRt || isSubmitting}
                error={errors.rtId}
                required
              >
                <option value={0}>{isLoadingRt ? 'Memuat...' : '-- Pilih RT --'}</option>
                {filteredRt.map(rt => <option key={rt.id} value={rt.id}>RT {rt.nomor}</option>)}
              </SelectInput>
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="font-semibold text-lg border-b border-gray-300 pb-2 text-gray-700 w-full">
                Data Kepala Keluarga
              </legend>
              
              <TextInput
                id="nik"
                name="nik"
                label="NIK Kepala Keluarga"
                value={formData.nik}
                placeholder="Masukan 16 digit NIK..."
                error={errors.nik}
                onChange={handleChange}
                disabled={isEditing || isSubmitting}
                helpText={isCheckingNik ? 'Mengecek NIK...' : (foundPenduduk ? `✔️ NIK ditemukan: ${foundPenduduk.nama}` : 'Ketik 16 digit NIK untuk cek otomatis.')}
              />
              
              <TextInput
                id="nama"
                name="nama"
                label="Nama"
                value={displayKepalaKeluarga.nama}
                onChange={handleChange}
                error={errors.nama}
                disabled={!!foundPenduduk || isEditing || isSubmitting}
                readOnly={!!foundPenduduk || isEditing}
              />
              
              <TextInput
                id="tempatLahir"
                name="tempatLahir"
                label="Tempat Lahir"
                value={displayKepalaKeluarga.tempatLahir}
                onChange={handleChange}
                error={errors.tempatLahir}
                disabled={!!foundPenduduk || isEditing || isSubmitting}
                readOnly={!!foundPenduduk || isEditing}
              />
              
              <TextInput
                type="date"
                id="tanggalLahir"
                name="tanggalLahir"
                label="Tanggal Lahir"
                value={displayKepalaKeluarga.tanggalLahir}
                onChange={handleChange}
                error={errors.tanggalLahir}
                disabled={!!foundPenduduk || isEditing || isSubmitting}
                readOnly={!!foundPenduduk || isEditing}
              />
              
              <SelectInput
                id="jenisKelamin"
                name="jenisKelamin"
                label="Jenis Kelamin"
                value={displayKepalaKeluarga.jenisKelamin}
                onChange={handleChange}
                error={errors.jenisKelamin}
                disabled={!!foundPenduduk || isEditing || isSubmitting}
              >
                <option value="">-- Pilih Jenis Kelamin --</option>
                {jenisKelaminOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </SelectInput>
              
              <SelectInput
                id="agama"
                name="agama"
                label="Agama"
                value={displayKepalaKeluarga.agama}
                onChange={handleChange}
                error={errors.agama}
                disabled={!!foundPenduduk || isEditing || isSubmitting}
              >
                <option value="">-- Pilih Agama --</option>
                {agamaOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </SelectInput>
              
              <SelectInput
                id="statusPerkawinan"
                name="statusPerkawinan"
                label="Status Perkawinan"
                value={displayKepalaKeluarga.statusPerkawinan}
                onChange={handleChange}
                error={errors.statusPerkawinan}
                disabled={!!foundPenduduk || isEditing || isSubmitting}
              >
                <option value="">-- Pilih Status Perkawinan --</option>
                {statusPerkawinanOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </SelectInput>
              
              <SelectInput
                id="pendidikan"
                name="pendidikan"
                label="Pendidikan Terakhir"
                value={displayKepalaKeluarga.pendidikan}
                onChange={handleChange}
                error={errors.pendidikan}
                disabled={!!foundPenduduk || isEditing || isSubmitting}
              >
                <option value="">-- Pilih Pendidikan --</option>
                {pendidikanOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </SelectInput>
              
              <TextInput
                id="pekerjaan"
                name="pekerjaan"
                label="Pekerjaan"
                value={displayKepalaKeluarga.pekerjaan}
                placeholder="Masukan Pekerjaan..."
                error={errors.pekerjaan}
                disabled={!!foundPenduduk || isEditing || isSubmitting}
                onChange={handleChange}
              />
            </fieldset>
          </div>

          {globalError && (
            <div className="bg-red-`100 border-l-4 border-red-500 text-red-700 p-4 mb-4 mt-4" role="alert">
              <p>{globalError}</p>
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
      </div>
    </div>
  );
};

const initialFormState: FormData = {
  noKk: '',
  alamat: '',
  dukuhId: 0,
  rwId: 0,
  rtId: 0,
  nik: '',
  nama: '',
  tempatLahir: '',
  tanggalLahir: '',
  jenisKelamin: '',
  agama: '',
  statusPerkawinan: '',
  pendidikan: '',
  pekerjaan: '',
  hubunganDalamKeluarga: '',
};

export default KartuKeluargaFormModal;