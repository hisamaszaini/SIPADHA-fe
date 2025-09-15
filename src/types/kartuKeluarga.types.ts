import type { Penduduk } from "./penduduk.types";
import type { Rt } from "./rt.types";

export interface CreateKartuKeluargaWithKepalaDto {
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
}

export interface UpdateKartuKeluargaWithKepalaDto {
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
    kepalaPendudukId: number;
}

export interface KepalaKeluarga {
    nama: string;
    nik: string;
}

export interface KartuKeluargaCount {
    anggotaKeluarga: number;
}

export interface KartuKeluarga {
    id: number;
    noKk: string;
    alamat: string;
    dukuhId: number;
    rwId: number;
    rtId: number;
    kepalaPendudukId: number;
    createdAt: string;
    updatedAt: string;
    rt: Rt;
    kepalaKeluarga: KepalaKeluarga;
}

export interface KartuKeluargaDetail {
    id: number;
    noKk: string;
    alamat: string;
    dukuhId: number;
    rwId: number;
    rtId: number;
    kepalaPendudukId: number;
    createdAt: string;
    updatedAt: string;
    rt: Rt;
    kepalaKeluarga: Penduduk;
}

export interface FindAllKartuKeluargaResponse {
    id: number;
    noKk: string;
    alamat: string;
    dukuhId: number;
    rwId: number;
    rtId: number;
    kepalaPendudukId: number;
    createdAt: string;
    updatedAt: string;
    rt: Rt;
    kepalaKeluarga: KepalaKeluarga;
    _count: KartuKeluargaCount;
}

export type KartuKeluargaSortableKeys = keyof KartuKeluarga | 'kepalaKeluarga' | 'anggotaKeluarga';

export interface KartuKeluargaQueryParams {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: KartuKeluargaSortableKeys;
    sortOrder?: 'asc' | 'desc';
    rtId?: number;
    rwId?: number;
    dukuhId?: number;
}

export interface FindKk {
    id: number;
    noKk: string;
    alamat: string;
    dukuhId: number;
    rwId: number;
    rtId: number;
    kepalaPendudukId: number;
    createdAt: string;
    updatedAt: string;
    kepalaKeluarga: KepalaKeluarga;
}

export type PecahKkDto = Pick<CreateKartuKeluargaWithKepalaDto, 'noKk' | 'alamat' | 'dukuhId' | 'rwId' | 'rtId'> & { kepalaPendudukId: number };