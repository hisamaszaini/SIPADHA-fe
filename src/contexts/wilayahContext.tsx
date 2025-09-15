import React, { createContext, useState, useEffect, useCallback, useContext } from 'react';
import dukuhService from '../services/dukuhService';
import rwService from '../services/RwService';
import rtService from '../services/RtService';
import type { Dukuh } from '../types/dukuh.types';
import type { Rw } from '../types/rw.types';
import type { Rt } from '../types/rt.types';

interface IWilayahContext {
    allDukuh: Dukuh[];
    filteredRw: Rw[];
    filteredRt: Rt[];
    handleDukuhChange: (dukuhId: number | null) => void;
    handleRwChange: (rwId: number | null) => void;
    isLoadingDukuh: boolean;
    isLoadingRw: boolean;
    isLoadingRt: boolean;
    refreshWilayahOptions: () => Promise<void>;
}

const WilayahContext = createContext<IWilayahContext | undefined>(undefined);

export const WilayahProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [allDukuh, setAllDukuh] = useState<Dukuh[]>([]);
    const [filteredRw, setFilteredRw] = useState<Rw[]>([]);
    const [filteredRt, setFilteredRt] = useState<Rt[]>([]);

    const [isLoadingDukuh, setIsLoadingDukuh] = useState(true);
    const [isLoadingRw, setIsLoadingRw] = useState(false);
    const [isLoadingRt, setIsLoadingRt] = useState(false);

    const fetchAllDukuh = useCallback(async () => {
        setIsLoadingDukuh(true);
        try {
            const res = await dukuhService.findAll({ limit: 100 });
            setAllDukuh(res.data);
        } catch (error) {
            console.error("Gagal memuat Dukuh:", error);
        } finally {
            setIsLoadingDukuh(false);
        }
    }, []);

    useEffect(() => {
        fetchAllDukuh();
    }, [fetchAllDukuh]);

    const refreshWilayahOptions = useCallback(async () => {
        await fetchAllDukuh();
        setFilteredRw([]);
        setFilteredRt([]);
    }, [fetchAllDukuh]);


    const handleDukuhChange = useCallback(async (dukuhId: number | null) => {
        setFilteredRw([]);
        setFilteredRt([]);
        if (!dukuhId) return;

        setIsLoadingRw(true);
        try {
            const res = await rwService.findAll({ limit: 100, dukuhId });
            setFilteredRw(res.data);
        } catch (error) {
            console.error("Gagal memuat RW:", error);
        } finally {
            setIsLoadingRw(false);
        }
    }, []);

    const handleRwChange = useCallback(async (rwId: number | null) => {
        setFilteredRt([]);
        if (!rwId) return;

        setIsLoadingRt(true);
        try {
            const res = await rtService.findAll({ limit: 100, rwId });
            setFilteredRt(res.data);
        } catch (error) {
            console.error("Gagal memuat RT:", error);
        } finally {
            setIsLoadingRt(false);
        }
    }, []);

    const value = {
        allDukuh,
        filteredRw,
        filteredRt,
        handleDukuhChange,
        handleRwChange,
        isLoadingDukuh,
        isLoadingRw,
        isLoadingRt,
        refreshWilayahOptions
    };

    return (
        <WilayahContext.Provider value={value}>
            {children}
        </WilayahContext.Provider>
    );
};

export const useWilayahContext = () => {
    const context = useContext(WilayahContext);
    if (context === undefined) {
        throw new Error('useWilayahContext must be used within a WilayahProvider');
    }
    return context;
};