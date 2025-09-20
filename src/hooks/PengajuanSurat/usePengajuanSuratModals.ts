import { useState } from 'react';
import type { DetailPengajuanSuratSchema, FindAllPengajuanSuratResponseSchema, MinimalProsesStatusSurat } from '../../types/pengajuanSurat.types';

/**
 * Custom hook untuk mengelola semua state modal yang berhubungan dengan
 * fitur Pengajuan Surat.
 */
export function usePengajuanSuratModals() {
  // State untuk modal utama (tambah/edit data)
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingData, setEditingData] = useState<DetailPengajuanSuratSchema | null>(null);

  // State untuk modal proses (misal: admin mengubah status)
  const [isProcessModalOpen, setIsProcessModalOpen] = useState(false);
  const [processingData, setProcessingData] = useState<MinimalProsesStatusSurat | null>(null);
  
  // State untuk modal lihat detail
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewingData, setViewingData] = useState<DetailPengajuanSuratSchema | null>(null);

  // State untuk modal konfirmasi hapus
  // Cukup simpan datanya, modal akan tampil jika data tidak null
  const [dataToDelete, setDataToDelete] = useState<FindAllPengajuanSuratResponseSchema | null>(null);

  // === Handlers untuk Modal Form (Create/Edit) ===
  const openFormModal = (data: DetailPengajuanSuratSchema | null = null) => {
    setEditingData(data); // null untuk 'create', object untuk 'edit'
    setIsFormModalOpen(true);
  };

  const closeFormModal = () => {
    setIsFormModalOpen(false);
    setEditingData(null);
  };

  // === Handlers untuk Modal Proses ===
  const openProcessModal = (data: MinimalProsesStatusSurat) => {
    setProcessingData(data);
    setIsProcessModalOpen(true);
  };

  const closeProcessModal = () => {
    setIsProcessModalOpen(false);
    setProcessingData(null);
  };
  
  // === Handlers untuk Modal Lihat Detail ===
  const openViewModal = (data: DetailPengajuanSuratSchema) => {
    setViewingData(data);
    setIsViewModalOpen(true);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setViewingData(null);
  };

  // === Handlers untuk Modal Hapus ===
  const openDeleteModal = (data: FindAllPengajuanSuratResponseSchema) => {
    setDataToDelete(data);
  };

  const closeDeleteModal = () => {
    setDataToDelete(null);
  };
  
  // Fungsi untuk mereset/menutup semua modal sekaligus
  const resetAllModals = () => {
      closeFormModal();
      closeProcessModal();
      closeViewModal();
      closeDeleteModal();
  }

  return {
    // Properti dan handler untuk modal Form
    isFormModalOpen,
    editingData,
    openFormModal,
    closeFormModal,

    // Properti dan handler untuk modal Proses
    isProcessModalOpen,
    processingData,
    openProcessModal,
    closeProcessModal,
    
    // Properti dan handler untuk modal Lihat Detail
    isViewModalOpen,
    viewingData,
    openViewModal,
    closeViewModal,
    
    // Properti dan handler untuk modal Hapus
    dataToDelete,
    openDeleteModal,
    closeDeleteModal,
    
    resetAllModals,
  };
}