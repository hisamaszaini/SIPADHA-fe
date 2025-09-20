import z from "zod";

export const settingResponseSchema = z.object({
    namaKepdes: z.string(),
    nikKepdes: z.string(),
    jenisKelaminKepdes: z.enum(['Laki-laki', 'Perempuan']),
    alamatKepdes: z.string(),
    tempatLahirKepdes: z.string(),
    tanggalLahirKepdes: z.string().datetime({ message: "Format tanggal dari server tidak valid" }),
    endPointWa: z.string(),
});

export const updateSettingSchema = z.object({
    namaKepdes: z.string().nonempty('Nama Kepala Desa wajib diisi'),
    nikKepdes: z.string().nonempty('NIK Kepala Desa wajib diisi'),
    jenisKelaminKepdes: z.enum(['Laki-laki', 'Perempuan']),
    alamatKepdes: z.string().nonempty('Alamat Kepala Desa wajib diisi'),
    tempatLahirKepdes: z.string().nonempty('Tempat Lahir Kepada Desa wajib diisi'),
    tanggalLahirKepdes: z.string()
        .nonempty("Tanggal lahir kepala desa wajib diisi")
        .regex(/^\d{4}-\d{2}-\d{2}$/, "Format tanggal tidak valid (YYYY-MM-DD)"),
    endPointWa: z.string().nonempty('Alamat API Endpoint Whatsapp wajib diisi'),
}).partial();

export type SettingResponse = z.infer<typeof settingResponseSchema>;
export type UpdateSettingDto = z.infer<typeof updateSettingSchema>;