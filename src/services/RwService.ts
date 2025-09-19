import type { ApiResponse } from "../types/api.types";
import type { 
    CreateRwDto,
    UpdateRwDto,
    RwQueryParams,
    FindAllRwResponse,
    RwDetail
} from "../types/rw.types";
import api from "./api";

export const rwService = {
    /**
     * Membuat data RW baru.
     * @param data - Data untuk RW yang akan dibuat.
     * @returns {Promise<ApiResponse<Rw>>} Objek RW yang baru dibuat.
     */
    async create(data: CreateRwDto): Promise<ApiResponse<RwDetail>> {
        const response = await api.post('/rw', data);
        return response.data;
    },

    /**
     * Mengambil daftar semua RW dengan paginasi dan filter.
     * @param params - Parameter query untuk paginasi, pencarian, dan filter dukuhId.
     * @returns {Promise<ApiResponse<FindAllRwResponse[]>>} Daftar RW.
     */
    async findAll(params: RwQueryParams = {}): Promise<ApiResponse<FindAllRwResponse[]>> {
        const response = await api.get('/rw', { params });
        return response.data;
    },

    /**
     * Mengambil data satu RW berdasarkan ID.
     * @param id - ID dari RW.
     * @returns {Promise<ApiResponse<Rw>>} Data RW yang dicari.
     */
    async findOne(id: number): Promise<ApiResponse<FindAllRwResponse>> {
        const response = await api.get(`/rw/${id}`);
        return response.data;
    },

    /**
     * Memperbarui data RW berdasarkan ID.
     * @param id - ID dari RW yang akan diperbarui.
     * @param data - Data baru untuk RW.
     * @returns {Promise<ApiResponse<Rw>>} Data RW setelah diperbarui.
     */
    async update(id: number, data: UpdateRwDto): Promise<ApiResponse<FindAllRwResponse>> {
        const response = await api.patch(`/rw/${id}`, data);
        return response.data;
    },

    /**
     * Menghapus data RW berdasarkan ID.
     * @param id - ID dari RW yang akan dihapus.
     * @returns {Promise<ApiResponse>} Pesan konfirmasi penghapusan.
     */
    async remove(id: number): Promise<ApiResponse> {
        const response = await api.delete(`/rw/${id}`);
        return response.data;
    },
};

export default rwService;