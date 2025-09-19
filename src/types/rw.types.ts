import z from "zod";
import { dukuhDetailSchema, type DukuhReference } from "./dukuh.types";

export const createRwSchema = z.object({
  nomor: z.string().nonempty('Nomor RW tidak boleh kosong!').trim().regex(/^[0-9]+$/, 'Nomor RW hanya boleh mengandung angka'),
  dukuhId: z.coerce.number().int().positive().refine((val) => !Number.isNaN(val), { message: "Dukuh tidak valid!", })
});

export const updateRwSchema = createRwSchema.partial();

export const RwSchema = z.object({
  id: z.number(),
  nomor: z.string(),
  dukuhId: z.number(),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
  dukuh: dukuhDetailSchema,
})

export const findAllRwSchema = RwSchema.extend({
  _count: z.object({
    rts: z.number(),
  }),
});

export interface RwReference {
  id: number;
  nomor: string;
  dukuhId: number;
  createdAt: string;
  updatedAt: string;
  dukuh: DukuhReference;
}

export type RwSortableKeys = keyof RwReference | 'dukuh' | 'rts';

export interface RwQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: RwSortableKeys;
  sortOrder?: 'asc' | 'desc';
  dukuhId?: number;
}

export const rwDetailSchema = z.object({
  id: z.number(),
  nomor: z.string(),
  dukuhId: z.number(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  dukuh: dukuhDetailSchema,
});

export type CreateRwDto = z.infer<typeof createRwSchema>;
export type UpdateRwDto = z.infer<typeof updateRwSchema>;
export type RwDetail = z.infer<typeof rwDetailSchema>;
export type FindAllRwResponse = z.infer<typeof findAllRwSchema>;
