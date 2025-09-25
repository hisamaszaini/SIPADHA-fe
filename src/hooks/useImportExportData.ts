import {
    useQuery,
    useMutation,
    useQueryClient,
    type UseMutationOptions,
    type UseQueryResult,
    type UseMutationResult,
} from "@tanstack/react-query";
import { importExportService } from "../services/importExportService";
import type { ApiResponse } from "../types/api.types";
import type { Job, ImportStartResponse } from "../types/importExport.types";

/**
 * Kumpulan query keys untuk fitur import-export.
 * Menggunakan objek seperti ini membantu menjaga konsistensi dan menghindari typo.
 */
const importExportKeys = {
    all: ["importExport"] as const,
    history: () => [...importExportKeys.all, "history"] as const,
    status: (jobId: string) => [...importExportKeys.all, "status", jobId] as const,
};

// --- QUERIES ---

/**
 * Hook untuk mengambil riwayat semua job import/export.
 * Secara otomatis mentransformasi data respons agar komponen langsung menerima array `Job[]`.
 * @returns {UseQueryResult<Job[], Error>} Objek hasil query dari React Query.
 */
export const useImportHistory = (): UseQueryResult<Job[], Error> => {
    return useQuery({
        queryKey: importExportKeys.history(),
        queryFn: () => importExportService.history(),
        select: (response): Job[] => response.data,
    });
};

/**
 * Hook untuk memantau status sebuah job secara real-time.
 * Hook ini melakukan polling ke server setiap 2 detik dan akan berhenti otomatis
 * jika status job adalah 'completed' atau 'failed'.
 * Query tidak akan berjalan jika `jobId` bernilai null.
 * @param {string | null} jobId - ID dari job yang akan dipantau.
 * @returns {UseQueryResult<Job, Error>} Objek hasil query yang berisi status job terkini.
 */
export const useImportJobStatus = (jobId: string | null): UseQueryResult<Job, Error> => {
    return useQuery({
        queryKey: importExportKeys.status(jobId!),
        queryFn: () => importExportService.getJobStatus(jobId!),
        enabled: !!jobId,
        refetchInterval: (query) => {
            const job = query.state.data?.data;
            const isFinished = job?.state === "completed" || job?.state === "failed";
            return isFinished ? false : 2000;
        },
        select: (response): Job => response.data,
    });
};

// --- MUTATIONS ---

/**
 * Hook untuk melakukan mutasi (meng-upload file Excel).
 * Hook ini fleksibel dan menerima argumen `options` standar dari `useMutation`
 * (seperti `onSuccess`, `onError`) untuk di-handle langsung dari komponen.
 * Secara default, hook ini akan meng-invalidate query riwayat ('history')
 * setiap kali mutasi berhasil.
 * @param {UseMutationOptions<ApiResponse<ImportStartResponse>, Error, FormData>} options - Konfigurasi callback untuk `useMutation`.
 * @returns {UseMutationResult<ApiResponse<ImportStartResponse>, Error, FormData>} Objek hasil mutasi dari React Query.
 */
export const useImportFromExcel = (
    options?: UseMutationOptions<
        ApiResponse<ImportStartResponse>,
        Error,
        FormData
    >
): UseMutationResult<ApiResponse<ImportStartResponse>, Error, FormData> => {
    const queryClient = useQueryClient();
    const { onSuccess, ...restOptions } = options ?? {};

    return useMutation({
        mutationFn: (formData: FormData) =>
            importExportService.importFromExcel(formData),

        onSuccess: (data, variables, context, mutation) => {
            queryClient.invalidateQueries({ queryKey: importExportKeys.history() });

            onSuccess?.(data, variables, context, mutation);
        },
        ...restOptions,
    });
};