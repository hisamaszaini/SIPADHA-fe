import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
// Layout
import MainLayout from './components/MainLayout';
// Components & Pages
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import PengurusDashboard from './pages/PengurusDashboard';
import WargaDashboard from './pages/WargaDashboard';
import Profile from './pages/Profile';
import AdminDukuh from './pages/AdminWilayah';
import AdminKartuKeluarga from './pages/AdminKartuKeluarga';
import AdminPenduduk from './pages/AdminPenduduk';
import { Toaster } from 'sonner';
import AdminJenisSurat from './pages/AdminJenisSurat';
import RegisterPage from './pages/Register';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public */}
          <Route path="/login" element={<Login />} />
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
            {/* Admin */}
            <Route
              element={
                <ProtectedRoute allowedRoles={['ADMIN']}>
                  <Outlet />
                </ProtectedRoute>
              }
            >
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/data-master/wilayah" element={<AdminDukuh />} />
              <Route path="/admin/data-master/kartukeluarga" element={<AdminKartuKeluarga />} />
              <Route path="/admin/data-master/penduduk" element={<AdminPenduduk />} />
              <Route path="/admin/layanan-surat/jenis-surat" element={<AdminJenisSurat />} />
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
                <ProtectedRoute allowedRoles={['WARGA', 'PENGURUS', 'ADMIN']}>
                  <Outlet />
                </ProtectedRoute>
              }
            >
              <Route path="/warga/*" element={<WargaDashboard />} />
            </Route>

            {/* Profile */}
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* Fallback */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
