import type { ApiResponse } from "../types/api.types"; 
import type { Job, ImportStartResponse } from "../types/importExport.types";

import api from "./api";

export const importExportService = {
  /**
   * Mengirim file Excel untuk diimpor.
   * @param formData - FormData yang berisi file.
   * @returns Respons API yang berisi ID job.
   */
  async importFromExcel(formData: FormData): Promise<ApiResponse<ImportStartResponse>> {
    const response = await api.post("/import-export", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  },

  /**
   * Mengambil riwayat semua job impor/ekspor.
   * @returns Respons API yang berisi daftar semua job.
   */
  async history(): Promise<ApiResponse<Job[]>> {
    const response = await api.get("/import-export");
    return response.data;
  },

  /**
   * Memeriksa status dari sebuah job berdasarkan ID-nya.
   * @param jobId - ID dari job yang akan diperiksa.
   * @returns Respons API yang berisi status terkini dari job.
   */
  async getJobStatus(jobId: string): Promise<ApiResponse<Job>> {
    const response = await api.get(`/import-export/${jobId}/status`);
    return response.data;
  },
};