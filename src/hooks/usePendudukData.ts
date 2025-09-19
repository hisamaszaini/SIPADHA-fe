import { useState, useEffect, useCallback } from 'react';
import pendudukService from '../services/pendudukService';
import type { FindAllPendudukResponse, PendudukQueryParams, PendudukSortableKeys, PendudukDto } from '../types/penduduk.types';
import type { PaginationMeta } from '../types/api.types';

export const usePendudukData = () => {
    const [pendudukList, setPendudukList] = useState<FindAllPendudukResponse[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [paginationMeta, setPaginationMeta] = useState<PaginationMeta | null>(null);
    const [queryParams, setQueryParams] = useState<PendudukQueryParams>({ page: 1, limit: 10, sortBy: 'id', sortOrder: 'desc' });

    const fetchPendudukList = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await pendudukService.findAll(queryParams);
            setPendudukList(response.data);
            setPaginationMeta(response.meta || null);
        } catch (error) { 
            console.error("Gagal memuat daftar penduduk:", error);
        }
        finally { setIsLoading(false); }
    }, [queryParams]);

    useEffect(() => {
        fetchPendudukList();
    }, [fetchPendudukList]);

    const handleFilterChange = useCallback((name: keyof PendudukQueryParams, value: string | number | undefined) => {
        setQueryParams(prev => {
            const newParams: PendudukQueryParams = { ...prev, page: 1, [name]: value };
            if (name === 'dukuhId') {
                delete (newParams as any).rwId;
                delete (newParams as any).rtId;
            } else if (name === 'rwId') {
                delete (newParams as any).rtId;
            }
            return newParams;
        });
    }, []);

    const handleSort = useCallback((sortKey: PendudukSortableKeys) => {
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

    const findOnePenduduk = useCallback(async (id: number) => {
        return await pendudukService.findOne(id);
    }, []);

    const savePenduduk = useCallback(async (formData: PendudukDto, id: number | null) => {
        if (id) {
            await pendudukService.update(id, formData);
            await fetchPendudukList();
        } else {
            await pendudukService.createPenduduk(formData);
            setQueryParams(prev => ({ ...prev, page: 1 }));
        }
    }, [fetchPendudukList]);

    const deletePenduduk = useCallback(async (id: number) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus data penduduk ini?')) {
            await pendudukService.remove(id);
            setQueryParams(prev => ({ ...prev, page: 1 }));
        }
    }, []);
    return { pendudukList, isLoading, paginationMeta, queryParams, handleFilterChange, handleSort, handlePageChange, findOnePenduduk, savePenduduk, deletePenduduk };
};