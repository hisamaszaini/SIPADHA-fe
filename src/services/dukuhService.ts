import type { ApiResponse } from "../types/api.types";
import type { 
    CreateDukuhDto, 
    Dukuh, 
    DukuhQueryParams, 
    DukuhWithRelationsCount, 
    UpdateDukuhDto 
} from "../types/dukuh.types";
import api from "./api";

export const dukuhService = {
    /**
     * Membuat data Dukuh baru.
     * @param data - Data untuk Dukuh yang akan dibuat.
     * @returns {Promise<ApiResponse<Dukuh>>} Objek Dukuh yang baru dibuat.
     */
    async create(data: CreateDukuhDto): Promise<ApiResponse<Dukuh>> {
        const response = await api.post('/dukuh', data);
        return response.data;
    },

    /**
     * Mengambil daftar semua Dukuh dengan paginasi dan filter.
     * @param params - Parameter query untuk paginasi, pencarian, dan pengurutan.
     * @returns {Promise<ApiResponse<DukuhWithRelationsCount[]>>} Daftar Dukuh.
     */
    async findAll(params: DukuhQueryParams = {}): Promise<ApiResponse<DukuhWithRelationsCount[]>> {
        const response = await api.get('/dukuh', { params });
        return response.data;
    },

    /**
     * Mengambil data satu Dukuh berdasarkan ID.
     * @param id - ID dari Dukuh.
     * @returns {Promise<ApiResponse<Dukuh>>} Data Dukuh yang dicari.
     */
    async findOne(id: number): Promise<ApiResponse<Dukuh>> {
        const response = await api.get(`/dukuh/${id}`);
        return response.data;
    },

    /**
     * Memperbarui data Dukuh berdasarkan ID.
     * @param id - ID dari Dukuh yang akan diperbarui.
     * @param data - Data baru untuk Dukuh.
     * @returns {Promise<ApiResponse<Dukuh>>} Data Dukuh setelah diperbarui.
     */
    async update(id: number, data: UpdateDukuhDto): Promise<ApiResponse<Dukuh>> {
        const response = await api.patch(`/dukuh/${id}`, data);
        return response.data;
    },

    /**
     * Menghapus data Dukuh berdasarkan ID.
     * @param id - ID dari Dukuh yang akan dihapus.
     * @returns {Promise<ApiResponse>} Pesan konfirmasi penghapusan.
     */
    async remove(id: number): Promise<ApiResponse> {
        const response = await api.delete(`/dukuh/${id}`);
        return response.data;
    },
};

export default dukuhService;