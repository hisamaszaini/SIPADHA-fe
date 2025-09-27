import z from "zod";
import type { KartuKeluarga, KepalaKeluarga } from "./kartuKeluarga.types";

export const jenisKelaminEnum = z.enum(["Laki-laki", "Perempuan"]);
export type JenisKelamin = z.infer<typeof jenisKelaminEnum>;

export const agamaEnum = z.enum([
    "Islam",
    "Kristen",
    "Katolik",
    "Hindu",
    "Buddha",
    "Konghucu",
]);
export type Agama = z.infer<typeof agamaEnum>;

export const statusPerkawinanEnum = z.enum([
    "Belum Kawin",
    "Kawin",
    "Cerai Hidup",
    "Cerai Mati",
]);
export type StatusPerkawinan = z.infer<typeof statusPerkawinanEnum>;

export const pendidikanEnum = z.enum(['Tidak/Belum Sekolah', 'SD', 'SMP', 'SMA/SMK', 'D1', 'D2', 'D3', 'D4/S1', 'S2', 'S3']);

export type Pendidikan = z.infer<typeof pendidikanEnum>;

export const hubunganDalamKeluargaEnum = z.enum([
    "Kepala Keluarga",
    "Suami",
    "Istri",
    "Anak",
    "Menantu",
    "Cucu",
    "Orang Tua",
    "Mertua",
    "Famili Lain",
    "Pembantu",
    "Lainnya",
]);
export type HubunganDalamKeluarga = z.infer<typeof hubunganDalamKeluargaEnum>;

// --- SCHEMA UTAMA ---
export const createPendudukSchema = z.object({
    nik: z
        .string()
        .min(16, "NIK harus 16 digit")
        .max(16, "NIK harus 16 digit")
        .regex(/^[0-9]+$/, "NIK hanya boleh mengandung angka")
        .nonempty("NIK wajib diisi")
        .trim(),

    nama: z.string().nonempty("Nama wajib diisi").trim(),

    tempatLahir: z.string().nonempty("Tempat lahir wajib diisi").trim(),

    tanggalLahir: z
        .string()
        .nonempty("Tanggal lahir wajib diisi")
        .pipe(z.coerce.date()),

    jenisKelamin: jenisKelaminEnum,
    agama: agamaEnum,
    statusPerkawinan: statusPerkawinanEnum,
    pendidikan: pendidikanEnum,
    pekerjaan: z.string().nonempty("Pekerjaan wajib diisi").trim(),
    hubunganDalamKeluarga: hubunganDalamKeluargaEnum,

    kartuKeluargaId: z
        .string()
        .nonempty("Kartu keluarga wajib dipilih")
        .transform((val) => Number(val))
        .pipe(z.number().int().positive("Kartu keluarga tidak valid")),

    userId: z.number().int().positive().optional(),
});

// --- DTO TYPES ---
export type CreatePendudukDto = z.infer<typeof createPendudukSchema>;
export const updatePendudukSchema = createPendudukSchema.partial();
export type UpdatePendudukDto = z.infer<typeof updatePendudukSchema>;

export interface PendudukDto {
    nik: string;
    nama: string;
    tempatLahir: string;
    tanggalLahir: Date;
    jenisKelamin: string;
    agama: string;
    statusPerkawinan: string;
    pendidikan: string;
    pekerjaan: string;
    hubunganDalamKeluarga: string;
    kartuKeluargaId: number;
    userId?: number;
}



export interface Penduduk {
    id: number,
    nik: string;
    nama: string;
    tempatLahir: string;
    tanggalLahir: Date;
    jenisKelamin: string;
    agama: string;
    statusPerkawinan: string;
    pendidikan: string;
    pekerjaan: string;
    hubunganDalamKeluarga: string;
    kartuKeluargaId: number;
    userId: number | null;
    kartuKeluarga: KartuKeluarga;
}

export interface DukuhReference {
    id: number;
    nama: string;
}

export interface RwReference {
    id: number;
    nomor: string;
    dukuh: DukuhReference;
}

export interface RtReference {
    id: number;
    nomor: string;
    rw: RwReference;
}

export interface KartuKeluargaSimple {
    id: number;
    noKk: string;
    alamat: string;
    dukuhId: number;
    rwId: number;
    rtId: number;
    kepalaKeluarga: KepalaKeluarga;
    rt: RtReference;
}

export interface FindAllPendudukResponse {
    id: number,
    nik: string;
    nama: string;
    tempatLahir: string;
    tanggalLahir: Date;
    jenisKelamin: string;
    kartuKeluarga: KartuKeluargaSimple;
    statusPerkawinan: string;
    hubunganDalamKeluarga: string;
}

export type PendudukSortableKeys = keyof Penduduk | 'dukuh' | 'rw' | 'rt' | 'noKk' | 'kepalaKeluarga';

export interface PendudukQueryParams {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: PendudukSortableKeys;
    sortOrder?: 'asc' | 'desc';
    rtId?: number;
    rwId?: number;
    dukuhId?: number;
}