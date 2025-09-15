import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PengurusDashboard: React.FC = () => {
  const { user } = useAuth();

  // Statistik contoh untuk dashboard pengurus
  const stats = [
    { label: 'Warga Terdaftar', value: '1,245', change: '+5%', changeType: 'positive' },
    { label: 'Kegiatan Bulan Ini', value: '8', change: '+2', changeType: 'positive' },
    { label: 'Permohonan Pending', value: '12', change: '-3', changeType: 'negative' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Kerja Bakti Lingkungan', date: '15 Sept 2023', location: 'Lapangan Desa' },
    { id: 2, title: 'Rapat RT/RW', date: '20 Sept 2023', location: 'Balai Desa' },
    { id: 3, title: 'Posyandu', date: '25 Sept 2023', location: 'Posyandu Melati' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Pengurus</h1>
        <p className="text-gray-600">Selamat datang, {user?.username}. Anda login sebagai {user?.role}.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`flex items-center ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                <span className="text-sm font-medium">{stat.change}</span>
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
              to="/pengurus/warga"
              className="bg-blue-100 hover:bg-blue-200 text-blue-800 py-3 px-4 rounded-lg text-center transition-colors"
            >
              Data Warga
            </Link>
            <Link
              to="/pengurus/kegiatan"
              className="bg-green-100 hover:bg-green-200 text-green-800 py-3 px-4 rounded-lg text-center transition-colors"
            >
              Kelola Kegiatan
            </Link>
            <Link
              to="/pengurus/permohonan"
              className="bg-purple-100 hover:bg-purple-200 text-purple-800 py-3 px-4 rounded-lg text-center transition-colors"
            >
              Permohonan
            </Link>
            <Link
              to="/pengurus/laporan"
              className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 py-3 px-4 rounded-lg text-center transition-colors"
            >
              Buat Laporan
            </Link>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Kegiatan Mendatang</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                <p className="text-gray-800 font-medium">{event.title}</p>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>{event.date}</span>
                  <span>{event.location}</span>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/pengurus/kegiatan"
            className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Lihat semua kegiatan →
          </Link>
        </div>
      </div>

      {/* Announcements */}
      <div className="bg-white rounded-lg shadow p-6 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Pengumuman</h2>
          <Link
            to="/pengurus/pengumuman"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Kelola Pengumuman
          </Link>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Penting:</strong> Segera lakukan verifikasi data warga untuk sensus penduduk bulan depan. Batas waktu: 30 September 2023.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PengurusDashboard;