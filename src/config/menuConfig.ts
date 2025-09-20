import type { NavigationItem } from "../types/navigation.types";
import {
  Home,
  FileText,
  Inbox,
  File,
  Database,
  Users,
  Map,
  User,
  User2,
  LogOut,
  Settings,
} from "lucide-react";
import type { UserRole } from "../types/user.types";

export const menuConfig: Record<UserRole, NavigationItem[]> = {
  ADMIN: [
    { label: 'Dashboard', path: '/admin/dashboard', icon: Home },
    {
      label: 'Data Master',
      icon: Database,
      children: [
        { label: 'Data User', path: '/admin/data-master/users', icon: User2 },
        { label: 'Data Wilayah', path: '/admin/data-master/wilayah', icon: Map },
        { label: 'Data Keluarga', path: '/admin/data-master/kartukeluarga', icon: Home },
        { label: 'Data Penduduk', path: '/admin/data-master/penduduk', icon: Users },
      ],
    },
    {
      label: 'Layanan Surat',
      icon: FileText,
      notification: 3,
      children: [
        { label: 'Pengajuan Masuk', path: '/admin/layanan-surat/pengajuan-masuk', icon: Inbox },
        { label: 'Jenis Surat', path: '/admin/layanan-surat/jenis-surat', icon: File },
      ],
    },
    { label: 'Pengaturan Administrasi', path: '/admin/setting', icon: Settings },
    { label: 'Pengaturan Akun', path: '/profile', icon: User },
    { label: 'Logout', icon: LogOut, isLogout: true },
  ],
  WARGA: [
    { label: 'Dashboard', path: '/warga/dashboard', icon: Home },
    { label: 'Pengajuan Surat', path: '/warga/pengajuan-surat', icon: FileText },
    { label: 'Pengaturan Akun', path: '/profile', icon: User },
    { label: 'Logout', icon: LogOut, isLogout: true },
  ],
  PENGURUS: [
    { label: 'Dashboard', path: '/warga/dashboard', icon: Home },
  ],
};
