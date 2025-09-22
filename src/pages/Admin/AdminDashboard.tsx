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
import { jenisSuratOptions, statusSuratOptions } from "../../constant/suratOption"
import { useNavigate } from "react-router-dom"

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const {
    data: dashboardData,
    isLoading: isLoadingDashboard,
    isError: isErrorDashboard,
  } = useDashboardData()

  const doughnutRef = useRef<HTMLCanvasElement | null>(null)
  const barRef = useRef<HTMLCanvasElement | null>(null)

  const doughnutChartRef = useRef<Chart<any> | null>(null);
  const barChartRef = useRef<Chart<any> | null>(null);


  const getStatusLabel = (value: string): string => {
    return statusSuratOptions.find(opt => opt.value === value)?.label ?? value
  }

  const getJenisSuratLabel = (value: string): string => {
    return jenisSuratOptions.find(opt => opt.value === value)?.label ?? value
  }

  useEffect(() => {
    if (!dashboardData) return

    // Distribusi Status
    const distribusiStatus = dashboardData.data.pengajuan.distribusiStatus
    const statusLabels = Object.keys(distribusiStatus).map(getStatusLabel)
    const statusValues = Object.values(distribusiStatus)

    // Distribusi Jenis
    const distribusiJenis = dashboardData.data.pengajuan.distribusiJenis
    const jenisLabels = Object.keys(distribusiJenis).map(getJenisSuratLabel)
    const jenisValues = Object.values(distribusiJenis)

    // destroy chart lama biar nggak dobel render
    if (doughnutChartRef.current) doughnutChartRef.current.destroy()
    if (barChartRef.current) barChartRef.current.destroy()

    // Doughnut Chart (Status)
    if (doughnutRef.current) {
      doughnutChartRef.current = new Chart(doughnutRef.current, {
        type: "doughnut",
        data: {
          labels: statusLabels,
          datasets: [
            {
              data: statusValues,
              backgroundColor: ["#f59e0b", "#3b82f6", "#10b981", "#ef4444"],
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
          // cutout: "70%",
        },
      })
    }

    // Bar Chart (Jenis Surat)
    if (barRef.current) {
      barChartRef.current = new Chart(barRef.current, {
        type: "bar",
        data: {
          labels: jenisLabels,
          datasets: [
            {
              label: "Jumlah Pengajuan",
              data: jenisValues,
              backgroundColor: [
                "#10b981",
                "#3b82f6",
                "#8b5cf6",
                "#f59e0b",
                "#ef4444",
                "#6366f1",
              ],
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
      })
    }
  }, [dashboardData])

  if (isLoadingDashboard) return <p>Loading...</p>
  if (isErrorDashboard) return <p>Error loading dashboard data.</p>

  const hariIni = dashboardData?.data.pengajuan?.perbandingan.hariIni ?? 0;
  const kemarin = dashboardData?.data.pengajuan?.perbandingan.kemarin ?? 0;

  const selisih = hariIni - kemarin;
  const trend = kemarin > 0 ? ((hariIni - kemarin) / kemarin) * 100 : null;

  const selesai = dashboardData?.data.pengajuan.distribusiStatus.SELESAI ?? 0;
  const pending = dashboardData?.data.pengajuan.distribusiStatus.PENDING ?? 0;
  const diproses = dashboardData?.data.pengajuan.distribusiStatus.DIPROSES ?? 0;

  return (
    <>
      {/* Stats Grid */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Pengajuan Baru"
          value={hariIni.toLocaleString()}
          subtitle={ trend !== null
              ? `${selisih >= 0 ? "Naik" : "Turun"} ${Math.abs(trend).toFixed(1)}% dibanding kemarin`
              : "Belum ada data kemarin" }
          icon={PlusSquare}
          gradientClass="gradient-emerald"
          animationDelay="0s"
        />

        <StatCard
          title="Pengajuan Selesai"
          value={selesai.toLocaleString()}
          subtitle={`${(selesai+pending+diproses).toLocaleString()} Pengajuan / ${(pending+diproses).toLocaleString()} Belum Selesai`}
          icon={RefreshCw}
          gradientClass="gradient-blue"
          animationDelay="0.1s"
        />

        <StatCard
          title="Total Penduduk"
          value={dashboardData?.data.stats.totalPenduduk ?? 0}
          subtitle={`${(dashboardData?.data.penduduk.Laki_laki ?? 0).toLocaleString()} Laki-laki / ${(dashboardData?.data.penduduk.Perempuan ?? 0).toLocaleString()} Perempuan`}
          icon={Users}
          gradientClass="gradient-purple"
          animationDelay="0.2s"
        />

        <StatCard
          title="Kepala Keluarga"
          value={(dashboardData?.data.stats.countKk ?? 0).toLocaleString()}
          icon={Home}
          gradientClass="gradient-orange"
          animationDelay="0.3s"
        />
      </section>

      {/* Chart Section */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-6">
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

      {/* Quick Actions */}
      <section>
        <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-6 shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Aksi Cepat</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6">
            <ButtonCard
              label="Buat Surat"
              icon={<PlusIcon className="w-8 h-8 mb-2" />}
              variant="emerald"
              onClick={() => navigate('/admin/layanan-surat/pengajuan-masuk')}
            />
            <ButtonCard
              label="Validasi"
              icon={<CheckIcon className="w-8 h-8 mb-2" />}
              variant="blue"
            />
            <ButtonCard
              label="Tambah Penduduk"
              icon={<UserPlusIcon className="w-8 h-8 mb-2" />}
              variant="purple"
              onClick={() => navigate('/admin/data-master/penduduk')}
            />
            <ButtonCard
              label="Tambah Kartu Keluarga"
              icon={<FileText className="w-8 h-8 mb-2" />}
              variant="orange"
              onClick={() => navigate('/admin/data-master/kartukeluarga')}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default AdminDashboard
