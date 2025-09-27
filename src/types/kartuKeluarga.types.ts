import z from "zod";
// import { agamaEnum, hubunganDalamKeluargaEnum, jenisKelaminEnum, pendidikanEnum, statusPerkawinanEnum, type Penduduk } from "./penduduk.types";
import { rtDetailSchema, type Rt } from "./rt.types";
import type { Penduduk } from "./penduduk.types";

// // ----------------------
// // Schema 1: Kartu Keluarga
// // ----------------------
// export const createKartuKeluargaSchema = z.object({
//   noKk: z.string()
//     .nonempty('Nomor KK tidak boleh kosong')
//     .min(16, 'Nomor KK minimal 16 digit')
//     .regex(/^\d+$/, 'Nomor KK hanya boleh angka'),

//   alamat: z.string().nonempty('Alamat wajib diisi').trim(),

//   dukuhId: z.string()
//     .nonempty('Dukuh wajib dipilih')
//     .regex(/^\d+$/, 'Dukuh tidak valid')
//     .transform(val => Number(val)),

//   rwId: z.string()
//     .nonempty('RW wajib dipilih')
//     .regex(/^\d+$/, 'RW tidak valid')
//     .transform(val => Number(val)),

//   rtId: z.string()
//     .nonempty('RT wajib dipilih')
//     .regex(/^\d+$/, 'RT tidak valid')
//     .transform(val => Number(val)),
// });

// // ----------------------
// // Schema 2: Kartu Keluarga + Penduduk
// // ----------------------
// export const createKartuKeluargaWithPendudukSchema = createKartuKeluargaSchema.merge(
//   z.object({
//     nik: z.string()
//       .nonempty('NIK tidak boleh kosong')
//       .min(16, 'NIK minimal 16 digit')
//       .regex(/^\d+$/, 'NIK hanya boleh angka')
//       .trim(),

//     nama: z.string().nonempty('Nama tidak boleh kosong').trim(),
//     tempatLahir: z.string().nonempty('Tempat lahir wajib diisi').trim(),

//     tanggalLahir: z.string()
//       .nonempty('Tanggal lahir wajib diisi')
//       .refine(val => !isNaN(Date.parse(val)), 'Tanggal lahir tidak valid'),

//     jenisKelamin: jenisKelaminEnum,
//     agama: agamaEnum,
//     statusPerkawinan: statusPerkawinanEnum,
//     pendidikan: pendidikanEnum,

//     pekerjaan: z.string().trim().optional(),

//     hubunganDalamKeluarga: hubunganDalamKeluargaEnum.optional().default('Kepala Keluarga'),
//   })
// );

// export const updateKartuKeluargaWithKepalaSchema = createKartuKeluargaWithPendudukSchema.partial();

// // ----------------------
// // Typescript Types
// // ----------------------
// export type CreateKartuKeluargaDto = z.infer<typeof createKartuKeluargaSchema>;
// export type CreateKartuKeluargaWithPendudukDto = z.infer<typeof createKartuKeluargaWithPendudukSchema>;
// export type UpdateKartuKeluargaWithKepalaDto = z.infer<typeof updateKartuKeluargaWithKepalaSchema>;

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
