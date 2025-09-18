import React from 'react';
import type { User, UserQueryParams, UserSortableKeys } from '../../types/user.types';
import { SortableHeader } from '../ui/SortableHeader';
import { formatTanggal } from '../../utils/date';
import { FileEdit, Trash2 } from 'lucide-react';

interface UserTableProps {
    userList: User[];
    isLoading: boolean;
    onSort: (sortKey: UserSortableKeys) => void;
    queryParams: UserQueryParams;
    onEdit: (user: User) => void;
    onDelete: (id: number) => void;
}

const roleBadge: Record<string, string> = {
    ADMIN: 'bg-red-100 text-red-800',
    PENGURUS: 'bg-yellow-100 text-yellow-800',
    WARGA: 'bg-green-100 text-green-800',
};

const UserTable: React.FC<UserTableProps> = ({ userList, isLoading, onSort, queryParams, onEdit, onDelete }) => {
    return (
        <table className="min-w-full text-left text-sm text-gray-900">
            <thead className="bg-gray-50">
                <tr className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
                    <SortableHeader columnKey="username" onSort={onSort} queryParams={queryParams}>Username</SortableHeader>
                    <SortableHeader columnKey="nama" onSort={onSort} queryParams={queryParams}>Nama Penduduk</SortableHeader>
                    <SortableHeader columnKey="role" onSort={onSort} queryParams={queryParams}>Role</SortableHeader>
                    <SortableHeader columnKey="createdAt" onSort={onSort} queryParams={queryParams}>Tanggal Dibuat</SortableHeader>
                    <th className="px-6 py-3 text-right">Aksi</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {isLoading ? (
                    <tr><td colSpan={6} className="text-center p-8 text-gray-500">Memuat data...</td></tr>
                ) : userList.length === 0 ? (
                    <tr><td colSpan={6} className="text-center p-8 text-gray-500">Tidak ada data pengguna.</td></tr>
                ) : (
                    userList.map((user, index) => (
                        <tr key={user.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.username}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.penduduk?.nama || <span className="italic text-gray-400">Belum terhubung</span>}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${roleBadge[user.role] || 'bg-gray-100 text-gray-800'}`}>
                                    {user.role}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {formatTanggal(user.createdAt)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div className="flex justify-end items-center gap-2">
                                    <button
                                        onClick={() => onEdit(user)}
                                        title="Edit RW"
                                        className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors"
                                    >
                                        <FileEdit className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => onDelete(user.id)}
                                        title="Hapus RW"
                                        className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
};

export default UserTable;