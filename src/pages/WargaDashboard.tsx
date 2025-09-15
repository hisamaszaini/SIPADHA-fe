import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const WargaDashboard: React.FC = () => {
  const { user } = useAuth();

  // Statistik contoh untuk dashboard warga
  const stats = [
    { label: 'Iuran Bulan Ini', value: 'Rp 25.000', status: 'Lunas' },
    { label: 'Kegiatan Diikuti', value: '3', status: 'Aktif' },
    { label: 'Permohonan Diajukan', value: '2', status: 'Diproses' },
  ];

  const announcements = [
    { id: 1, title: 'Kerja Bakti Lingkungan', date: '15 Sept 2023', content: 'Akan diadakan kerja bakti membersihkan lingkungan pada hari Jumat pukul 08.00 WIB.' },
    { id: 2, title: 'Pembayaran Iuran', date: '10 Sept 2023', content: 'Tolong segera melakukan pembayaran iuran lingkungan sebelum tanggal 20 September 2023.' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Warga</h1>
        <p className="text-gray-600">Selamat datang, {user?.username}. Anda login sebagai {user?.role}.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <div className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-medium ${
                stat.status === 'Lunas' ? 'bg-green-100 text-green-800' :
                stat.status === 'Aktif' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {stat.status}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Aksi Cepat</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/warga/profile"
              className="bg-blue-100 hover:bg-blue-200 text-blue-800 py-3 px-4 rounded-lg text-center transition-colors"
            >
              Profil Saya
            </Link>
            <Link
              to="/warga/iuran"
              className="bg-green-100 hover:bg-green-200 text-green-800 py-3 px-4 rounded-lg text-center transition-colors"
            >
              Bayar Iuran
            </Link>
            <Link
              to="/warga/permohonan"
              className="bg-purple-100 hover:bg-purple-200 text-purple-800 py-3 px-4 rounded-lg text-center transition-colors"
            >
              Ajukan Permohonan
            </Link>
            <Link
              to="/warga/kegiatan"
              className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 py-3 px-4 rounded-lg text-center transition-colors"
            >
              Ikut Kegiatan
            </Link>
          </div>
        </div>

        {/* Announcements */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Pengumuman Terbaru</h2>
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium text-gray-800">{announcement.title}</h3>
                  <span className="text-sm text-gray-500">{announcement.date}</span>
                </div>
                <p className="text-gray-600 text-sm">{announcement.content}</p>
              </div>
            ))}
          </div>
          <Link
            to="/warga/pengumuman"
            className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Lihat semua pengumuman →
          </Link>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-lg shadow p-6 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Kegiatan Mendatang</h2>
          <Link
            to="/warga/kegiatan"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Lihat Semua
          </Link>
        </div>
        <div className="overflow-hidden">
          <div className="flex items-center py-4 border-b border-gray-100">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-blue-800 font-bold">15</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Kerja Bakti Lingkungan</p>
              <p className="text-sm text-gray-500 truncate">Jumat, 15 Sept 2023 · 08.00 WIB</p>
            </div>
            <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm">
              Ikuti
            </button>
          </div>
          <div className="flex items-center py-4 border-b border-gray-100">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-green-800 font-bold">20</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Rapat Warga</p>
              <p className="text-sm text-gray-500 truncate">Rabu, 20 Sept 2023 · 19.00 WIB</p>
            </div>
            <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm">
              Ikuti
            </button>
          </div>
          <div className="flex items-center py-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-purple-800 font-bold">25</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Posyandu</p>
              <p className="text-sm text-gray-500 truncate">Senin, 25 Sept 2023 · 09.00 WIB</p>
            </div>
            <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm">
              Ikuti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WargaDashboard;