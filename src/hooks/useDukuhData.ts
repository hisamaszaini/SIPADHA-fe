import { useState, useEffect, useCallback } from 'react';
import dukuhService from '../services/dukuhService';
import { useWilayahContext } from '../contexts/wilayahContext';
import type { CreateDukuhDto, Dukuh, DukuhQueryParams, DukuhSortableKeys } from '../types/dukuh.types';
import type { PaginationMeta } from '../types/api.types';
import { toast } from 'sonner';

export const useDukuhData = () => {
    const { refreshWilayahOptions } = useWilayahContext();

    const [dukuhList, setDukuhList] = useState<Dukuh[]>([]);
    const [paginationMeta, setPaginationMeta] = useState<PaginationMeta | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState('');

    const [queryParams, setQueryParams] = useState<DukuhQueryParams>({
        page: 1,
        limit: 10,
        sortBy: 'id',
        sortOrder: 'desc',
        search: '',
    });

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await dukuhService.findAll(queryParams);
            setDukuhList(response.data);
            setPaginationMeta(response.meta || null);
        } catch (err) {
            console.error("Gagal memuat data Dukuh:", err);
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

    const saveDukuh = useCallback(async (formData: CreateDukuhDto, id: number | null) => {
        try {
            if (id) {
                await dukuhService.update(id, formData);
                await fetchData();
            } else {
                await dukuhService.create(formData);
                setQueryParams(prev => ({ ...prev, page: 1 }));
            }
            await refreshWilayahOptions();
        } catch (err) {
            console.error('Gagal menyimpan data Dukuh:', err);
            throw err;
        }
    }, [fetchData, refreshWilayahOptions]);

    const deleteDukuh = useCallback(async (id: number) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
            try {
                await dukuhService.remove(id);
                setQueryParams(prev => ({ ...prev, page: 1 }));
                toast.success('Dukuh berhasil dihapus');
                await refreshWilayahOptions();
            } catch (err: any) {
                err?.response?.data?.message || err.message || 'Gagal menghapus data Dukuh'
                console.error('Gagal menghapus data Dukuh:', err);
            }
        }
    }, [refreshWilayahOptions]);

    const handlePageChange = useCallback((newPage: number) => {
        setQueryParams(prev => ({ ...prev, page: newPage }));
    }, []);

    const handleSort = useCallback((sortKey: DukuhSortableKeys) => {
        setQueryParams(prev => ({
            ...prev,
            page: 1,
            sortBy: sortKey,
            sortOrder: prev.sortBy === sortKey && prev.sortOrder === 'asc' ? 'desc' : 'asc',
        }));
    }, []);

    return {
        dukuhList,
        paginationMeta,
        isLoading,
        queryParams,
        searchTerm,
        setSearchTerm,
        saveDukuh,
        deleteDukuh,
        handlePageChange,
        handleSort,
    };
};