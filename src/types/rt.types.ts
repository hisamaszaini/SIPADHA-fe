// src/types/rt.types.ts

// Sebaiknya impor tipe Dukuh dan RW dari file masing-masing
// import type { Dukuh } from './dukuh.types';
// import type { Rw } from './rw.types';


// --- Tipe Referensi (Reference Types) ---
// Merepresentasikan data relasi yang disederhanakan

interface DukuhReference {
  id: number;
  nama: string;
}

interface RwReference {
  id: number;
  nomor: string;
  dukuh: DukuhReference;
}


// --- Tipe Entitas (Entity Types) ---
// Merepresentasikan data yang diterima dari API

/**
 * Tipe data dasar untuk satu entitas RT.
 * Termasuk objek 'rw' yang berelasi secara nested dengan 'dukuh'.
 */
export interface Rt {
  id: number;
  nomor: string;
  rwId: number;
  createdAt: string; // ISO Date String
  updatedAt: string; // ISO Date String
  rw: RwReference;
}

/**
 * Tipe data RT yang diperluas dengan informasi relasi.
 * Digunakan untuk response dari endpoint findAll, berisi jumlah Kepala Keluarga.
 */
export interface RtWithRelations extends Rt {
  _count: {
    KartuKeluarga: number;
  };
}


// --- Tipe DTO (Data Transfer Object) ---
// Tipe data yang dikirimkan ke API

/**
 * Tipe data untuk membuat RT baru.
 */
export interface CreateRtDto {
  nomor: string;
  rwId: number;
}

/**
 * Tipe data untuk memperbarui RT.
 * Semua field bersifat opsional.
 */
export type UpdateRtDto = Partial<CreateRtDto>;


// --- Tipe Parameter Query (Query Params) ---
// Tipe untuk parameter yang bisa dikirim saat fetching data

/**
 * Tipe untuk parameter query saat mengambil daftar RT.
 * Termasuk filter berdasarkan dukuhId dan rwId.
 */

export type RtSortableKeys = keyof Rt | 'dukuh' | 'rw' | 'kartuKeluarga';

export interface RtQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: RtSortableKeys;
  sortOrder?: 'asc' | 'desc';
  dukuhId?: number;
  rwId?: number;
}