import type { ApiResponse } from "../types/api.types";
import type { 
    CreateRtDto,
    UpdateRtDto,
    Rt,
    RtWithRelations,
    RtQueryParams
} from "../types/rt.types";
import api from "./api";

export const rtService = {
    /**
     * Membuat data RT baru.
     * @param data - Data untuk RT yang akan dibuat.
     * @returns {Promise<ApiResponse<Rt>>} Objek RT yang baru dibuat.
     */
    async create(data: CreateRtDto): Promise<ApiResponse<Rt>> {
        const response = await api.post('/rt', data);
        return response.data;
    },

    /**
     * Mengambil daftar semua RT dengan paginasi dan filter.
     * @param params - Parameter query untuk paginasi, pencarian, dan filter dukuhId/rwId.
     * @returns {Promise<ApiResponse<RtWithRelations[]>>} Daftar RT.
     */
    async findAll(params: RtQueryParams = {}): Promise<ApiResponse<RtWithRelations[]>> {
        const response = await api.get('/rt', { params });
        return response.data;
    },

    /**
     * Mengambil data satu RT berdasarkan ID.
     * @param id - ID dari RT.
     * @returns {Promise<ApiResponse<Rt>>} Data RT yang dicari.
     */
    async findOne(id: number): Promise<ApiResponse<Rt>> {
        const response = await api.get(`/rt/${id}`);
        return response.data;
    },

    /**
     * Memperbarui data RT berdasarkan ID.
     * @param id - ID dari RT yang akan diperbarui.
     * @param data - Data baru untuk RT.
     * @returns {Promise<ApiResponse<Rt>>} Data RT setelah diperbarui.
     */
    async update(id: number, data: UpdateRtDto): Promise<ApiResponse<Rt>> {
        const response = await api.patch(`/rt/${id}`, data);
        return response.data;
    },

    /**
     * Menghapus data RT berdasarkan ID.
     * @param id - ID dari RT yang akan dihapus.
     * @returns {Promise<ApiResponse>} Pesan konfirmasi penghapusan.
     */
    async remove(id: number): Promise<ApiResponse> {
        const response = await api.delete(`/rt/${id}`);
        return response.data;
    },
};

export default rtService;