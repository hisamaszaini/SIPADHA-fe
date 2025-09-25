import type { Job } from "../../types/importExport.types";

interface ImportTableProps {
  history: Job[] | undefined;
  isLoading: boolean;
  setActiveJobId: (id: string) => void;
}

const statusStyles: Record<string, string> = {
  completed: "bg-green-100 text-green-800",
  failed: "bg-red-100 text-red-800",
  processing: "bg-blue-100 text-blue-800",
  queued: "bg-gray-100 text-gray-800",
};

export default function ImportTable({ history, isLoading, setActiveJobId }: ImportTableProps) {
  const formatTanggal = (timestamp: number) => {
    return new Date(timestamp).toLocaleString("id-ID", {
      day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit",
    });
  };

  const CardSkeleton = () => (
    <div className="p-4 border-b border-gray-200 animate-pulse">
      <div className="flex justify-between items-center mb-3">
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="h-5 bg-gray-200 rounded-full w-20"></div>
      </div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
      <div className="h-9 bg-gray-200 rounded-md w-28 ml-auto"></div>
    </div>
  );

  return (
    <div className="lg:col-span-2 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 p-4 sm:p-6 border-b border-gray-200">
        Riwayat Import Terakhir
      </h2>

      <div className="hidden md:block">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-gray-900">
            <thead className="bg-gray-50">
              <tr className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                <th className="px-4 py-3 text-center">No.</th>
                <th className="px-4 py-3">Job ID</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3">Tanggal</th>
                <th className="px-4 py-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {isLoading && [...Array(3)].map((_, i) => (
                <tr key={i} className="animate-pulse">
                  {[...Array(5)].map((_, j) => (
                    <td key={j} className="p-4"><div className="h-4 bg-gray-200 rounded"></div></td>
                  ))}
                </tr>
              ))}
              {!isLoading && history?.length === 0 && (
                <tr><td colSpan={5} className="text-center p-6 text-gray-500">Belum ada riwayat.</td></tr>
              )}
              {!isLoading && history?.map((job, index) => (
                <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 text-center font-medium text-gray-500">{index + 1}</td>
                  <td className="p-4 font-mono text-gray-700">{job.id}</td>
                  <td className="p-4 text-center">
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full capitalize ${statusStyles[job.state]}`}>
                      {job.state}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">{formatTanggal(job.timestamp!)}</td>
                  <td className="p-4 text-right">
                    <button onClick={() => setActiveJobId(job.id)} className="inline-flex items-center justify-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 transition-all hover:bg-gray-50">
                      <i className="fa-solid fa-eye fa-sm text-gray-500"></i>
                      <span>Detail</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="md:hidden">
        {isLoading && [...Array(3)].map((_, i) => <CardSkeleton key={i} />)}
        {!isLoading && history?.length === 0 && (
          <p className="text-center p-6 text-gray-500">Belum ada riwayat.</p>
        )}
        <div className="divide-y divide-gray-200">
          {!isLoading && history?.map((job) => (
            <div key={job.id} className="p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs font-mono text-gray-500">JOB ID: {job.id}</p>
                <span className={`px-2.5 py-1 text-xs font-semibold rounded-full capitalize ${statusStyles[job.state]}`}>
                  {job.state}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{formatTanggal(job.timestamp!)}</p>
              <div className="flex justify-end">
                <button onClick={() => setActiveJobId(job.id)} className="inline-flex items-center justify-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 transition-all hover:bg-gray-50">
                  <i className="fa-solid fa-eye fa-sm text-gray-500"></i>
                  <span>Lihat Detail</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}