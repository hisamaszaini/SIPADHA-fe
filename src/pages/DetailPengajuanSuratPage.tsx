import { useNavigate, useParams } from 'react-router-dom';
import { usePengajuanSuratQueries } from '../hooks/PengajuanSurat/usePengajuanSuratQueries';
import { SuratTemplateRenderer } from '../components/SuratTemplateRender';
import { ProcessSuratModal } from '../components/pengajuanSurat/template/ProcessSuratModal';
import { usePengajuanSuratManagement } from '../hooks/PengajuanSurat/usePengajuanSuratManagement';
import { Toaster } from 'sonner';
import { useAuth } from '../contexts/AuthContext';

export function DetailPengajuanSuratPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { user } = useAuth();


    const management = usePengajuanSuratManagement();
    const pengajuanSuratId = Number(id);

    const { findOneQuery } = usePengajuanSuratQueries({ pengajuanSuratId });
    const { data: response, isLoading, isError } = findOneQuery;
    const suratData = response?.data;

    const handlePrint = () => {
        const printContent = document.getElementById("printArea");
        if (!printContent) return;

        const iframe = document.createElement("iframe");
        iframe.style.position = "absolute";
        iframe.style.width = "0";
        iframe.style.height = "0";
        iframe.style.border = "0";
        document.body.appendChild(iframe);

        const doc = iframe.contentWindow?.document;
        if (!doc) return;

        doc.open();
        doc.write(`<html>
  <head>
    <title>Cetak Surat</title>
    ${document.head.innerHTML}
  </head>
  <body>
    ${printContent.innerHTML}
  </body>
</html>`);
        doc.close();

        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();

        setTimeout(() => {
            document.body.removeChild(iframe);
        }, 1000);
    };

    if (isLoading) {
        return <div className="p-6 text-center">Memuat data surat...</div>;
    }

    if (isError) {
        const apiError = (findOneQuery.error as any)?.response?.data;
        const errorMessage = apiError?.message || "Terjadi kesalahan saat memuat data.";

        if (apiError?.error?.code === "Forbidden") {
            return (
                <div className="p-6 text-center text-red-500 bg-white shadow-md rounded-lg">
                    {errorMessage}
                    <div className="mt-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                        >
                            Kembali
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div className="p-6 text-center text-red-500">
                {errorMessage}
            </div>
        );
    }

    if (!suratData) {
        return <div className="p-6 text-center text-red-500">Surat tidak ditemukan.</div>;
    }

    return (
        <>
            <Toaster richColors position="top-right" />

            {user?.role === "ADMIN" && (
                <ProcessSuratModal
                    isOpen={management.isProcessModalOpen}
                    onClose={management.closeProcessModal}
                    data={management.processingData}
                    onSuccess={management.handleSuccess}
                />
            )}

            {/* Panel Aksi / Kontrol Dokumen */}
            <div className="w-full mx-auto bg-white rounded-xl shadow-lg p-5 sm:p-6 mb-8 print:hidden">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

                    <div className="flex w-full sm:w-auto items-center gap-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="group flex-shrink-0 text-slate-500 p-3 rounded-lg border border-slate-300 hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-slate-300 transition-all duration-300"
                            aria-label="Kembali ke halaman sebelumnya"
                        >
                            <i className="fas fa-arrow-left fa-lg transition-transform duration-300 group-hover:-translate-x-1"></i>
                        </button>
                        <div>
                            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                                Kontrol Dokumen
                            </h1>
                            <p className="text-gray-500 text-sm sm:text-base mt-1">
                                Cetak atau proses surat yang diajukan.
                            </p>
                        </div>
                    </div>

                    <div className="flex w-full flex-col sm:flex-row sm:w-auto items-center gap-3">
                        {user?.role === "ADMIN" && (
                            <button
                                onClick={() => management.openProcessModal(suratData)}
                                className="group w-full sm:w-auto bg-emerald-500 text-white px-5 py-2.5 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 shadow-md hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-300 transition-all duration-300"
                            >
                                <i className="fas fa-cogs transition-transform duration-300 group-hover:rotate-90"></i>
                                <span>Proses Surat</span>
                            </button>)}

                        <button
                            onClick={handlePrint}
                            className="group w-full sm:w-auto bg-blue-500 text-white px-5 py-2.5 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
                        >
                            <i className="fas fa-print transition-transform duration-300 group-hover:scale-110"></i>
                            <span>Cetak</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Area Template Surat yang akan di-print */}
            <div className="bg-white mx-auto rounded-xl shadow-xl border border-gray-200 p-8 sm:p-12 printable-area">
                <SuratTemplateRenderer data={suratData} />
            </div>
        </>
    );
}