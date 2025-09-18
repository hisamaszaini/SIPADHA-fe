import React, { useState } from 'react';
import { useUserData } from '../../hooks/useUserData';
import UserFilter from '../../components/user/UserFilter';
import UserTable from '../../components/user/UserTable';
import type { User, UserDto } from '../../types/user.types';
import UserFormModal from '../../components/user/UserFormModal';
import { toast } from 'sonner';
import { Button } from '../../components/ui/Button';
import { Pagination } from '../../components/ui/Pagination';

const AdminUsers: React.FC = () => {
    const {
        userList, isLoading, paginationMeta, queryParams,
        searchTerm, setSearchTerm,
        handleSort, handlePageChange, handleFilterChange,
        findOneUser, saveUser, deleteUser
    } = useUserData();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<User | null>(null);

    const handleOpenModal = async (userToEdit: User | null = null) => {
        if (userToEdit) {
            try {
                const response = await findOneUser(userToEdit.id);
                setEditingUser(response.data);
            } catch (error) {
                console.error("Gagal mengambil detail user:", error);
                return;
            }
        } else {
            setEditingUser(null);
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingUser(null);
    };

    const handleSave = async (formData: UserDto, id: number | null) => {
        try {
            await saveUser(formData, id);
            toast.success(`Berhasil ${editingUser ? 'memperbarui' : 'menambahkan'} pengguna`)
            handleCloseModal();
        } catch (error) {
            console.error("Gagal menyimpan data user:", error);
            toast.error(`Gagal ${editingUser ? 'memperbarui' : 'menambahkan'} pengguna`)
            throw error;
        }
    };

    return (
        <div className="w-full mx-auto bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">
            <header className="p-4 md:p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-base md:text-xl font-bold text-gray-800">Manajemen Pengguna</h2>
                <Button variant="primary" size="mid" icon="fas fa-plus" onClick={() => setIsModalOpen(true)}
                >Tambah Pengguna</Button>
            </header>

            <UserFilter
                filters={queryParams}
                onFilterChange={handleFilterChange}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            <div className="flex-grow overflow-y-auto">
                <UserTable
                    userList={userList}
                    isLoading={isLoading}
                    onSort={handleSort}
                    queryParams={queryParams}
                    onEdit={handleOpenModal}
                    onDelete={deleteUser}
                />
            </div>

            {paginationMeta && <Pagination currentItemCount={userList.length}  meta={paginationMeta} onPageChange={handlePageChange} />}

            {isModalOpen &&
                <UserFormModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onSave={handleSave}
                    editingUser={editingUser}
                />
            }
        </div>
    );
};

export default AdminUsers;