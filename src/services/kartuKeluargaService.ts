import type { ApiResponse } from "../types/api.types";
import type { CreateKartuKeluargaWithKepalaDto, FindAllKartuKeluargaResponse, FindKk, KartuKeluarga, KartuKeluargaQueryParams, UpdateKartuKeluargaWithKepalaDto } from "../types/kartuKeluarga.types";

import api from "./api";

export const kartuKeluargaService = {
    /**
     * Membuat data Kepala Keluarga beserta data penduduknya.
     * Endpoint: POST /kartu-keluarga
     * @param data - Data lengkap dari form (KK + Penduduk).
     * @returns {Promise<ApiResponse<KepalaKeluarga>>} Objek Kepala Keluarga yang baru dibuat.
     */
    async createWithPenduduk(data: CreateKartuKeluargaWithKepalaDto): Promise<ApiResponse<KartuKeluarga>> {
        const response = await api.post('/kartu-keluarga', data);
        return response.data;
    },

    /**
     * Mengambil daftar semua Kepala Keluarga dengan paginasi dan filter.
     * Endpoint: GET /kartu-keluarga
     * @param params - Parameter query untuk paginasi, pencarian, dan filter wilayah.
     * @returns {Promise<ApiResponse<KepalaKeluarga[]>>} Daftar Kepala Keluarga.
     */
    async findAll(params: KartuKeluargaQueryParams = {}): Promise<ApiResponse<FindAllKartuKeluargaResponse[]>> {
        const response = await api.get('/kartu-keluarga', { params });
        return response.data;
    },
    
    /**
     * Mencari satu Kartu Keluarga berdasarkan Nomor KK.
     * Endpoint: GET /kartu-keluarga/kk
     * @param noKk - Nomor Kartu Keluarga yang dicari.
     * @returns {Promise<ApiResponse<FindKk>>} Data Kepala Keluarga yang ditemukan (nik, nama).
     */
    async findKk(noKk: string): Promise<ApiResponse<FindKk>> {
        const response = await api.get(`/kartu-keluarga/kk/${noKk}`);
        return response.data;
    },

    /**
     * Mengambil data satu Kepala Keluarga berdasarkan ID.
     * Endpoint: GET /kartu-keluarga/:id
     * @param id - ID dari Kepala Keluarga.
     * @returns {Promise<ApiResponse<KepalaKeluarga>>} Data Kepala Keluarga yang dicari.
     */
    async findOne(id: number): Promise<ApiResponse<KartuKeluarga>> {
        const response = await api.get(`/kartu-keluarga/${id}`);
        return response.data;
    },

    /**
     * Memperbarui data Kartu Keluarga (alamat, wilayah) berdasarkan ID.
     * Catatan: Tidak termasuk update data penduduk kepala keluarganya.
     * Endpoint: PATCH /kartu-keluarga/:id
     * @param id - ID dari Kepala Keluarga yang akan diperbarui.
     * @param data - Data baru untuk Kepala Keluarga.
     * @returns {Promise<ApiResponse<KepalaKeluarga>>} Data Kepala Keluarga setelah diperbarui.
     */
    async update(id: number, data: UpdateKartuKeluargaWithKepalaDto): Promise<ApiResponse<KartuKeluarga>> {
        const response = await api.patch(`/kartu-keluarga/${id}`, data);
        return response.data;
    },

    /**
     * Menghapus data Kepala Keluarga berdasarkan ID.
     * Ini juga akan menghapus semua anggota keluarga yang terhubung.
     * Endpoint: DELETE /kartu-keluarga/:id
     * @param id - ID dari Kepala Keluarga yang akan dihapus.
     * @returns {Promise<ApiResponse>} Pesan konfirmasi penghapusan.
     */
    async remove(id: number): Promise<ApiResponse> {
        const response = await api.delete(`/kartu-keluarga/${id}`);
        return response.data;
    },
};

export default kartuKeluargaService;