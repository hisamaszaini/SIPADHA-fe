import z from "zod";
import { kartuKeluargaDetailSchema } from "./kartuKeluarga.types";

export const statusSuratEnum = z.enum(['PENDING', 'DIPROSES', 'SELESAI', 'DITOLAK']);

export const jenisSuratEnum = z.enum([
    'KETERANGAN_USAHA',
    'KETERANGAN_TIDAK_MAMPU_SEKOLAH',
    'KETERANGAN_SUAMI_ISTRI_KELUAR_NEGERI',
    'KETERANGAN_TIDAK_MEMILIKI_MOBIL',
    'KETERANGAN_PROFESI',
    'KETERANGAN_DOMISILI'
]);

export type PilihanJenisSurat = z.infer<typeof jenisSuratEnum>;

// ===============
// CREATE Schema
// ===============

export const baseCreatePengajuanSuratSchema = z.object({
    pendudukId: z
        .number({ error: 'Target wajib dipilih' })
        .refine((val) => val !== null && val > 0, {
            message: 'Target wajib dipilih',
        }),
    statusSurat: statusSuratEnum,
});

export const keteranganUsahaSchema = z.object({
    jenis: z.literal("KETERANGAN_USAHA"),
    pertanian: z.string().trim(),
    perdagangan: z.string().trim(),
    peternakan: z.string().trim(),
    perindustrian: z.string().trim(),
    jasa: z.string().trim(),
    lain: z.string().trim(),
    alamatUsaha: z.string().trim(),
    tahun: z.preprocess(val => Number(val), z.number().refine(num => !isNaN(num) && num >= 1900 && num <= new Date().getFullYear(), { message: "Tahun tidak valid" }))
}).refine(data => ["pertanian", "perdagangan", "peternakan", "perindustrian", "jasa", "lain"].some(key => data[key as keyof Omit<typeof data, "tahun" | "jenis" | "alamatUsaha">].trim() !== ""), { message: "Setidaknya satu bidang usaha harus diisi", path: ["root"] });

export const keteranganaTidakMampuSekolahSchema = z.object({
    jenis: z.literal('KETERANGAN_TIDAK_MAMPU_SEKOLAH'),
    targetId: z.preprocess((val) => { if (typeof val === 'string') { return val.trim() === '' ? NaN : Number(val); } return val; }, z.number('Anak wajib dipilih').int('Anak wajib dipilih').positive('Anak wajib dipilih')),
    institusi: z.string().nonempty('Insitusi sekolah / universitas wajib diisi'),
    alamatSiswa: z.string().nonempty('Alamat siswa/mahasiswa wajib diisi'),
    penghasilan: z.string().nonempty('Penghasilan wajib diisi'),
    keterangan: z.string().nonempty('Keterangan pembayaran gaji wajib diisi')
});

export const keteranganSuamiIstriKeluarNegeriSchema = z.object({
    jenis: z.literal('KETERANGAN_SUAMI_ISTRI_KELUAR_NEGERI'),
    targetId: z.preprocess((val) => { if (typeof val === 'string') { return val.trim() === '' ? NaN : Number(val); } return val; }, z.number('Anak wajib dipilih').int('targetId harus bilangan bulat').positive('Target wajib dipilih dan ID tidak valid'),),
    tahun: z.preprocess(val => Number(val), z.number().refine(num => !isNaN(num) && num >= 1900 && num <= new Date().getFullYear(), { message: "Tahun tidak valid" })),
    negaraTujuan: z.string().nonempty('Negara tujuan wajib diisi'),
    keterangan: z.string().nonempty('Keterangan tujuan pengajuan surat wajib diisi'),
});

export const keteranganTidakMemilikiMobilSchema = z.object({
    jenis: z.literal('KETERANGAN_TIDAK_MEMILIKI_MOBIL')
});

export const keteranganProfesiSchema = z.object({
    jenis: z.literal('KETERANGAN_PROFESI')
});

