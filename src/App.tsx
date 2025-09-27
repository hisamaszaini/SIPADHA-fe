import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
// Layout
import MainLayout from './components/MainLayout';
// Components & Pages
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import PengurusDashboard from './pages/PengurusDashboard';
import WargaDashboard from './pages/WargaDashboard';
import ProfilePage from './pages/Profile';
import AdminDukuh from './pages/Admin/AdminWilayah';
import AdminKartuKeluarga from './pages/Admin/AdminKartuKeluarga';
import AdminPenduduk from './pages/Admin/AdminPenduduk';
import { Toaster } from 'sonner';
import AdminJenisSurat from './pages/Admin/AdminJenisSurat';
import RegisterPage from './pages/Register';
import AdminUsers from './pages/Admin/AdminUsers';
import { AdminPengajuanSuratPage } from './pages/Admin/AdminPengajuanSurat';
import { DetailPengajuanSuratPage } from './pages/DetailPengajuanSuratPage';
import { WargaPengajuanSuratPage } from './pages/Warga/WargaPengajuanSurat';
import AdminSetting from './pages/Admin/AdminSetting';
import AdminImportExportPage from './pages/Admin/AdminImportExport';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public */}
          <Route path='/' element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected with layout */}
          <Route
            element={
              <ProtectedRoute>
                <Toaster richColors position="top-right" />
                <MainLayout />
              </ProtectedRoute>
            }
          >
            {/* Profile */}
            <Route path="/profile" element={<ProfilePage />} />

            {/* Admin */}
            <Route
              element={
                <ProtectedRoute allowedRoles={['ADMIN']}>
                  <Outlet />
                </ProtectedRoute>
              }
            >
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/setting" element={<AdminSetting />} />
              <Route path="/admin/data-master/users" element={<AdminUsers />} />
              <Route path="/admin/data-master/wilayah" element={<AdminDukuh />} />
              <Route path="/admin/data-master/kartukeluarga" element={<AdminKartuKeluarga />} />
              <Route path="/admin/data-master/penduduk" element={<AdminPenduduk />} />
              <Route path="/admin/layanan-surat/jenis-surat" element={<AdminJenisSurat />} />
              <Route path="/admin/layanan-surat/pengajuan-masuk" element={<AdminPengajuanSuratPage />} />
              <Route path="/admin/pengajuan-surat/:id" element={<DetailPengajuanSuratPage />} />
              <Route path="/admin/import-export" element={<AdminImportExportPage />} />
            </Route>

            {/* Pengurus */}
            <Route
              element={
                <ProtectedRoute allowedRoles={['PENGURUS', 'ADMIN']}>
                  <Outlet />
                </ProtectedRoute>
              }
            >
              <Route path="/pengurus/*" element={<PengurusDashboard />} />
            </Route>

            {/* Warga */}
            <Route
              element={
                <ProtectedRoute allowedRoles={['WARGA']}>
                  <Outlet />
                </ProtectedRoute>
              }
            >
              <Route path="/warga/pengajuan-surat" element={<WargaPengajuanSuratPage />} />
              <Route path="/warga/*" element={<WargaDashboard />} />
            </Route>
          </Route>

          {/* Fallback */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
