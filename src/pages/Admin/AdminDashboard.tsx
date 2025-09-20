import React, { useEffect, useRef } from "react"
import StatCard from "../../components/ui/StatCard"
import {
  CheckIcon,
  FileText,
  Home,
  PlusIcon,
  PlusSquare,
  RefreshCw,
  UserPlusIcon,
  Users,
} from "lucide-react"
import ButtonCard from "../../components/ui/ButtonCard"
import { useDashboardData } from "../../hooks/useDashboardData"
import Chart from "chart.js/auto"

const AdminDashboard: React.FC = () => {
  const {
    data: dashboardData,
    isLoading: isLoadingDashboard,
    isError: isErrorDashboard,
  } = useDashboardData()

  const doughnutRef = useRef<HTMLCanvasElement | null>(null);
  const barRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!dashboardData) return;

    if (doughnutRef.current) {
      new Chart(doughnutRef.current, {
        type: "doughnut",
        data: {
          labels: ["Selesai", "Diproses", "Pending", "Ditolak"],
          datasets: [
            {
              data: [45, 35, 15, 5],
              backgroundColor: ["#10b981", "#3b82f6", "#f59e0b", "#ef4444"],
              borderWidth: 0,
              hoverOffset: 8,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
              labels: { boxWidth: 12, padding: 20 },
            },
          },
          cutout: "70%",
        },
      });
    }

    if (barRef.current) {
      new Chart(barRef.current, {
        type: "bar",
        data: {
          labels: ["SK Domisili", "SK Usaha", "SK Kematian", "SK Lahir", "SK Nikah"],
          datasets: [
            {
              label: "Jumlah Pengajuan",
              data: [25, 18, 12, 15, 8],
              backgroundColor: ["#10b981", "#3b82f6", "#8b5cf6", "#f59e0b", "#ef4444"],
              borderRadius: 8,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: "y",
          plugins: { legend: { display: false } },
          scales: { x: { beginAtZero: true } },
        },
      });
    }
  }, [dashboardData]);

  if (isLoadingDashboard) return <p>Loading...</p>
  if (isErrorDashboard) return <p>Error loading dashboard data.</p>

  return (
    <>
      {/* Stats Grid */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Pengajuan Baru"
          value={dashboardData?.data.countPengajuan?.length ?? 0}
          subtitle="+2 dari kemarin"
          icon={PlusSquare}
          gradientClass="gradient-emerald"
          animationDelay="0s"
        />

        <StatCard
          title="Dalam Proses"
          value={12} // 👉 nanti ambil dari dashboardData
          subtitle="-3 dari minggu lalu"
          icon={RefreshCw}
          gradientClass="gradient-blue"
          animationDelay="0.1s"
        />

        <StatCard
          title="Total Pengguna"
          value={dashboardData?.data.countUser ?? 0}
          subtitle="+15 bulan ini"
          icon={Users}
          gradientClass="gradient-purple"
          animationDelay="0.2s"
        />

        <StatCard
          title="Rumah Terdaftar"
          value={dashboardData?.data.countKk ?? 0}
          subtitle="+8 minggu ini"
          icon={Home}
          gradientClass="gradient-orange"
          animationDelay="0.3s"
        />
      </section>

      {/* Chart Section */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* <div className="lg:col-span-3 rounded-2xl bg-white/95 backdrop-blur-sm p-6 shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            Statistik Pengajuan Surat
          </h3>
          <div className="h-80">
            <canvas id="lineChart" />
          </div>
        </div> */}
        <div className="lg:col-span-3 rounded-2xl bg-white/95 backdrop-blur-sm p-6 shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            Jenis Surat Terpopuler
          </h3>
          <div className="h-80">
            <canvas ref={barRef} />
          </div>
        </div>
        <div className="lg:col-span-2 rounded-2xl bg-white/95 backdrop-blur-sm p-6 shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            Distribusi Status
          </h3>
          <div className="h-80">
            <canvas ref={doughnutRef} />
          </div>
        </div>
      </section>

      {/* Jenis Surat Populer */}
      {/* <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      </section> */}

      {/* Quick Actions */}
      <section>
        <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-6 shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Aksi Cepat</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6">
            <ButtonCard
              label="Buat Surat"
              icon={<PlusIcon className="w-8 h-8 mb-2" />}
              variant="emerald"
            />
            <ButtonCard
              label="Validasi"
              icon={<CheckIcon className="w-8 h-8 mb-2" />}
              variant="blue"
            />
            <ButtonCard
              label="Tambah Warga"
              icon={<UserPlusIcon className="w-8 h-8 mb-2" />}
              variant="purple"
            />
            <ButtonCard
              label="Laporan"
              icon={<FileText className="w-8 h-8 mb-2" />}
              variant="orange"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default AdminDashboard
