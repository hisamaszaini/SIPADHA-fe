/**
 * Komponen untuk header tabel yang bisa di-sort.
 * Dibuat generik untuk bisa dipakai di tabel manapun.
 * * @param {object} props Komponen props
 * @param {React.ReactNode} props.children Teks atau elemen yang akan ditampilkan di header.
 * @param {string} props.columnKey Kunci unik untuk kolom ini (misal: 'nomor', 'dukuh').
 * @param {(sortKey: string) => void} props.onSort Fungsi yang dipanggil saat header diklik.
 * @param {{ sortBy?: string, sortOrder?: 'asc' | 'desc' }} props.queryParams Objek yang berisi state sorting saat ini.
 */
export const SortableHeader = ({ children, columnKey, onSort, queryParams }) => {
    
    const renderSortIcon = () => {
        if (queryParams.sortBy !== columnKey) {
            return <span className="text-gray-400">⇅</span>;
        }
        if (queryParams.sortOrder === 'asc') {
            return <span className="text-gray-500">▲</span>;
        }
        return <span className="text-gray-500">▼</span>;
    };

    return (
        <th
            className="px-6 py-4 text-left uppercase tracking-wider cursor-pointer select-none"
            onClick={() => onSort(columnKey)}
        >
            <div className="flex items-center gap-2">
                {children}
                {renderSortIcon()}
            </div>
        </th>
    );
};