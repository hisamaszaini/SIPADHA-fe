type SelectOption = {
    value: string;
    label: string;
};

export const jenisKelaminOptions: SelectOption[] = [
    { value: 'Laki-laki', label: 'Laki-laki' },
    { value: 'Perempuan', label: 'Perempuan' },
];

export const agamaOptions: SelectOption[] = [
    { value: 'Islam', label: 'Islam' },
    { value: 'Kristen', label: 'Kristen Protestan' },
    { value: 'Katolik', label: 'Kristen Katolik' },
    { value: 'Hindu', label: 'Hindu' },
    { value: 'Buddha', label: 'Buddha' },
    { value: 'Khonghucu', label: 'Khonghucu' },
];

export const statusPerkawinanOptions: SelectOption[] = [
    { value: 'Belum Kawin', label: 'Belum Kawin' },
    { value: 'Kawin', label: 'Kawin' },
    { value: 'Cerai Hidup', label: 'Cerai Hidup' },
    { value: 'Cerai Mati', label: 'Cerai Mati' },
];

export const pendidikanOptions: SelectOption[] = [
    { value: 'Tidak/Belum Sekolah', label: 'Tidak/Belum Sekolah' },
    { value: 'SD', label: 'SD/Sederajat' },
    { value: 'SMP', label: 'SMP/Sederajat' },
    { value: 'SMA/SMK', label: 'SMA/SMK' },
    { value: 'D1', label: 'Diploma I/II' },
    { value: 'D2', label: 'Akademi/Diploma II' },
    { value: 'D3', label: 'Strata I/Diploma III' },
    { value: 'D4/S1', label: 'Strata I/Diploma IV' },
    { value: 'S2', label: 'Strata II' },
    { value: 'S3', label: 'Strata III' },
];

export const hubunganKeluargaOptions: SelectOption[] = [
    { value: 'Kepala Keluarga', label: 'Kepala Keluarga' },
    { value: 'Istri', label: 'Istri' },
    { value: 'Anak', label: 'Anak' },
    { value: 'Cucu', label: 'Cucu' },
    { value: 'Orang Tua', label: 'Orang Tua' },
    { value: 'Mertua', label: 'Mertua' },
    { value: 'Famili Lain', label: 'Famili Lain' },
];