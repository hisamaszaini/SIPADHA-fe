import { DeleteConfirmationModal } from "../../components/pengajuanSurat/DeleteFormModal";
import { PengajuanSuratFormModal } from "../../components/pengajuanSurat/PengajuanFormModal";
import { PengajuanSuratFilters } from "../../components/pengajuanSurat/PengajuanSuratFilter";
import PengajuanSuratTable from "../../components/pengajuanSurat/template/PengajuanSuratTable";
import { ViewDetailsModal } from "../../components/pengajuanSurat/template/ViewDetailModal";
import { usePengajuanSuratManagement } from "../../hooks/PengajuanSurat/usePengajuanSuratManagement";
import { Button } from "../../components/ui/Button";


export function WargaPengajuanSuratPage() {
    // 1. Panggil hook manajemen utama untuk mendapatkan semua state dan fungsi
    const management = usePengajuanSuratManagement();

    return (
        <div className="w-full mx-auto bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">
            <header className="p-4 md:p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-base md:text-xl font-bold text-gray-800">Manajemen Pengajuan Surat</h2>
                <div className="flex items-center ml-auto">
                    <Button variant="primary" size="mid" icon="fas fa-plus" onClick={() => management.openFormModal(null)}
                    >Buat Pengajuan</Button>
                </div>
            </header>

            <main>
                {/* Komponen Filter */}
                <PengajuanSuratFilters
                    searchTerm={management.searchTerm}
                    statusFilter={management.queryParams.statusSurat || ''}
                    limit={String(management.queryParams.limit)}
                    onSearchChange={management.handleSearchChange}
                    onStatusChange={management.handleStatusChange}
                    onLimitChange={management.handleLimitChange}
                />

                {/* 3. Tabel */}
                <div className="flex-grow overflow-y-auto">
                    <PengajuanSuratTable
                        data={management.data?.data || []}
                        meta={management.data?.meta}
                        isLoading={management.isLoading}
                        onPageChange={management.setPage}
                        onSortChange={management.handleSortChange}
                        onEdit={management.handleEdit}
                        onDelete={management.openDeleteModal} // Langsung buka modal konfirmasi
                        onView={management.handleView}
                        onProcess={management.handleProcess}
                        sortBy={management.queryParams.sortBy}
                        sortOrder={management.queryParams.sortOrder}
                    />
                </div>
            </main>

            {/* 4. Render semua Modal */}
            <PengajuanSuratFormModal
                isOpen={management.isFormModalOpen}
                onClose={management.closeFormModal}
                pengajuan={management.editingData}
                onSuccess={management.handleSuccess}

                // Tambahkan props ini
                pendudukOptions={management.pendudukOptions}
                onPendudukSearchChange={management.setPendudukSearch}
                isPendudukLoading={management.isLoadingPenduduk}

                targetOptions={management.targetOptions}
                onTargetSearchChange={management.setTargetSearch}
                isTargetLoading={management.isLoadingTarget}
            />

            {/* Modal untuk Konfirmasi Hapus */}
            <DeleteConfirmationModal
                isOpen={!!management.dataToDelete}
                onClose={management.closeDeleteModal}
                onConfirm={() => management.handleDelete(management.dataToDelete!.id)}
                itemName={management.dataToDelete?.penduduk.nama || ''}
                isDeleting={management.isDeleting}
            />

            {/* Modal untuk Lihat Detail (jika diperlukan) */}
            <ViewDetailsModal
                isOpen={management.isViewModalOpen}
                onClose={management.closeViewModal}
                data={management.viewingData}
                isLoading={management.isLoadingDetail}
            />
        </div>
    );
}