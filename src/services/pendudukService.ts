import type { ApiResponse } from "../types/api.types";
import type { FindAllPendudukResponse, Penduduk, PendudukDto, PendudukQueryParams } from "../types/penduduk.types";
import api from "./api";

export const pendudukService = {
    async createPenduduk(data: PendudukDto): Promise<ApiResponse<Penduduk>> {
        const response = await api.post('/penduduk', data);
        return response.data;
    },

    async findAll(params: PendudukQueryParams = {}): Promise<ApiResponse<FindAllPendudukResponse[]>> {
        const response = await api.get('/penduduk', { params });
        return response.data;
    },

    async findByNik(nik: string): Promise<ApiResponse<Penduduk>> {
        const response = await api.get(`/penduduk/nik/${nik}`);
        return response.data;
    },

    async findOne(id: number): Promise<ApiResponse<Penduduk>> {
        const response = await api.get(`/penduduk/${id}`);
        return response.data;
    },

    async update(id: number, data: PendudukDto): Promise<ApiResponse<Penduduk>> {
        const response = await api.patch(`/penduduk/${id}`, data);
        return response.data;
    },

    async remove(id: number): Promise<ApiResponse> {
        const response = await api.delete(`/penduduk/${id}`);
        return response.data;
    },
};

export default pendudukService;