import React from 'react';

interface JenisSuratFilterProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}

const JenisSuratFilter: React.FC<JenisSuratFilterProps> = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="p-4 bg-gray-50/50">
            <div>
                <label htmlFor="search-jenis-surat" className="block text-sm font-medium text-gray-600 mb-1">
                    Cari Kode / Nama Surat
                </label>
                <input
                    id="search-jenis-surat"
                    type="text"
                    placeholder="Ketik untuk mencari..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mt-1 w-full md:w-80 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
            </div>
        </div>
    );
};

export default JenisSuratFilter;