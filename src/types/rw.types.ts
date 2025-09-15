// src/types/rw.types.ts

// Import tipe Dukuh jika sudah ada untuk reusability
// import type { Dukuh } from './dukuh.types';

/**
 * Merepresentasikan data dasar dari entitas Dukuh yang terhubung dengan RW.
 * Sebaiknya diimpor dari file dukuh.types.ts.
 */
interface DukuhReference {
  id: number;
  nama: string;
}


// --- Tipe Entitas (Entity Types) ---
// Merepresentasikan data yang diterima dari API

/**
 * Tipe data dasar untuk satu entitas RW.
 * Termasuk objek 'dukuh' yang berelasi.
 */
export interface Rw {
  id: number;
  nomor: string;
  dukuhId: number;
  createdAt: string; // ISO Date String
  updatedAt: string; // ISO Date String
  dukuh: DukuhReference;
}

/**
 * Tipe data RW yang diperluas dengan informasi relasi.
 * Digunakan untuk response dari endpoint findAll, berisi jumlah RT (_count).
 */
export interface RwWithRelations extends Rw {
  _count: {
    rts: number;
  };
}


// --- Tipe DTO (Data Transfer Object) ---
// Tipe data yang dikirimkan ke API

/**
 * Tipe data untuk membuat RW baru.
 */
export interface CreateRwDto {
  nomor: string;
  dukuhId: number;
}

/**
 * Tipe data untuk memperbarui RW.
 * Semua field bersifat opsional.
 */
export type UpdateRwDto = Partial<CreateRwDto>;


// --- Tipe Parameter Query (Query Params) ---
// Tipe untuk parameter yang bisa dikirim saat fetching data

/**
 * Tipe untuk parameter query saat mengambil daftar RW.
 * Termasuk filter berdasarkan dukuhId.
 */
export type RwSortableKeys = keyof Rw | 'dukuh' | 'rts';

export interface RwQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: RwSortableKeys;
  sortOrder?: 'asc' | 'desc';
  dukuhId?: number;
}