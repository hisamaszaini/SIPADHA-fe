import z from "zod";

export const JenisSuratEnum = z.enum([
    'KETERANGAN_USAHA',
    'KETERANGAN_TIDAK_MAMPU_SEKOLAH',
    'KETERANGAN_PENGHASILAN',
    'KETERANGAN_SUAMI_ISTRI_KELUAR_NEGERI',
    'PERINTAH_TUGAS']);

export interface CreateJenisSuratDto {
    kode: string;
    namaSurat: string;
    deskripsi: string;
}

export interface UpdateJenisSuratDto {
    kode: string;
    namaSurat: string;
    deskripsi: string;
}

export interface JenisSurat {
    id: number;
    kode: string;
    namaSurat: string;
    deskripsi: string;
    templateFile: string;
}

export type JenisSuratSortableKeys = keyof JenisSurat;

export interface JenisSuratQueryParams {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: JenisSuratSortableKeys;
    sortOrder?: 'asc' | 'desc';
}