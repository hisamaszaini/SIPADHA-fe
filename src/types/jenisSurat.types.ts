export interface CreateJenisSuratDto {
    kode: string;
    namaSurat: string;
    deskripsi: string;
}

export interface UpdateJenisSuratDto {
    kode: string;
    namaSurat: string;
    deskripsi: string;
}

export interface JenisSurat {
    id: number;
    kode: string;
    namaSurat: string;
    deskripsi: string;
    templateFile: string;
}

export type JenisSuratSortableKeys = keyof JenisSurat;

export interface JenisSuratQueryParams {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: JenisSuratSortableKeys;
    sortOrder?: 'asc' | 'desc';
}