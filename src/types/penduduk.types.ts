import type { KartuKeluarga, KepalaKeluarga } from "./kartuKeluarga.types";

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
    userId: number | null;
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