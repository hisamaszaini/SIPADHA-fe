const HomePage: React.FC = () => {
    return (
        <>
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 glass-effect">
                <div
                    className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-full floating-animation"
                    style={{ animationDelay: "-2s" }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-2xl floating-animation"
                    style={{ animationDuration: "15s" }}
                />
                <div
                    className="absolute top-10 right-20 w-48 h-48 bg-white/10 rounded-xl floating-animation"
                    style={{ animationDelay: "-5s", animationDuration: "18s" }}
                />
                <div
                    className="absolute bottom-5 left-20 w-52 h-52 bg-white/5 rounded-full floating-animation"
                    style={{ animationDelay: "-8s" }}
                />
            </div>
            <header className="absolute top-0 left-0 right-0 z-20">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-8 h-8 text-white"
                        >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        <span className="text-xl font-bold">SIPANDHA</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href="/register"
                            className="text-sm font-medium border border-white/50 rounded-full px-4 py-2 hover:bg-white/10 transition-colors"
                        >
                            Daftar Akun
                        </a>
                        <a
                            href="/login"
                            className="text-sm font-bold rounded-full px-4 py-2 gradient-blue hover:opacity-90 transition-opacity shadow-lg"
                        >
                            Masuk
                        </a>
                    </div>
                </nav>
            </header>
            <section className="relative z-10 min-h-screen flex items-center justify-center text-center px-4">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                        Pelayanan Administrasi Desa Cepoko <br className="hidden md:block" />{" "}
                        di Ujung Jari Anda
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                        Mengurus surat keterangan kini lebih cepat, handal, dan akurat.
                        Lakukan pengajuan kapan saja, di mana saja.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <a
                            href="/login"
                            className="text-lg font-bold rounded-full px-8 py-4 gradient-emerald hover:opacity-90 transition-opacity shadow-2xl pulse-glow"
                        >
                            Mulai Pengajuan Surat
                        </a>
                    </div>
                </div>
            </section>
            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#ffffff"
                        fillOpacity={1}
                        d="M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,170.7C672,139,768,85,864,80C960,75,1056,117,1152,138.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
            </div>
        </div>
            <section className="bg-white text-slate-800 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Kenapa Harus Menggunakan SIPANDHA?
                        </h2>
                        <p className="mt-2 text-slate-600 max-w-xl mx-auto">
                            Sistem kami dirancang untuk memberikan kemudahan dan efisiensi
                            maksimal bagi warga Desa Cepoko.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-slate-50 p-6 rounded-lg shadow-md hover-scale text-center">
                            <div className="w-16 h-16 gradient-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-8 h-8"
                                >
                                    <circle cx={12} cy={12} r={10} />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Hemat Waktu</h3>
                            <p className="text-slate-600">
                                Tidak perlu antre. Ajukan surat kapan saja, 24/7, langsung dari
                                rumah Anda.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-lg shadow-md hover-scale text-center">
                            <div className="w-16 h-16 gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-8 h-8"
                                >
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                    <circle cx={12} cy={12} r={3} />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Proses Transparan</h3>
                            <p className="text-slate-600">
                                Lacak status pengajuan surat Anda secara real-time melalui dashboard
                                akun.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-lg shadow-md hover-scale text-center">
                            <div className="w-16 h-16 gradient-purple rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-8 h-8"
                                >
                                    <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Notifikasi Cepat</h3>
                            <p className="text-slate-600">
                                Dapatkan pemberitahuan status pengajuan langsung ke nomor WhatsApp
                                Anda.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-lg shadow-md hover-scale text-center">
                            <div className="w-16 h-16 gradient-orange rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-8 h-8"
                                >
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Aman &amp; Resmi</h3>
                            <p className="text-slate-600">
                                Data Anda terjamin kerahasiaannya dan surat yang diterbitkan adalah
                                dokumen resmi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white text-slate-800 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Pengajuan Mudah dalam 3 Langkah
                        </h2>
                        <p className="mt-2 text-slate-600 max-w-xl mx-auto">
                            Ikuti alur sederhana kami untuk mendapatkan surat yang Anda butuhkan
                            dengan cepat.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                        <div className="flex items-start gap-6 max-w-sm">
                            <div className="text-5xl font-bold gradient-blue bg-clip-text text-transparent">
                                01
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">
                                    Daftar &amp; Isi Formulir
                                </h3>
                                <p className="text-slate-600">
                                    Buat akun dengan NIK, pilih jenis surat, dan lengkapi data pada
                                    formulir online yang interaktif.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6 max-w-sm">
                            <div className="text-5xl font-bold gradient-purple bg-clip-text text-transparent">
                                02
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Verifikasi oleh Admin</h3>
                                <p className="text-slate-600">
                                    Admin desa akan memeriksa dan memverifikasi pengajuan Anda.
                                    Statusnya bisa Anda pantau.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6 max-w-sm">
                            <div className="text-5xl font-bold gradient-orange bg-clip-text text-transparent">
                                03
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Ambil Surat Anda</h3>
                                <p className="text-slate-600">
                                    Setelah disetujui, Anda akan mendapat notifikasi WA. Surat siap
                                    diambil di kantor desa.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-slate-900 py-20">
                <div className="mb-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path
                            fill="#ffffff"
                            fillOpacity={1}
                            d="M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,170.7C672,139,768,85,864,80C960,75,1056,117,1152,138.7C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                        />
                    </svg>
                </div>
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Layanan Surat yang Tersedia
                        </h2>
                        <p className="mt-2 text-slate-400 max-w-xl mx-auto">
                            Kami menyediakan berbagai jenis surat keterangan untuk memenuhi
                            kebutuhan administratif Anda.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 rounded-lg glass-effect-card hover-scale">
                            <h3 className="text-xl font-bold text-white mb-2">
                                Surat Keterangan Usaha
                            </h3>
                            <p className="text-slate-400">
                                Untuk keperluan perizinan, pinjaman bank, atau administrasi lain
                                yang berkaitan dengan usaha Anda.
                            </p>
                        </div>
                        <div className="p-6 rounded-lg glass-effect-card hover-scale">
                            <h3 className="text-xl font-bold text-white mb-2">
                                Surat Keterangan Domisili
                            </h3>
                            <p className="text-slate-400">
                                Sebagai bukti sah tempat tinggal Anda saat ini untuk berbagai
                                keperluan administrasi.
                            </p>
                        </div>
                        <div className="p-6 rounded-lg glass-effect-card hover-scale">
                            <h3 className="text-xl font-bold text-white mb-2">
                                Surat Keterangan Tidak Mampu
                            </h3>
                            <p className="text-slate-400">
                                Digunakan untuk mengajukan beasiswa, bantuan sosial, atau keringanan
                                biaya lainnya.
                            </p>
                        </div>
                        <div className="p-6 rounded-lg glass-effect-card hover-scale">
                            <h3 className="text-xl font-bold text-white mb-2">
                                Surat Keterangan Ahli Waris
                            </h3>
                            <p className="text-slate-400">
                                Dokumen penting untuk keperluan perbankan, pertanahan, dan pembagian
                                harta warisan.
                            </p>
                        </div>
                        <div className="p-6 rounded-lg glass-effect-card hover-scale">
                            <h3 className="text-xl font-bold text-white mb-2">
                                Surat Keterangan Suami/Istri
                            </h3>
                            <p className="text-slate-400">
                                Dibutuhkan untuk administrasi kepegawaian, pengurusan visa, atau
                                tunjangan keluarga.
                            </p>
                        </div>
                        <div className="p-6 rounded-lg glass-effect-card hover-scale">
                            <h3 className="text-xl font-bold text-white mb-2">... dan Lainnya</h3>
                            <p className="text-slate-400">
                                Jelajahi lebih banyak jenis surat setelah Anda masuk ke dalam sistem
                                SIPANDHA.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-slate-950 text-slate-400 py-8">
                <div className="container mx-auto px-6 text-center">
                    <p>
                        © 2025 SIPANDHA - Pemerintah Desa Cepoko, Kecamatan Ngrayun, Ponorogo.
                    </p>
                    <p className="text-sm mt-1">
                        Sistem Pelayanan Administrasi Desa secara Handal dan Akurat.
                    </p>
                </div>
            </footer>
        </>)
}

export default HomePage;