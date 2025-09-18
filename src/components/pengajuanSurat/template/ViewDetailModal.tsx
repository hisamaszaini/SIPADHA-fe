import type { PengajuanSuratDetail, PengajuanSuratResponse } from '../types/pengajuanSurat.types';

// Tipe props untuk modal ini
interface ViewDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PengajuanSuratDetail | PengajuanSuratResponse | null;
  isLoading: boolean;
}

// Komponen kecil untuk menampilkan baris detail
const DetailRow = ({ label, value }: { label: string; value: string | null | undefined }) => (
  <div className="py-2 px-3 grid grid-cols-3 gap-4 hover:bg-gray-50 rounded">
    <dt className="text-sm font-medium text-gray-500">{label}</dt>
    <dd className="text-sm text-gray-900 col-span-2">{value || '-'}</dd>
  </div>
);

export function ViewDetailsModal({ isOpen, onClose, data, isLoading }: ViewDetailsModalProps) {
  if (!isOpen) return null;

  const renderSpecificDetails = () => {
    if (!data) return null;

    switch (data.jenis) {
      case 'KETERANGAN_USAHA':
        const usahaData = data.dataPermohonan as any; // Cast for simplicity
        return (
          <>
            <DetailRow label="Pertanian" value={usahaData.pertanian} />
            <DetailRow label="Perdagangan" value={usahaData.perdagangan} />
            <DetailRow label="Peternakan" value={usahaData.peternakan} />
            <DetailRow label="Perindustrian" value={usahaData.perindustrian} />
            <DetailRow label="Jasa" value={usahaData.jasa} />
            <DetailRow label="Lain-lain" value={usahaData.lain} />
          </>
        );
      case 'KETERANGAN_TIDAK_MAMPU_SEKOLAH':
        const sekolahData = data.dataPermohonan as any; // Cast for simplicity
        return (
          <>
            <DetailRow label="Nama Anak/Siswa" value={data.target?.nama} />
            <DetailRow label="NIK Anak/Siswa" value={data.target?.nik} />
            <DetailRow label="Institusi" value={sekolahData.institusi} />
            <DetailRow label="Alamat Siswa" value={sekolahData.alamatSiswa} />
            <DetailRow label="Penghasilan Ortu" value={sekolahData.penghasilan} />
            <DetailRow label="Keterangan Gaji" value={sekolahData.keterangan} />
          </>
        );
      default:
        return <p>Tidak ada detail spesifik untuk jenis surat ini.</p>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h3 className="text-xl font-bold">Detail Pengajuan Surat</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">&times;</button>
        </div>

        {isLoading ? (
          <p>Memuat detail...</p>
        ) : !data ? (
          <p>Gagal memuat data.</p>
        ) : (
          <dl className="space-y-2">
            {/* Informasi Pemohon */}
            <h4 className="font-semibold text-gray-800 mt-4 border-b">Informasi Pemohon</h4>
            <DetailRow label="Nama Lengkap" value={data.penduduk.nama} />
            <DetailRow label="NIK" value={data.penduduk.nik} />

            {/* Informasi Pengajuan */}
            <h4 className="font-semibold text-gray-800 mt-4 border-b">Detail Pengajuan</h4>
            <DetailRow label="Jenis Surat" value={data.jenis.replace(/_/g, ' ')} />
            <DetailRow label="Status" value={data.status} />
            <DetailRow label="Tanggal Dibuat" value={new Date(data.createdAt).toLocaleString('id-ID')} />
            <DetailRow label="Catatan" value={data.catatan} />

            {/* Detail Spesifik Surat */}
            <h4 className="font-semibold text-gray-800 mt-4 border-b">Data Permohonan</h4>
            {renderSpecificDetails()}
          </dl>
        )}
      </div>
    </div>
  );
}