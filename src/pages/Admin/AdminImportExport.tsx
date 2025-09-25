import React, { useState, type ChangeEvent } from "react";
import { useImportFromExcel, useImportJobStatus, useImportHistory } from "../../hooks/useImportExportData";
import { toast } from "sonner";
import ImportTable from "../../components/ImportExport/ImportTable";

const Icon = ({ className }: { className: string }) => (
    <i className={`${className}`}></i>
);

const ResultDisplay = ({ result }: { result: any }) => {
    const successCount = result?.successCount ?? 0;
    const failedCount = result?.failedCount ?? 0;
    const total = result?.total ?? 0;

    return (
        <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between items-center p-2 bg-green-50 rounded-md">
                <span className="text-green-700">
                    <Icon className="fas fa-check-circle mr-2" /> Sukses
                </span>
                <span className="font-bold text-green-800">{successCount}</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-red-50 rounded-md">
                <span className="text-red-700">
                    <Icon className="fas fa-exclamation-circle mr-2" /> Gagal
                </span>
                <span className="font-bold text-red-800">{failedCount}</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-100 rounded-md">
                <span className="text-gray-700">
                    <Icon className="fas fa-list-ol mr-2" /> Total Baris
                </span>
                <span className="font-bold text-gray-800">{total}</span>
            </div>
        </div>
    );
};

export default function AdminImportExportPage() {
    const [file, setFile] = useState<File | null>(null);
    const [activeJobId, setActiveJobId] = useState<string | null>(null);

    const { mutate: importFromExcel, isPending: isUploading } =
        useImportFromExcel({
            onSuccess: (response) => {
                toast.success("Upload berhasil! Proses import telah dimulai.");
                setActiveJobId(response.data.jobId);
                setFile(null);
            },
            onError: (error) => {
                toast.error(error.message || "Terjadi kesalahan saat mengupload file.");
                console.error("Upload gagal:", error.message);
            },
        });

    const { data: activeJob, isLoading: isStatusLoading } =
        useImportJobStatus(activeJobId);

    const { data: history, isLoading: isHistoryLoading } = useImportHistory();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            setFile(e.target.files[0]);
        }
    };

    // Handler untuk submit form upload
    const handleUpload = (e: React.FormEvent) => {
        e.preventDefault();
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            importFromExcel(formData);
        }
    };

    const isLoading = isHistoryLoading;
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Icon className="fas fa-spinner animate-spin text-4xl text-indigo-500" />
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 md:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1 flex flex-col gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">
                            Upload File Excel
                        </h2>
                        <form onSubmit={handleUpload} className="space-y-4">
                            <input
                                id="file"
                                type="file"
                                accept=".xlsx,.xls"
                                onChange={handleFileChange}
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                            />
                            <button
                                type="submit"
                                disabled={!file || isUploading}
                                className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                            >
                                {isUploading ? (
                                    <>
                                        <Icon className="fas fa-spinner animate-spin" />
                                        <span>Mengupload...</span>
                                    </>
                                ) : (
                                    <>
                                        <Icon className="fas fa-upload" />
                                        <span>Mulai Import</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {activeJobId && (
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-lg font-bold text-gray-800">Status Proses</h3>
                            <p className="text-xs text-gray-500 mb-4">
                                Job ID: {activeJobId}
                            </p>
                            {isStatusLoading && !activeJob ? (
                                <p className="text-gray-600">Memuat status...</p>
                            ) : (
                                activeJob && (
                                    <div className="space-y-3">
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="font-medium text-gray-700 capitalize">
                                                    {activeJob.state}
                                                </span>
                                                <span className="font-bold text-indigo-600">
                                                    {activeJob.progress}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                <div
                                                    className="bg-indigo-500 h-2.5 rounded-full transition-all duration-300"
                                                    style={{ width: `${activeJob.progress}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                        {activeJob.state === "completed" && activeJob.result && (
                                            <ResultDisplay result={activeJob.result} />
                                        )}
                                    </div>
                                )
                            )}
                        </div>
                    )}
                </div>

                <ImportTable history={history} isLoading={isHistoryLoading} setActiveJobId={setActiveJobId} />
            </div>
        </div>
    );
}