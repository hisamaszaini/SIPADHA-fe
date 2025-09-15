import { useState, useEffect, useCallback } from 'react';
import jenisSuratService from '../services/jenisSuratService';
import type { JenisSurat, JenisSuratQueryParams, JenisSuratSortableKeys, CreateJenisSuratDto, UpdateJenisSuratDto } from '../types/jenisSurat.types';
import type { PaginationMeta } from '../types/api.types';

export const useJenisSuratData = () => {
    const [jenisSuratList, setJenisSuratList] = useState<JenisSurat[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [paginationMeta, setPaginationMeta] = useState<PaginationMeta | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [queryParams, setQueryParams] = useState<JenisSuratQueryParams>({
        page: 1,
        limit: 10,
        sortBy: 'namaSurat',
        sortOrder: 'asc',
    });

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await jenisSuratService.findAll(queryParams);
            setJenisSuratList(response.data);
            setPaginationMeta(response.meta || null);
        } catch (error) {
            console.error("Gagal memuat jenis surat:", error);
        } finally {
            setIsLoading(false);
        }
    }, [queryParams]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setQueryParams(prev => ({ ...prev, page: 1, search: searchTerm }));
        }, 500);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    const handleSort = useCallback((sortKey: JenisSuratSortableKeys) => {
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

    const findOneJenisSurat = useCallback(async (id: number) => {
        return await jenisSuratService.findOne(id);
    }, []);

    const saveJenisSurat = useCallback(async (
        formData: CreateJenisSuratDto | UpdateJenisSuratDto,
        id: number | null,
        file?: File
    ) => {
        try {
            if (id) {
                // Mode edit
                await jenisSuratService.update(id, formData as UpdateJenisSuratDto, file);
            } else {
                // Mode create - pastikan file ada
                if (!file) {
                    throw new Error("File template wajib diunggah!");
                }
                await jenisSuratService.create(formData as CreateJenisSuratDto, file);
            }
            await fetchData(); // Refresh data setelah berhasil
        } catch (error) {
            console.error("Gagal menyimpan jenis surat:", error);
            throw error; // Lempar error kembali ke component
        }
    }, [fetchData]);

    const deleteJenisSurat = useCallback(async (id: number) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus jenis surat ini?')) {
            try {
                await jenisSuratService.remove(id);
                await fetchData(); // Refresh data setelah berhasil
            } catch (error) {
                console.error("Gagal menghapus jenis surat:", error);
            }
        }
    }, [fetchData]);

    return {
        jenisSuratList,
        isLoading,
        paginationMeta,
        queryParams,
        searchTerm,
        setSearchTerm,
        handleSort,
        handlePageChange,
        findOneJenisSurat,
        saveJenisSurat,
        deleteJenisSurat,
    };
};