export const keteranganDomisiliSchema = z.object({
    jenis: z.literal('KETERANGAN_DOMISILI'),
    keterangan: z.string().nonempty('Keterangan tujuan pengajuan surat wajib diisi'),
});

export const createPengajuanSuratSchema = z.discriminatedUnion('jenis', [
    keteranganUsahaSchema,
    keteranganaTidakMampuSekolahSchema,
    keteranganSuamiIstriKeluarNegeriSchema,
    keteranganTidakMemilikiMobilSchema,
    keteranganProfesiSchema,
    keteranganDomisiliSchema
]);

export const fullCreatePengajuanSuratSchema = baseCreatePengajuanSuratSchema.and(createPengajuanSuratSchema);

export type fullCreatePengajuanSuratDto = z.infer<typeof fullCreatePengajuanSuratSchema>;
export type PengajuanSuratFormInput = z.input<typeof fullCreatePengajuanSuratSchema>;

export type UpdatePengajuanSuratDto = Partial<
    fullCreatePengajuanSuratDto
> & {
    pendudukId?: number;
    jenisSuratId?: number;
    status?: string;
};

// =============
// Response Setiap Kategori
// =============

const keteranganUsahaResponseSchema = z.object({
    jasa: z.string().nullable(),
    lain: z.string().nullable(),
    pertanian: z.string().nullable(),
    peternakan: z.string().nullable(),
    perdagangan: z.string().nullable(),
    perindustrian: z.string().nullable(),
    alamatUsaha: z.string(),
    tahun: z.number(),
});

const keteranganTidakMampuSekolahResponseSchema = z.object({
    targetId: z.number().nullable(),
    institusi: z.string(),
    alamatSiswa: z.string(),
    penghasilan: z.string(),
    keterangan: z.string(),
});

const keteranganSuamiIstriKeluarNegeriResponseSchema = z.object({
    targetId: z.number(),
    tahun: z.number(),
    keterangan: z.string(),
    negaraTujuan: z.string(),
});

const keteranganDomisiliResponseSchema = z.object({
    keterangan: z.string(),
});

// =============
// Base Response
// =============

export const createdBySchema = z.object({
    id: z.number(),
    noHp: z.string(),
    email: z.string(),
    username: z.string(),
});

export const jenisSuratSchema = z.object({
    id: z.number(),
    nama: z.string(),
    kode: z.string(),
}).nullable();

export const basefindAllPengajuanSuratResponseSchema = z.object({
    id: z.number(),
    pendudukId: z.number(),
    targetId: z.number().nullable(),
    jenisSuratId: z.number().nullable(),
    statusSurat: statusSuratEnum,
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
});

export const findAllPengajuanSuratResponseSchema = z.discriminatedUnion("jenis", [
    basefindAllPengajuanSuratResponseSchema.extend({
        jenis: z.literal("KETERANGAN_USAHA"),
        dataPermohonan: keteranganUsahaResponseSchema,
    }),
    basefindAllPengajuanSuratResponseSchema.extend({
        jenis: z.literal("KETERANGAN_TIDAK_MAMPU_SEKOLAH"),
        dataPermohonan: keteranganTidakMampuSekolahResponseSchema,
    }),
    basefindAllPengajuanSuratResponseSchema.extend({
        jenis: z.literal("KETERANGAN_SUAMI_ISTRI_KELUAR_NEGERI"),
        dataPermohonan: keteranganSuamiIstriKeluarNegeriResponseSchema,
    }),
    basefindAllPengajuanSuratResponseSchema.extend({
        jenis: z.literal("KETERANGAN_TIDAK_MEMILIKI_MOBIL"),
        dataPermohonan: null,
    }),
    basefindAllPengajuanSuratResponseSchema.extend({
        jenis: z.literal("KETERANGAN_PROFESI"),
        dataPermohonan: null,
    }),
    basefindAllPengajuanSuratResponseSchema.extend({
        jenis: z.literal("KETERANGAN_DOMISILI"),
        dataPermohonan: keteranganDomisiliResponseSchema,
    })
]);

