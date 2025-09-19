import z from "zod";

export const createDukuhSchema = z.object({
  nama: z.string().nonempty("Nama dukuh wajib diisi")
});

export const updateDukuhSchema = createDukuhSchema.partial();

export type CreateDukuhDto = z.infer<typeof createDukuhSchema>;
export type UpdateDukuhDto = z.infer<typeof updateDukuhSchema>;
export type DukuhSortableKeys = keyof Dukuh;

export interface DukuhReference {
  id: number;
  nama: string;
}

/**
 * Tipe untuk parameter query saat mengambil daftar Dukuh.
 * Semua properti bersifat opsional.
 */
export interface DukuhQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: DukuhSortableKeys;
  sortOrder?: 'asc' | 'desc';
}

export const dukuhDetailSchema = z.object({
  id: z.number(),
  nama: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const dukuhSchema = dukuhDetailSchema.extend({
  _count: z.object({
    rws: z.number(),
  }),
});

export type DukuhDetail = z.infer<typeof dukuhDetailSchema>;
export type Dukuh = z.infer<typeof dukuhSchema>;
