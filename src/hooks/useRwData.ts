import { useState, useEffect, useCallback } from 'react';
import { useWilayahContext } from '../contexts/wilayahContext';
import type { CreateRwDto, FindAllRwResponse, RwQueryParams, RwSortableKeys } from '../types/rw.types';
import type { PaginationMeta } from '../types/api.types';
import rwService from '../services/RwService';
import { toast } from 'sonner';

export const useRwData = () => {
    const { refreshWilayahOptions } = useWilayahContext();

    const [rwList, setRwList] = useState<FindAllRwResponse[]>([]);
    const [paginationMeta, setPaginationMeta] = useState<PaginationMeta | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [queryParams, setQueryParams] = useState<RwQueryParams>({
        page: 1,
        limit: 10,
        search: searchTerm,
        sortBy: 'id',
        sortOrder: 'desc'
    });

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await rwService.findAll(queryParams);
            setRwList(response.data);
            setPaginationMeta(response.meta || null);
        } catch (err) {
            console.error("Gagal memuat data RW:", err);
        } finally {
            setIsLoading(false);
        }
    }, [queryParams]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setQueryParams(prev => {
                if (prev.search !== searchTerm) {
                    return { ...prev, search: searchTerm, page: 1 };
                }
                return prev;
            });
        }, 500);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    const saveRw = async (formData: CreateRwDto | Partial<CreateRwDto>, id: number | null) => {
        try {
            if (id) {
                await rwService.update(id, formData);
            } else {
                await rwService.create(formData as CreateRwDto);
            }
            await fetchData();
            await refreshWilayahOptions();
        } catch (err) {
            console.error('Gagal menyimpan data RW:', err);
            throw err;
        }
    };

    const deleteRw = async (id: number) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
            try {
                await rwService.remove(id);
                await fetchData();
                toast.success('RW berhasil dihapus');
                await refreshWilayahOptions();
            } catch (err: any) {
                console.error('Gagal menghapus data RW:', err);
                err?.response?.data?.message || err.message || 'Gagal menghapus data RW'
            }
        }
    };

    const handlePageChange = (newPage: number) => {
        setQueryParams(prev => ({ ...prev, page: newPage }));
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setQueryParams(prev => ({ ...prev, [name]: value ? Number(value) : undefined, page: 1 }));
    };

    const handleSort = (sortKey: RwSortableKeys) => {
        setQueryParams(prev => {
            const isAsc = prev.sortBy === sortKey && prev.sortOrder === 'asc';
            return {
                ...prev,
                page: 1,
                sortBy: sortKey,
                sortOrder: isAsc ? 'desc' : 'asc',
            };
        });
    };

    return {
        rwList,
        paginationMeta,
        isLoading,
        searchTerm,
        setSearchTerm,
        queryParams,
        saveRw,
        deleteRw,
        handlePageChange,
        handleFilterChange,
        handleSort
    };
};