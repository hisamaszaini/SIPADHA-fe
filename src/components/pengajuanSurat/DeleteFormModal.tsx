interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemName: string;
  isDeleting: boolean;
}

export function DeleteConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  itemName,
  isDeleting,
}: DeleteConfirmationModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/20 flex justify-center items-center z-50 transition-opacity duration-300">
      <div className="bg-white rounded-lg shadow-xl p-6 m-4 w-full max-w-md transform transition-all duration-300">
        <div className="text-center">
          <span className="text-4xl" role="img" aria-label="warning">⚠️</span>
          <h3 className="text-lg font-bold text-gray-900 mt-4">
            Konfirmasi Hapus
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Apakah Anda yakin ingin menghapus data pengajuan atas nama <strong className="font-semibold">{itemName}</strong>?
            <br />
            Aksi ini tidak dapat dibatalkan.
          </p>
        </div>

        {/* Tombol Aksi */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            type="button"
            onClick={onClose}
            disabled={isDeleting}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 disabled:opacity-50"
          >
            Batal
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isDeleting}
            className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 disabled:bg-red-400"
          >
            {isDeleting ? 'Menghapus...' : 'Ya, Hapus'}
          </button>
        </div>
      </div>
    </div>
  );
}