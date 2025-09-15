import { useState, useEffect, useCallback } from 'react';
import kartuKeluargaService from '../services/kartuKeluargaService';
import type { KartuKeluarga, KartuKeluargaQueryParams, FindAllKartuKeluargaResponse, KartuKeluargaSortableKeys } from '../types/kartuKeluarga.types';
import type { PaginationMeta } from '../types/api.types';

export const useKartuKeluargaData = () => {
    const [kkList, setKkList] = useState<FindAllKartuKeluargaResponse[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [paginationMeta, setPaginationMeta] = useState<PaginationMeta | null>(null);
    const [queryParams, setQueryParams] = useState<KartuKeluargaQueryParams>({ page: 1, limit: 10, sortBy: 'id', sortOrder: 'desc' });

    const fetchKkList = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await kartuKeluargaService.findAll(queryParams);
            setKkList(response.data);
            setPaginationMeta(response.meta || null);
        } catch (error) {
            console.error("Gagal memuat daftar kartu keluarga:", error);
        } finally {
            setIsLoading(false);
        }
    }, [queryParams]);

    useEffect(() => {
        fetchKkList();
    }, [fetchKkList]);

    const handleFilterChange = useCallback((name: keyof KartuKeluargaQueryParams, value: string | number | undefined) => {
        setQueryParams(prev => {
            const newParams: KartuKeluargaQueryParams = { ...prev, page: 1, [name]: value };
            if (name === 'dukuhId') {
                delete (newParams as any).rwId;
                delete (newParams as any).rtId;
            } else if (name === 'rwId') {
                delete (newParams as any).rtId;
            }
            return newParams;
        });
    }, []);

    const handlePageChange = useCallback((newPage: number) => {
        setQueryParams(prev => ({ ...prev, page: newPage }));
    }, []);

    const findOneKk = useCallback(async (id: number) => {
        return await kartuKeluargaService.findOne(id);
    }, []);

    const saveKk = useCallback(async (formData: any, id: number | null) => {
        if (id) {
            await kartuKeluargaService.update(id, formData);
            await fetchKkList();
        } else {
            await kartuKeluargaService.createWithPenduduk(formData);
            setQueryParams(prev => ({ ...prev, page: 1 }));
        }
    }, [fetchKkList]);

    const deleteKk = useCallback(async (id: number) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus Kartu Keluarga ini? Seluruh anggota di dalamnya akan ikut terhapus.')) {
            await kartuKeluargaService.remove(id);
            setQueryParams(prev => ({ ...prev, page: 1 }));
        }
    }, []);

    const handleSort = (sortKey: KartuKeluargaSortableKeys) => {
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
        kkList,
        isLoading,
        paginationMeta,
        queryParams,
        handleFilterChange,
        handlePageChange,
        findOneKk,
        saveKk,
        deleteKk,
        handleSort
    };
};