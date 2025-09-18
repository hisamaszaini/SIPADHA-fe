import z from "zod";

export const StatusSuratEnum = z.enum(['PENDING', 'DIPROSES', 'SELESAI', 'DITOLAK']);
export const JenisSuratEnum = z.enum([
    'KETERANGAN_USAHA',
    'KETERANGAN_TIDAK_MAMPU_SEKOLAH',
    'KETERANGAN_PENGHASILAN',
    'KETERANGAN_SUAMI_ISTRI_KELUAR_NEGERI',
    'PERINTAH_TUGAS']);

export const baseCreatePengajuanSuratSchema = z.object({
    pendudukId: z.string().nonempty('Penduduk wajib dipilih !')
        .transform((val) => Number(val))
        .pipe(z.number().int().positive('Penduduk tidak valid')),
    // jenisSuratId: z.string().nonempty('Jenis surat wajib dipilih !')
    //     .transform((val) => Number(val)).optional()
    //     .pipe(z.number().int().positive('Jenis surat tidak valid')),
    status: StatusSuratEnum.default('PENDING'),
});

export const keteranganUsahaSchema = z.object({
    jenis: z.literal('KETERANGAN_USAHA'),
    pertanian: z.string(),
    perdagangan: z.string(),
    peternakan: z.string(),
    perindustrian: z.string(),
    jasa: z.string(),
    lain: z.string(),
    alamatUsaha: z.string(),
    tahun: z.string().regex(/^\d{4}$/, "Tahun harus 4 digit")
    .transform((val) => parseInt(val, 10)).refine((val) => val >= 1900 && val <= new Date().getFullYear(), { message: "Tahun tidak valid"}),
}).refine((data) => {
    return ['pertanian', 'perdagangan', 'peternakan', 'perindustrian', 'jasa', 'lain']
        .some((key) => data[key as keyof typeof data].trim() !== '');
}, {
    message: "Setidaknya satu bidang usaha harus diisi",
    path: ['root'],
});

export const keteranganaTidakMampuSekolahSchema = z.object({
    jenis: z.literal('KETERANGAN_TIDAK_MAMPU_SEKOLAH'),
    targetId: z.preprocess((val) => { if (typeof val === 'string') { return val.trim() === '' ? NaN : Number(val); } return val; }, z.number('Anak wajib dipilih').int('Anak wajib dipilih').positive('Anak wajib dipilih')),
    institusi: z.string().nonempty('Insitusi sekolah / universitas wajib diisi'),
    alamatSiswa: z.string().nonempty('Alamat siswa/mahasiswa wajib diisi'),
    penghasilan: z.string().nonempty('Penghasilan wajib diisi'),
    keterangan: z.string().nonempty('Keterangan pembayaran gaji wajib diisi')
});

const keteranganUsahaWithBase = baseCreatePengajuanSuratSchema.merge(keteranganUsahaSchema);
const keteranganTidakMampuSekolahWithBase = baseCreatePengajuanSuratSchema.merge(keteranganaTidakMampuSekolahSchema);

// export const createPengajuanSuratSchema = z.discriminatedUnion('jenis', [
//     keteranganUsahaSchema,
//     keteranganaTidakMampuSekolahSchema
// ]);

// export const fullCreatePengajuanSuratSchema = baseCreatePengajuanSuratSchema.and(createPengajuanSuratSchema);


export const fullCreatePengajuanSuratSchema = z.discriminatedUnion("jenis", [
    keteranganUsahaWithBase,
    keteranganTidakMampuSekolahWithBase,
]);

export type fullCreatePengajuanSuratDto = z.infer<typeof fullCreatePengajuanSuratSchema>;
export type PengajuanSuratFormInput = z.input<typeof fullCreatePengajuanSuratSchema>;


export type UpdatePengajuanSuratDto = Partial<
    fullCreatePengajuanSuratDto
> & {
    pendudukId?: number;
    jenisSuratId?: number;
    status?: string;
};

