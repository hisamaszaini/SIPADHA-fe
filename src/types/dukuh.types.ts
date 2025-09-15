/**
 * Merepresentasikan data utama dari satu entitas Dukuh.
 * Tipe ini digunakan untuk respons detail (findOne) atau setelah membuat/update data.
 */
export interface Dukuh {
  id: number;
  nama: string;
  createdAt: string; // ISO Date String
  updatedAt: string; // ISO Date String
}

/**
 * Merepresentasikan data Dukuh dalam daftar (findAll).
 * Tipe ini memiliki tambahan properti `_count` untuk relasi.
 */
export interface DukuhWithRelationsCount extends Dukuh {
  _count: {
    rws: number;
  };
}

// --- DTO (Data Transfer Objects) ---
// Tipe data yang dikirimkan ke API

/**
 * Tipe data untuk membuat Dukuh baru.
 * Hanya berisi field yang bisa diisi oleh pengguna.
 */
export interface CreateDukuhDto {
  nama: string;
}

/**
 * Tipe data untuk memperbarui Dukuh.
 * Sama dengan CreateDukuhDto dalam kasus ini.
 */
export type UpdateDukuhDto = CreateDukuhDto;

export type DukuhSortableKeys = keyof Dukuh;

// --- API Query Parameters ---
// Tipe untuk parameter yang bisa dikirim saat fetching data

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