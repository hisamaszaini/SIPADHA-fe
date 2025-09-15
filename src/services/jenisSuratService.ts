import type { ApiResponse } from "../types/api.types";
import type { CreateJenisSuratDto, JenisSurat, JenisSuratQueryParams, UpdateJenisSuratDto } from "../types/jenisSurat.types";
import api from "./api";

export const jenisSuratService = {

    async create(data: CreateJenisSuratDto, file: File): Promise<ApiResponse<JenisSurat>> {
        if (!file) throw new Error("File template wajib diunggah");

        const formData = new FormData();

        Object.entries(data).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                formData.append(key, String(value));
            }
        });

        formData.append('file', file);

        const response = await api.post('/jenis-surat', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    },

    async findAll(params: JenisSuratQueryParams): Promise<ApiResponse<JenisSurat[]>> {
        const response = await api.get('/jenis-surat', { params });
        return response.data;
    },

    async findOne(id: number): Promise<ApiResponse<JenisSurat>> {
        const response = await api.get(`/jenis-surat/${id}`);
        return response.data;
    },

    async update(
        id: number,
        data: UpdateJenisSuratDto,
        file?: File
    ): Promise<ApiResponse<JenisSurat>> {
        const formData = new FormData();

        Object.entries(data).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                formData.append(key, String(value));
            }
        });

        if (file) {
            formData.append('file', file);
        }

        const response = await api.patch(`/jenis-surat/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    },

    async remove(id: number): Promise<ApiResponse> {
        const response = await api.delete(`/jenis-surat/${id}`);
        return response.data;
    }

}

export default jenisSuratService;