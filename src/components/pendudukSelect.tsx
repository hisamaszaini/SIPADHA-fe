import { Combobox } from "@headlessui/react";
import { ChevronsUpDownIcon, CheckIcon } from "lucide-react";
import type { FindAllPendudukResponse } from "../types/penduduk.types";

interface PendudukSelectProps {
  label?: string;
  value: FindAllPendudukResponse | null;
  onChange: (p: FindAllPendudukResponse | null) => void;
  options: FindAllPendudukResponse[];
  searchTerm: string;
  onSearchChange: (term: string) => void;
  isLoading?: boolean;
  error?: string;
}

export const PendudukSelect: React.FC<PendudukSelectProps> = ({
  label = 'Pilih Penduduk',
  value,
  onChange,
  options,
  searchTerm,
  onSearchChange,
  isLoading = false,
  error,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <Combobox value={value} onChange={onChange}>
        <div className="relative">
          <Combobox.Input
            className={`w-full px-4 py-3 bg-gray-50 border rounded-md text-gray-900 focus:outline-none focus:ring-2 ${
              error
                ? "border-red-500 ring-red-500"
                : "border-blue-300 focus:ring-emerald-500 focus:border-emerald-500"
            }`}
            onChange={(e) => onSearchChange(e.target.value)}
            displayValue={(p: FindAllPendudukResponse) =>
              p ? `${p.nik} - ${p.nama}` : ""
            }
            placeholder="Cari NIK atau Nama Penduduk"
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronsUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>

        <Combobox.Options className="absolute mt-1 max-h-60 w-full max-w-xs overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
          {isLoading && (
            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
              Memuat...
            </div>
          )}

          {!isLoading && options.length === 0 && searchTerm !== "" ? (
            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
              Tidak ditemukan.
            </div>
          ) : (
            options.map((p) => (
              <Combobox.Option
                key={p.id}
                value={p}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-emerald-600 text-white" : "text-gray-900"
                  }`
                }
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {p.nik} - {p.nama}
                    </span>
                    {selected && (
                      <span
                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                          active ? "text-white" : "text-emerald-600"
                        }`}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))
          )}
        </Combobox.Options>
      </Combobox>
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};
