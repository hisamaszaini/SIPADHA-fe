import React from 'react';
import StatCard from '../../components/ui/StatCard';
import { CheckIcon, FileText, Home, PlusIcon, PlusSquare, RefreshCw, UserPlusIcon, Users } from 'lucide-react';
import ButtonCard from '../../components/ui/ButtonCard';

const AdminDashboard: React.FC = () => {
  return (
    <>
      {/* Stats Grid */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Pengajuan Baru"
          value={8}
          subtitle="+2 dari kemarin"
          icon={PlusSquare}
          gradientClass="gradient-emerald"
          animationDelay="0s"
        />

        <StatCard
          title="Dalam Proses"
          value={12}
          subtitle="-3 dari minggu lalu"
          icon={RefreshCw}
          gradientClass="gradient-blue"
          animationDelay="0.1s"
        />

        <StatCard
          title="Total Pengguna"
          value={245}
          subtitle="+15 bulan ini"
          icon={Users}
          gradientClass="gradient-purple"
          animationDelay="0.2s"
        />

        <StatCard
          title="Rumah Terdaftar"
          value={178}
          subtitle="+8 minggu ini"
          icon={Home}
          gradientClass="gradient-orange"
          animationDelay="0.3s"
        />
      </section>

      {/* Quick Actions */}
      <section className="">
        <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-6 shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Aksi Cepat</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6">
            <ButtonCard label="Buat Surat" icon={<PlusIcon className="w-8 h-8 mb-2" />} variant="emerald" />
            <ButtonCard label="Validasi" icon={<CheckIcon className="w-8 h-8 mb-2" />} variant="blue" />
            <ButtonCard label="Tambah Warga" icon={<UserPlusIcon className="w-8 h-8 mb-2" />} variant="purple" />
            <ButtonCard label="Laporan" icon={<FileText className="w-8 h-8 mb-2" />} variant="orange" />
          </div>
        </div>
      </section>

      {/* Surat Terbaru */}
      <section className="rounded-2xl bg-white/95 backdrop-blur-sm shadow-xl overflow-hidden">
        <div className="border-b border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h3 className="text-xl font-bold text-gray-800">Pengajuan Surat Terbaru</h3>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors text-sm font-medium">
                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">Lihat Semua</button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Pemohon</th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Jenis Surat</th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Tanggal</th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Status</th>
                <th className="px-6 py-4 text-right text-xs font-medium uppercase tracking-wider text-gray-500">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img className="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=1" alt="" />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Budi Santoso</div>
                      <div className="text-sm text-gray-500">NIK: ...9012</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">SK Usaha</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">9 Sep 2025</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Pending</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">

                  <div className="flex items-center justify-end space-x-2">
                    {/* Tombol Setujui */}
                    <button
                      className="relative group text-emerald-600 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 p-2 rounded-lg transition-all"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className="absolute z-10 -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-xs text-white
                 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto"
                      >
                        Setujui
                      </span>
                    </button>

                    {/* Tombol Lihat Detail */}
                    <button
                      className="relative group text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 p-2 rounded-lg transition-all"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      <span
                        className="absolute z-10 -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-xs text-white
                 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto"
                      >
                        Lihat Detail
                      </span>
                    </button>
                  </div>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;