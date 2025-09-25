// file: src/types/importExport.types.ts

/**
 * Tipe untuk detail error pada setiap baris saat impor gagal.
 */
export interface JobErrorDetail {
  row: number;
  nik: string;
  nama: string;
  error: string;
  data: Record<string, any>; // Data asli dari baris yang gagal
}

/**
 * Tipe untuk hasil (result) dari job yang telah selesai.
 */
export interface JobResult {
  successCount: number;
  failedCount: number;
  total: number;
  success?: boolean;
  totalRecords?: number;
  errors?: JobErrorDetail[];
  processedAt?: string;
  duration?: number;
}

/**
 * Tipe utama untuk objek job, digunakan untuk status dan histori.
 */
export interface Job {
  id: string;
  state: "completed" | "processing" | "failed" | "queued";
  progress: number;
  result?: JobResult;
  timestamp?: number;
}

/**
 * Tipe untuk data respons saat memulai proses import.
 */
export interface ImportStartResponse {
  jobId: string;
  message: string;
}