import { useState, useEffect, useCallback } from 'react';
import userService from '../services/userService';
import type { UpdateUserDto, User, UserDto, UserQueryParams, UserSortableKeys } from '../types/user.types';
import type { PaginationMeta } from '../types/api.types';

export const useUserData = () => {
    const [userList, setUserList] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [paginationMeta, setPaginationMeta] = useState<PaginationMeta | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [queryParams, setQueryParams] = useState<UserQueryParams>({
        page: 1,
        limit: 10,
        sortBy: 'username',
        sortOrder: 'asc',
        search: ''
    });

    const fetchUsers = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await userService.findAll(queryParams);
            setUserList(response.data);
            setPaginationMeta(response.meta || null);
        } catch (error) {
            console.error("Gagal memuat data pengguna:", error);
        } finally {
            setIsLoading(false);
        }
    }, [queryParams]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setQueryParams(prev => {
                if (prev.search !== searchTerm) {
                    return { ...prev, page: 1, search: searchTerm };
                }
                return prev;
            });
        }, 500);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    const handleSort = useCallback((sortKey: UserSortableKeys) => {
        setQueryParams(prev => ({
            ...prev,
            page: 1,
            sortBy: sortKey,
            sortOrder: prev.sortBy === sortKey && prev.sortOrder === 'asc' ? 'desc' : 'asc',
        }));
    }, []);

    const handlePageChange = useCallback((newPage: number) => {
        setQueryParams(prev => ({ ...prev, page: newPage }));
    }, []);

    const handleFilterChange = useCallback((name: keyof UserQueryParams, value: string | undefined) => {
        setQueryParams(prev => ({ ...prev, page: 1, [name]: value }));
    }, []);

    const findOneUser = useCallback(async (id: number) => {
        return await userService.findOne(id);
    }, []);

    const saveUser = useCallback(async (formData: UserDto, id: number | null) => {
        const { ...payload } = formData;

        if (id) {
            const updatePayload: UpdateUserDto = { ...payload };

            if (!updatePayload.password) {
                delete updatePayload.password;
            }

            await userService.update(id, updatePayload);
            setQueryParams(prev => ({ ...prev }));
        } else {
            await userService.create(payload as UserDto);
            setQueryParams(prev => ({ ...prev, page: 1 }));
        }
    }, []);

    const deleteUser = useCallback(async (id: number) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus pengguna ini?')) {
            await userService.remove(id);
            setQueryParams(prev => ({ ...prev, page: 1 }));
        }
    }, []);
    return {
        userList, isLoading, paginationMeta, queryParams,
        searchTerm, setSearchTerm, findOneUser, saveUser, deleteUser,
        handleSort, handlePageChange, handleFilterChange
    };
};