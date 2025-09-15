import React from 'react';
import type {  } from '../../types/dukuh.types';
import type { PaginationMeta } from '../../types/api.types';

interface PaginationProps {
  meta: PaginationMeta;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ meta, onPageChange }) => {
  if (!meta || meta.total === 0) {
    return null; 
  }

  const isFirstPage = meta.page <= 1;
  const isLastPage = meta.page >= meta.totalPages;

  return (
    <footer className="p-4 border-t border-gray-200 flex justify-between items-center flex-shrink-0">
      <span className="text-sm text-gray-600">
        Total <span className="font-semibold">{meta.total}</span> data
      </span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(meta.page - 1)}
          disabled={isFirstPage}
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-lg text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        > &laquo; Sebelumnya </button>
        <span className="font-bold text-gray-800 px-2 text-sm">
          {meta.page} / {meta.totalPages}
        </span>
        <button
          onClick={() => onPageChange(meta.page + 1)}
          disabled={isLastPage}
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-lg text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        > Berikutnya &raquo; </button>
      </div>
    </footer>
  );
};

export default Pagination;