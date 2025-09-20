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
    // Shared component for empty/loading state to avoid repetition
    const renderState = (message: string, colSpan: number) => {
        // For mobile view
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            return <div className="text-center p-8 text-gray-500">{message}</div>;
        }
        // For desktop table view
        return (
            <tr>
                <td colSpan={colSpan} className="text-center p-8 text-gray-500">
                    {message}
                </td>
            </tr>
        );
    };

    return (
        <>
            {/* Desktop Table View (hidden on small screens) */}
            <div className="overflow-x-auto hidden md:block">
                <table className="min-w-full text-left text-sm text-gray-900">
                    <thead className="bg-gray-50">
                        <tr className="text-xs font-medium uppercase tracking-wider text-gray-500">
                            <th scope="col" className="px-6 py-3">No.</th>
                            <SortableHeader columnKey="username" onSort={onSort} queryParams={queryParams}>Username</SortableHeader>
                            <SortableHeader columnKey="nama" onSort={onSort} queryParams={queryParams}>Nama Penduduk</SortableHeader>
                            <SortableHeader columnKey="role" onSort={onSort} queryParams={queryParams}>Role</SortableHeader>
                            <SortableHeader columnKey="createdAt" onSort={onSort} queryParams={queryParams}>Tanggal Dibuat</SortableHeader>
                            <th className="px-6 py-3 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {isLoading
                            ? renderState('Memuat data...', 6)
                            : userList.length === 0
                            ? renderState('Tidak ada data pengguna.', 6)
                            : userList.map((user, index) => (
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
                                            <button onClick={() => onEdit(user)} title="Edit Pengguna" className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors">
                                                <FileEdit className="w-5 h-5" />
                                            </button>
                                            <button onClick={() => onDelete(user.id)} title="Hapus Pengguna" className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View (visible only on small screens) -- UPDATED SECTION */}
            <div className="md:hidden">
                {isLoading
                    ? renderState('Memuat data...', 6)
                    : userList.length === 0
                    ? renderState('Tidak ada data pengguna.', 6)
                    : (
                        <div className="space-y-4">
                            {userList.map((user, index) => (
                                <div key={user.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                                    {/* Card Header */}
                                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-9 h-9 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                                                    {index + 1}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-800">{user.username}</p>
                                                    <p className="text-xs text-gray-500">
                                                        {user.penduduk?.nama || <span className="italic">Belum terhubung</span>}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 flex-shrink-0">
                                                <button onClick={() => onEdit(user)} title="Edit Pengguna" className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors">
                                                    <FileEdit className="w-4 h-4" />
                                                </button>
                                                <button onClick={() => onDelete(user.id)} title="Hapus Pengguna" className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-4 space-y-3 text-sm">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-500">Role</span>
                                            <span className={`px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${roleBadge[user.role] || 'bg-gray-100 text-gray-800'}`}>
                                                {user.role}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-500">Tanggal Dibuat</span>
                                            <span className="font-medium text-gray-700">{formatTanggal(user.createdAt)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        </>
    );
};

export default UserTable;