export type FindAllPengajuanSuratResponseSchema = z.infer<typeof findAllPengajuanSuratResponseSchema>;

export type MinimalProsesStatusSurat = Pick<
    FindAllPengajuanSuratResponseSchema,
    'id' | 'statusSurat' | 'jenis' | 'catatan'
> & { penduduk: Pick<FindAllPengajuanSuratResponseSchema['penduduk'], 'id' | 'nama' | 'nik'>; };

export const pendudukDetailSchema = z.object({
    id: z.number(),
    nik: z.string(),
    nama: z.string(),
    tempatLahir: z.string(),
    tanggalLahir: z.string().datetime(),
    jenisKelamin: z.enum(['Laki-laki', 'Perempuan']),
    agama: z.string(),
    statusPerkawinan: z.string(),
    pendidikan: z.string().nullable(),
    pekerjaan: z.string().nullable(),
    hubunganDalamKeluarga: z.string(),
    kartuKeluargaId: z.number(),
    userId: z.number(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    kartuKeluarga: kartuKeluargaDetailSchema
});

const baseDetailPengajuanSuratSchema = z.object({
    id: z.number(),
    pendudukId: z.number(),
    targetId: z.number().nullable(),
    jenisSuratId: z.number().nullable(),
    statusSurat: statusSuratEnum,
    catatan: z.string().nullable(),
    fileHasil: z.string().nullable(),
    createdById: z.number(),
    createdAt: z.string().datetime(),
    processAt: z.string().datetime().nullable(),
    processEnd: z.string().datetime().nullable(),
    updatedAt: z.string().datetime(),
    penduduk: pendudukDetailSchema,
    target: pendudukDetailSchema.nullable(),
    setting: z.object({
        namaKepdes: z.string(),
        nikKepdes: z.string(),
        alamatKepdes: z.string(),
    })
});

export const detailPengajuanSuratSchema = z.discriminatedUnion("jenis", [
    baseDetailPengajuanSuratSchema.extend({
        jenis: z.literal("KETERANGAN_USAHA"),
        dataPermohonan: keteranganUsahaResponseSchema,
    }),
    baseDetailPengajuanSuratSchema.extend({
        jenis: z.literal("KETERANGAN_TIDAK_MAMPU_SEKOLAH"),
        dataPermohonan: keteranganTidakMampuSekolahResponseSchema,
    }),
    baseDetailPengajuanSuratSchema.extend({
        jenis: z.literal("KETERANGAN_SUAMI_ISTRI_KELUAR_NEGERI"),
        dataPermohonan: keteranganSuamiIstriKeluarNegeriResponseSchema,
    }),
    baseDetailPengajuanSuratSchema.extend({
        jenis: z.literal("KETERANGAN_TIDAK_MEMILIKI_MOBIL"),
        dataPermohonan: z.null()
    }),
    baseDetailPengajuanSuratSchema.extend({
        jenis: z.literal("KETERANGAN_PROFESI"),
        dataPermohonan: z.null()
    }),
    baseDetailPengajuanSuratSchema.extend({
        jenis: z.literal("KETERANGAN_DOMISILI"),
        dataPermohonan: keteranganDomisiliResponseSchema,
    })
]);

export type DetailPengajuanSuratSchema = z.infer<typeof detailPengajuanSuratSchema>;

// =======================
// Update Status Pengajuan
// =======================

export const updateStatusSuratSchema = z.object({
    statusSurat: statusSuratEnum,
    catatan: z
        .string()
        .max(255)
        .trim()
        .optional()
}).superRefine((val, ctx) => {
    if (val.statusSurat === 'DITOLAK' && !val.catatan?.trim()) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['catatan'],
            message: 'Catatan wajib diisi jika status ditolak',
        });
    }
});

export type UpdateStatusSuratDto = z.infer<typeof updateStatusSuratSchema>;

export interface PengajuanSuratQueryParams {
    page?: number;
    limit?: number;
    search?: string;
    statusSurat?: 'PENDING' | 'DIPROSES' | 'SELESAI' | 'DITOLAK';
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}