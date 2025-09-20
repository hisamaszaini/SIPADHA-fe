import React, { useEffect, useRef } from "react";
import { FileText, Users, Home, UserRound, IdCard, PieChart } from "lucide-react";
import Chart from "chart.js/auto";
import { Link } from "react-router-dom";
import { useDashboardWargaData } from "../hooks/useDashboardData";
import StatCard from "../components/ui/StatCard";
import { jenisSuratOptions } from "../constant/suratOption";

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const statusColors: { [key: string]: string } = {
    "Diterima": "bg-green-100 text-green-800 ring-green-200",
    "Ditolak": "bg-red-100 text-red-800 ring-red-200",
    "Diproses": "bg-blue-100 text-blue-800 ring-blue-200",
    "Menunggu": "bg-yellow-100 text-yellow-800 ring-yellow-200",
  };
  const colorClass = statusColors[status] || "bg-gray-100 text-gray-800 ring-gray-200";

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ring-1 ring-inset ${colorClass}`}>
      {status}
    </span>
  );
};

// Skeleton loader untuk UX yang lebih baik saat loading
const DashboardLoader: React.FC = () => (
  <div className="animate-pulse space-y-6">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div className="h-28 rounded-2xl bg-gray-200"></div>
      <div className="h-28 rounded-2xl bg-gray-200"></div>
      <div className="h-28 rounded-2xl bg-gray-200"></div>
    </div>
    <div className="h-60 rounded-2xl bg-gray-200"></div>
    <div className="h-80 rounded-2xl bg-gray-200"></div>
  </div>
);

const getLabel = (value: string) =>
  jenisSuratOptions.find(opt => opt.value === value)?.label ?? value;

const DashboardWarga: React.FC = () => {
  const { data: dashboardData, isLoading, isError } = useDashboardWargaData();

  const doughnutRef = useRef<HTMLCanvasElement | null>(null);
  const doughnutChartRef = useRef<Chart<any> | null>(null);

  useEffect(() => {
    if (!dashboardData) return;

    const pengajuanPerStatus = dashboardData.data.pengajuan.perStatus;
    const statusLabels = Object.keys(pengajuanPerStatus);
    const statusValues = Object.values(pengajuanPerStatus);

    if (doughnutChartRef.current) doughnutChartRef.current.destroy();

    if (doughnutRef.current) {
      doughnutChartRef.current = new Chart(doughnutRef.current, {
        type: "doughnut",
        data: {
          labels: statusLabels,
          datasets: [
            {
              data: statusValues,
              backgroundColor: ["#f59e0b", "#3b82f6", "#10b981", "#ef4444"],
              borderColor: "#fff", // Tambahkan border putih untuk memisahkan segmen
              borderWidth: 2,
              hoverOffset: 12,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
              labels: { boxWidth: 12, padding: 25, font: { size: 14 } },
            },
          },
        },
      });
    }
  }, [dashboardData]);

  if (isLoading) return <DashboardLoader />;
  if (isError) return (
    <div className="flex h-60 items-center justify-center rounded-2xl bg-red-50 text-red-600">
      Terjadi kesalahan saat memuat data dashboard.
    </div>
  );

  const { profil, kk, pengajuan } = dashboardData.data;

  // Helper untuk format tanggal
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: 'numeric', month: 'long', year: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard title="Total Pengajuan" value={pengajuan.total} icon={FileText} gradientClass="gradient-emerald" animationDelay="0s" />
        <StatCard title="Status Keluarga" value={kk ? "Terdaftar" : "Belum Terdaftar"} icon={Home} gradientClass="gradient-blue" animationDelay="0.1s" />
        <StatCard title="Anggota Keluarga" value={kk?.anggota.length ?? 0} icon={Users} gradientClass="gradient-purple" animationDelay="0.2s" />
      </section>

      {/* Baris Pertama: Profil Warga (Lebar Penuh) */}
      <section>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
          <div className="mb-6 flex items-center gap-x-3">
            <UserRound className="h-7 w-7 text-indigo-600" />
            <h2 className="text-xl font-bold text-slate-800">Profil Warga</h2>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-5 text-slate-600 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <p className="text-sm font-medium text-slate-500">Nama Lengkap</p>
              <p className="font-semibold text-slate-700">{profil.nama}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">NIK</p>
              <p className="font-semibold text-slate-700">{profil.nik}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Jenis Kelamin</p>
              <p className="font-semibold text-slate-700">{profil.jenisKelamin}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Tempat & Tanggal Lahir</p>
              <p className="font-semibold text-slate-700">{profil.tempatLahir}, {formatDate(profil.tanggalLahir)}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Agama</p>
              <p className="font-semibold text-slate-700">{profil.agama}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Status Perkawinan</p>
              <p className="font-semibold text-slate-700">{profil.statusPerkawinan}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Pendidikan Terakhir</p>
              <p className="font-semibold text-slate-700">{profil.pendidikan || "Belum diisi"}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Pekerjaan</p>
              <p className="font-semibold text-slate-700">{profil.pekerjaan || "Belum diisi"}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 pt-6 lg:grid-cols-5 pb-8">
        <div className="lg:col-span-3 h-[28rem]">
          <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
            <div className="mb-4 flex items-center gap-x-3">
              <PieChart className="h-7 w-7 text-indigo-600" />
              <h3 className="text-xl font-bold text-slate-800">Status Pengajuan Anda</h3>
            </div>
            <div className="relative flex-grow">
              <canvas ref={doughnutRef}></canvas>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          {kk && (
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
              <div className="mb-6 flex items-center gap-x-3">
                <IdCard className="h-7 w-7 text-indigo-600" />
                <h2 className="text-xl font-bold text-slate-800">Kartu Keluarga</h2>
              </div>
              <div className="space-y-4 text-slate-600">
                <div>
                  <p className="text-sm font-medium text-slate-500">Nomor KK</p>
                  <p className="font-semibold text-slate-700">{kk.nomor}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Alamat</p>
                  <p className="font-semibold text-slate-700">{kk.alamat}</p>
                </div>
                <div>
                  <h3 className="pt-2 text-sm font-medium text-slate-500">Anggota Keluarga</h3>
                  <ul className="mt-2 space-y-2">
                    {kk.anggota.map((a: any) => (
                      <li key={a.nama} className="flex items-center gap-x-3">
                        <Users className="h-5 w-5 flex-shrink-0 text-slate-400" />
                        <span className="text-slate-700">{a.nama} <span className="text-xs text-slate-500">({a.hubungan})</span></span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

      </section>

      {/* Detail Pengajuan Table */}
      <section className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-lg transition-transform duration-300 hover:shadow-xl">
        <h2 className="mb-4 text-xl font-bold text-gray-700">Riwayat Pengajuan Surat</h2>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto border-y border-gray-200">
          <table className="min-w-full text-left text-sm text-gray-900">
            <thead className="bg-gray-50">
              <tr className="text-xs font-medium uppercase tracking-wider text-gray-500">
                <th className="px-3 py-4 text-center font-bold">No.</th>
                <th className="px-3 text-left font-bold">Jenis Surat</th>
                <th className="px-3 text-left font-bold">Status</th>
                <th className="px-3 text-left font-bold">Tanggal</th>
                <th className="px-3 font-bold">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {pengajuan.detail.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center p-4 text-gray-500">
                    Tidak ada data.
                  </td>
                </tr>
              ) : (
                pengajuan.detail.map((p: any, index: number) => (
                  <tr key={p.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-3 py-3 text-center">{index + 1}</td>
                    <td className="px-3 py-3 text-gray-800">{getLabel(p.jenis)}</td>
                    <td className="px-3 py-3">
                      <StatusBadge status={p.status} />
                    </td>
                    <td className="px-3 py-3 text-gray-500">{formatDate(p.tanggal)}</td>
                    <td className="px-3 py-3">
                      <Link
                        to={`/warga/pengajuan-surat/${p.id}`}
                        className="inline-flex items-center justify-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 transition-all hover:bg-gray-50"
                      >
                        <i className="fa-solid fa-eye fa-sm text-gray-500"></i>
                        <span>Lihat</span>
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden divide-y divide-gray-100">
          {pengajuan.detail.length === 0 ? (
            <div className="text-center p-4 text-gray-500">Tidak ada data.</div>
          ) : (
            pengajuan.detail.map((p: any, index: number) => (
              <div key={p.id} className="bg-white mb-2 rounded-lg shadow">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 px-4 py-3 flex justify-between items-start gap-3">

                  <div className="flex items-center gap-3 min-w-0">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-md font-semibold text-sm">
                      {index + 1}
                    </span>
                    <div className="break-words">
                      <h3 className="font-bold text-base text-indigo-800">{getLabel(p.jenis)}</h3>
                      <p className="text-xs text-gray-500">{formatDate(p.tanggal)}</p>
                    </div>
                  </div>
                  <StatusBadge status={p.status} />
                </div>
                <div className="p-4">
                  <Link
                    to={`/warga/pengajuan-surat/${p.id}`}
                    className="inline-flex items-center justify-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 transition-all hover:bg-gray-50"
                  >
                    <i className="fa-solid fa-eye fa-sm text-gray-500"></i>
                    <span>Lihat</span>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default DashboardWarga;