import { useState, useEffect, useCallback } from 'react';
import { useWilayahContext } from '../contexts/wilayahContext';
import type { CreateRtDto, RtQueryParams, RtSortableKeys, RtWithRelations } from '../types/rt.types';
import type { PaginationMeta } from '../types/api.types';
import rtService from '../services/RtService';
import { toast } from 'sonner';

export const useRtData = () => {
    const { refreshWilayahOptions } = useWilayahContext();

    const [rtList, setRtList] = useState<RtWithRelations[]>([]);
    const [paginationMeta, setPaginationMeta] = useState<PaginationMeta | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState('');
    
    const [queryParams, setQueryParams] = useState<RtQueryParams>({ 
        page: 1, 
        limit: 10, 
        search: '',
        sortBy: 'id',
        sortOrder: 'desc'
    });

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await rtService.findAll(queryParams);
            setRtList(response.data);
            setPaginationMeta(response.meta || null);
        } catch (err) {
            console.error("Gagal memuat data RT:", err);
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

    const saveRt = useCallback(async (formData: CreateRtDto | Partial<CreateRtDto>, id: number | null) => {
        try {
            if (id) {
                await rtService.update(id, formData);
                await fetchData();
            } else {
                await rtService.create(formData as CreateRtDto);
                setQueryParams(prev => ({ ...prev, page: 1 }));
            }
            await refreshWilayahOptions();
        } catch (err) {
            console.error('Gagal menyimpan data RT:', err);
            throw err;
        }
    }, [fetchData, refreshWilayahOptions]);

    const deleteRt = useCallback(async (id: number) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
            try {
                await rtService.remove(id);
                setQueryParams(prev => ({ ...prev, page: 1 }));
                toast.success('RT berhasil dihapus');
                await refreshWilayahOptions();
            } catch (err) {
                toast.error(err instanceof Error ? err.message : 'Gagal menghapus data RT');
                console.error('Gagal menghapus data RT:', err);
            }
        }
    }, [refreshWilayahOptions]);

    const handlePageChange = useCallback((newPage: number) => {
        setQueryParams(prev => ({ ...prev, page: newPage }));
    }, []);

    const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setQueryParams(prev => {
            const newParams: RtQueryParams = {
                ...prev,
                [name]: value ? Number(value) : undefined,
                page: 1
            };
            if (name === 'dukuhId') {
                delete newParams.rwId;
            }
            return newParams;
        });
    }, []);

    const handleSort = useCallback((sortKey: RtSortableKeys) => {
        setQueryParams(prev => ({
            ...prev,
            page: 1,
            sortBy: sortKey,
            sortOrder: prev.sortBy === sortKey && prev.sortOrder === 'asc' ? 'desc' : 'asc',
        }));
    }, []);

    return {
        rtList,
        paginationMeta,
        isLoading,
        searchTerm,
        setSearchTerm,
        queryParams,
        saveRt,
        deleteRt,
        handlePageChange,
        handleFilterChange,
        handleSort
    };
};