import { DeleteConfirmationModal } from "../../components/pengajuanSurat/DeleteFormModal";
import { PengajuanSuratFormModal } from "../../components/pengajuanSurat/PengajuanFormModal";
import { PengajuanSuratFilters } from "../../components/pengajuanSurat/PengajuanSuratFilter";
import PengajuanSuratTable from "../../components/pengajuanSurat/template/PengajuanSuratTable";
import { usePengajuanSuratManagement } from "../../hooks/PengajuanSurat/usePengajuanSuratManagement";
import { Button } from "../../components/ui/Button";


export function WargaPengajuanSuratPage() {
    const management = usePengajuanSuratManagement();
    const userRole = management.user?.role || 'WARGA';
    const selectedPengajuan = management.editingData || management.viewingData || null;
    const isViewOnly = userRole === 'WARGA' && selectedPengajuan?.statusSurat === 'SELESAI';
    
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
                        onDelete={management.openDeleteModal}
                        onView={management.handleView}
                        sortBy={management.queryParams.sortBy}
                        sortOrder={management.queryParams.sortOrder}
                    />
                </div>
            </main>

            {/* Render semua Modal */}
            <PengajuanSuratFormModal
                isOpen={management.isFormModalOpen}
                onClose={management.closeFormModal}
                pengajuan={management.editingData}
                onSuccess={management.handleSuccess}

                pendudukOptions={management.pendudukOptions}
                pendudukSearch={management.pendudukSearch}
                onPendudukSearchChange={management.setPendudukSearch}
                isPendudukLoading={management.isLoadingPenduduk}

                targetOptions={management.targetOptions}
                targetSearch={management.targetSearch}
                onTargetSearchChange={management.setTargetSearch}
                isTargetLoading={management.isLoadingTarget}

                isViewOnly={isViewOnly}
            />

            {/* Modal untuk Konfirmasi Hapus */}
            <DeleteConfirmationModal
                isOpen={!!management.dataToDelete}
                onClose={management.closeDeleteModal}
                onConfirm={() => management.handleDelete(management.dataToDelete!.id)}
                itemName={management.dataToDelete?.penduduk.nama || ''}
                isDeleting={management.isDeleting}
            />
        </div>
    );
}