import type { NavigationItem } from "../types/navigation.types";
import {
  Home,
  FileText,
  Inbox,
  File,
  CheckCircle,
  Database,
  Users,
  Map,
  User,
} from "lucide-react";
import type { UserRole } from "../types/user.types";

export const menuConfig: Record<UserRole, NavigationItem[]> = {
  ADMIN: [
    { label: 'Dashboard', path: '/admin/dashboard', icon: Home },
    {
      label: 'Layanan Surat',
      icon: FileText,
      notification: 3,
      children: [
        { label: 'Pengajuan Masuk', path: '/admin/layanan-surat/pengajuan-masuk', icon: Inbox },
        { label: 'Jenis Surat', path: '/admin/layanan-surat/jenis-surat', icon: File },
        { label: 'Validasi Dokumen', path: '/admin/layanan-surat/validasi-dokumen', icon: CheckCircle },
      ],
    },
    {
      label: 'Data Master',
      icon: Database,
      children: [
        { label: 'Data Wilayah', path: '/admin/data-master/wilayah', icon: Map },
        { label: 'Data Keluarga', path: '/admin/data-master/kartukeluarga', icon: Home },
        { label: 'Data Penduduk', path: '/admin/data-master/penduduk', icon: Users },
      ],
    },
  ],
  WARGA: [
    { label: 'Dashboard', path: '/warga/dashboard', icon: Home },
    { label: 'Pengajuan Surat', path: '/warga/pengajuan-surat', icon: FileText },
    { label: 'Profil Saya', path: '/warga/profile', icon: User },
  ],
  PENGURUS: [
    { label: 'Dashboard', path: '/warga/dashboard', icon: Home },
  ],
};
