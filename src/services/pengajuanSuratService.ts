import type { ApiResponse } from "../types/api.types";
import type { fullCreatePengajuanSuratDto, PengajuanSuratDetail, PengajuanSuratQueryParams, PengajuanSuratResponse, UpdatePengajuanSuratDto } from "../types/pengajuanSurat.types";
import api from "./api";

export const pengajuanSuratService = {
    async create(data: fullCreatePengajuanSuratDto): Promise<ApiResponse<PengajuanSuratDetail>> {
        const response = await api.post('/pengajuan-surat', data);
        return response.data;
    },

    async findAll(params: PengajuanSuratQueryParams = {}): Promise<ApiResponse<PengajuanSuratResponse[]>> {
        const response = await api.get('/pengajuan-surat', { params });
        return response.data;
    },

    async findOne(id: number): Promise<ApiResponse<PengajuanSuratDetail>>{
        const response = await api.get(`/pengajuan-surat/${id}`);
        return response.data;
    },

    async update(id: number, data: UpdatePengajuanSuratDto): Promise<ApiResponse<PengajuanSuratDetail>>{
        const response = await api.patch(`/pengajuan-surat/${id}`, data);
        return response.data;
    },

    async remove(id: number): Promise<ApiResponse>{
        const response = await api.delete(`/pengajuan-surat/${id}`);
        return response.data;
    }
}