import React, { useState, useEffect } from 'react';
import { useWilayahContext } from '../../contexts/wilayahContext';
import type { PendudukQueryParams } from '../../types/penduduk.types';

interface PendudukFilterProps {
    filters: PendudukQueryParams;
    onFilterChange: (name: keyof PendudukQueryParams, value: string | number | undefined) => void;
}

const PendudukFilter: React.FC<PendudukFilterProps> = ({ filters, onFilterChange }) => {
    const {
        allDukuh,
        filteredRw,
        filteredRt,
        handleDukuhChange,
        handleRwChange,
        isLoadingRw,
        isLoadingRt
    } = useWilayahContext();

    const [searchTerm, setSearchTerm] = useState(filters.search || '');

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchTerm.trim() !== (filters.search || '')) {
                onFilterChange('search', searchTerm.trim() || undefined);
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [searchTerm, filters.search, onFilterChange]);

    const onDukuhSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const dukuhId = e.target.value ? Number(e.target.value) : undefined;
        onFilterChange('dukuhId', dukuhId);
        handleDukuhChange(dukuhId ?? null);
    };

    const onRwSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const rwId = e.target.value ? Number(e.target.value) : undefined;
        onFilterChange('rwId', rwId);
        handleRwChange(rwId ?? null);
    };

    const onRtSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const rtId = e.target.value ? Number(e.target.value) : undefined;
        onFilterChange('rtId', rtId);
    };

    return (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-end gap-4 bg-gray-50/50 border-b border-gray-200">
            {/* Input Pencarian */}
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Cari NIK / Nama</label>
                <input
                    type="text"
                    placeholder="Ketik untuk mencari..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mt-1 w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
            </div>

            {/* Filter Dukuh */}
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Filter Dukuh</label>
                <select
                    name="dukuhId"
                    value={filters.dukuhId || ''}
                    onChange={onDukuhSelectChange}
                    className="mt-1 w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                    <option value="">Semua Dukuh</option>
                    {allDukuh.map((d) => (<option key={d.id} value={d.id}>{d.nama}</option>))}
                </select>
            </div>

            {/* Filter RW */}
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Filter RW</label>
                <select
                    name="rwId"
                    value={filters.rwId || ''}
                    onChange={onRwSelectChange}
                    disabled={!filters.dukuhId || isLoadingRw}
                    className="mt-1 w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-200"
                >
                    <option value="">{isLoadingRw ? 'Memuat...' : 'Semua RW'}</option>
                    {filteredRw.map(rw => (<option key={rw.id} value={rw.id}>RW {rw.nomor}</option>))}
                </select>
            </div>

            {/* Filter RT */}
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Filter RT</label>
                <select
                    name="rtId"
                    value={filters.rtId || ''}
                    onChange={onRtSelectChange}
                    disabled={!filters.rwId || isLoadingRt}
                    className="mt-1 w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-200"
                >
                    <option value="">{isLoadingRt ? 'Memuat...' : 'Semua RT'}</option>
                    {filteredRt.map(rt => (<option key={rt.id} value={rt.id}>RT {rt.nomor}</option>))}
                </select>
            </div>
        </div>
    );
};

export default PendudukFilter;