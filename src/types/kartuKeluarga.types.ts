import z from "zod";
import type { Penduduk } from "./penduduk.types";
import { rtDetailSchema, type Rt } from "./rt.types";

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

export const kartuKeluargaDetailSchema = z.object({
    id: z.number(),
    noKk: z.string(),
    alamat: z.string(),
    dukuhId: z.number(),
    rwId: z.number(),
    rtId: z.number(),
    kepalaPendudukId: z.number(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    rt: rtDetailSchema,
});
