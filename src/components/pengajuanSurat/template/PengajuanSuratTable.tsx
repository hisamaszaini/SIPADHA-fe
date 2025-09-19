import { FileEdit, Trash2 } from "lucide-react";
import type { PaginationMeta } from "../../../types/api.types";
import { Link } from "react-router-dom";
import { jenisSuratOptions } from "../../../constant/suratOption";
import { Pagination } from "../../ui/Pagination";
import { useAuth } from "../../../contexts/AuthContext";
import type { FindAllPengajuanSuratResponseSchema } from "../../../types/pengajuanSurat.types";

// Definisikan tipe props untuk komponen ini
interface PengajuanSuratTableProps {
  data: FindAllPengajuanSuratResponseSchema[];
  meta?: PaginationMeta;
  isLoading: boolean;
  onPageChange: (page: number) => void;
  onSortChange: (column: string) => void;
  onEdit: (id: number) => void;
  onDelete: (data: FindAllPengajuanSuratResponseSchema) => void;
  onView: (id: number) => void;
  onProcess: (data: FindAllPengajuanSuratResponseSchema) => void;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// Helper untuk styling badge status
const statusStyles: Record<string, string> = {
  PENDING: 'bg-yellow-100 text-yellow-800',
  DIPROSES: 'bg-blue-100 text-blue-800',
  SELESAI: 'bg-green-100 text-green-800',
  DITOLAK: 'bg-red-100 text-red-800',
};

export default function PengajuanSuratTable({
  data,
  meta,
  isLoading,
  onPageChange,
  onSortChange,
  onEdit,
  onDelete,
  // onView,
  onProcess,
  sortBy,
  sortOrder,
}: PengajuanSuratTableProps) {

  const { user } = useAuth();

  const SortableHeader = ({ column, label }: { column: string; label: string }) => (
    <th className="p-3 text-left">
      <button onClick={() => onSortChange(column)} className="font-bold flex items-center gap-1">
        {label}
        {sortBy === column && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
      </button>
    </th>
  );

  const getLabel = (value: string) =>
    jenisSuratOptions.find(opt => opt.value === value)?.label ?? value;

  return (
    <div className="bg-white rounded-lg shadow">
      <table className="min-w-full text-left text-sm text-gray-900">
        <thead className="bg-gray-50">
          <tr className="text-xs font-medium uppercase tracking-wider text-gray-500">
            <th className="p-3 text-center font-bold">No.</th>
            <SortableHeader column="penduduk.nama" label="NAMA PEMOHON" />
            <th className="p-3 text-left font-bold max-w-24">JENIS SURAT</th>
            <th className="p-3 text-left font-bold">STATUS</th>
            <SortableHeader column="createdAt" label="TANGGAL DIBUAT" />
            <th className="p-3 font-bold">AKSI</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={6} className="text-center p-4">Memuat data...</td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center p-4">Tidak ada data.</td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 text-center"> {meta ? (meta.page - 1) * meta.limit + index + 1 : index + 1} </td>
                <td className="p-3 text-sm">{item.penduduk.nama} <br /> <span className="text-xs text-gray-500">{item.penduduk.nik}</span></td>
                <td className="p-3">{getLabel(item.jenis)}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusStyles[item.statusSurat] || 'bg-gray-100 text-gray-800'}`}>
                    {item.statusSurat}
                  </span>
                </td>
                <td className="p-3">{new Date(item.createdAt).toLocaleDateString('id-ID')}</td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    {/* Tombol Aksi Utama */}
                    {user?.role === "ADMIN" && (
                      <button
                        onClick={() => onProcess(item)}
                        className="inline-flex items-center justify-center gap-1.5 rounded-md bg-emerald-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      >
                        <i className="fa-solid fa-gears fa-sm"></i>
                        <span>Proses</span>
                      </button>
                    )}

                    {user?.role === "ADMIN" && (
                    <Link
                      to={`/admin/pengajuan-surat/${item.id}`}
                      className="inline-flex items-center justify-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 transition-all hover:bg-gray-50"
                    >
                      <i className="fa-solid fa-eye fa-sm text-gray-500"></i>
                      <span>Detail</span>
                    </Link>)}

                    {user?.role === "WARGA" && (
                    <Link
                      to={`/warga/pengajuan-surat/${item.id}`}
                      className="inline-flex items-center justify-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 transition-all hover:bg-gray-50"
                    >
                      <i className="fa-solid fa-eye fa-sm text-gray-500"></i>
                      <span>Detail</span>
                    </Link>)}

                    <div className="h-5 w-px bg-gray-200 mx-1"></div>

                    <button
                      onClick={() => onEdit(item.id)}
                      title="Edit Pengajuan"
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-amber-600 transition-all duration-200 hover:bg-amber-100 hover:scale-110"
                    >
                      <FileEdit className="h-5 w-5" />
                    </button>

                    <button
                      onClick={() => onDelete(item)}
                      title="Hapus Pengajuan"
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-red-600 transition-all duration-200 hover:bg-red-100 hover:scale-110"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {meta && meta.total > 0 && (
        <Pagination currentItemCount={data.length} meta={meta} onPageChange={onPageChange} />
      )}
    </div>
  );
}