export const keteranganUsahaResponseSchema = z.object({
    jasa: z.string().nullable(),
    lain: z.string().nullable(),
    pertanian: z.string().nullable(),
    peternakan: z.string().nullable(),
    perdagangan: z.string().nullable(),
    perindustrian: z.string().nullable(),
}).transform((val) => ({
    ...val,
    jasa: val.jasa || null,
    lain: val.lain || null,
    pertanian: val.pertanian || null,
    peternakan: val.peternakan || null,
    perdagangan: val.perdagangan || null,
    perindustrian: val.perindustrian || null,
}));

export const keteranganTidakMampuSekolahResponseSchema = z.object({
    targetId: z.number().nullable(),
    institusi: z.string(),
    alamatSiswa: z.string(),
    penghasilan: z.string(),
    keterangan: z.string(),
});

export const dataPermohonanResponseSchema = z.discriminatedUnion("jenis", [
    z.object({
        jenis: z.literal("KETERANGAN_USAHA"),
        dataPermohonan: keteranganUsahaResponseSchema,
    }),
    z.object({
        jenis: z.literal("KETERANGAN_TIDAK_MAMPU_SEKOLAH"),
        dataPermohonan: keteranganTidakMampuSekolahResponseSchema,
    }),
]);

export const pengajuanSuratResponseSchema = z.object({
    id: z.number(),
    pendudukId: z.number(),
    targetId: z.number().nullable(),
    jenis: JenisSuratEnum,
    jenisSuratId: z.number().nullable(),
    status: StatusSuratEnum,
    catatan: z.string().nullable(),
    fileHasil: z.string().nullable(),
    createdById: z.number(),
    createdAt: z.string().datetime(),
    processAt: z.string().datetime().nullable(),
    processEnd: z.string().datetime().nullable(),
    updatedAt: z.string().datetime(),
    penduduk: z.object({
        id: z.number(),
        nama: z.string(),
        nik: z.string(),
    }),
    target: z
        .object({
            id: z.number(),
            nama: z.string(),
            nik: z.string(),
        })
        .nullable(),
}).and(dataPermohonanResponseSchema);

export type PengajuanSuratResponse = z.infer<typeof pengajuanSuratResponseSchema>;

export const pendudukSchema = z.object({
    id: z.number(),
    nik: z.string(),
    nama: z.string(),
    tempatLahir: z.string(),
    tanggalLahir: z.string().datetime(),
    jenisKelamin: z.string(),
    agama: z.string(),
    statusPerkawinan: z.string(),
    pendidikan: z.string().nullable().optional(),
    pekerjaan: z.string().nullable().optional(),
    hubunganDalamKeluarga: z.string(),
    kartuKeluargaId: z.number(),
    userId: z.number(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
});

export const kartuKeluargaSchema = z.object({
    id: z.number(),
    noKk: z.string(),
    alamat: z.string()
})

export const createdBySchema = z.object({
    id: z.number(),
    noHp: z.string(),
    email: z.string(),
    username: z.string(),
});

export const jenisSuratSchema = z
    .object({
        id: z.number(),
        nama: z.string(),
        kode: z.string(),
    })
    .nullable();

export const detailPengajuanSuratResponseSchema = z.object({
    id: z.number(),
    pendudukId: z.number(),
    targetId: z.number().nullable(),
    jenis: z.string(),
    jenisSuratId: z.number().nullable(),
    status: z.enum(["PENDING", "DIPROSES", "SELESAI", "DITOLAK"]),
    catatan: z.string().nullable(),
    fileHasil: z.string().nullable(),
    createdById: z.number(),
    createdAt: z.string().datetime(),
    processAt: z.string().datetime().nullable(),
    processEnd: z.string().datetime().nullable(),
    updatedAt: z.string().datetime(),

    // relasi
    penduduk: pendudukSchema.merge(z.object({kartuKeluarga: kartuKeluargaSchema})),
    target: pendudukSchema.nullable(),
    jenisSurat: jenisSuratSchema,
    createdBy: createdBySchema,
}).and(dataPermohonanResponseSchema);

export type PengajuanSuratDetail = z.infer<typeof detailPengajuanSuratResponseSchema>;

export interface PengajuanSuratQueryParams {
    page?: number;
    limit?: number;
    search?: string;
    statusSurat?: 'PENDING' | 'DIPROSES' | 'SELESAI' | 'DITOLAK';
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}