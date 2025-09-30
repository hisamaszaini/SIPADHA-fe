import { useState } from "react";
import { Menu, X } from "lucide-react";

const HomePage: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <title>SIPANDHA: Pelayanan Surat Online Desa Cepoko, Ponorogo</title>
            <meta
                name="description"
                content="SIPANDHA merupakan sistem pelayanan administrasi handal dan akurat untuk Desa Cepoko, Ponorogo. Layanan pengajuan surat keterangan online 24 jam."
            />
            <div className="relative overflow-hidden text-white min-h-screen bg-gradient-to-b from-blue-800 to-blue-900">
                {/* Background floating shapes */}
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

                <header className="absolute top-0 left-0 right-0 z-20 bg-transparent">
                    {/* Navigasi utama tetap sama */}
                    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                        {/* Logo + Text */}
                        <div className="flex items-center gap-3">
                            <img
                                src="/images/logo.png"
                                alt="SIPANDHA Logo"
                                className="w-16 h-16 md:w-18 md:h-18 object-contain"
                            />
                            <div className="flex flex-col leading-tight">
                                <span className="text-2xl font-bold text-white">SIPANDHA</span>
                                <span className="text-sm text-white/80">Desa Cepoko</span>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-4">
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

                        {/* Tombol Hamburger */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setOpen(!open)}
                                className="text-white focus:outline-none z-50"
                                aria-label="Open menu"
                            >
                                {open ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </nav>

                    {/* Mobile Menu Overlay */}
                    <div
                        className={`
            md:hidden bg-gray-900/95 backdrop-blur-sm fixed top-0 left-0 h-screen w-4/5 max-w-sm z-40
            transition-transform duration-300 ease-in-out
            ${open ? "translate-x-0" : "-translate-x-full"}
        `}
                    >
                        <div className="p-6 flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-8">
                                <img
                                    src="/images/logo.png"
                                    alt="SIPANDHA Logo"
                                    className="w-16 h-16 object-contain"
                                />
                                <div className="flex flex-col leading-tight">
                                    <span className="text-2xl font-bold text-white">SIPANDHA</span>
                                    <span className="text-sm text-white/80">Desa Cepoko</span>
                                </div>
                            </div>

                            <hr className="border-white/10 mb-8" />

                            <div className="flex flex-col gap-4">
                                <a
                                    href="/register"
                                    className="w-full text-center text-white text-sm font-medium border border-white/50 rounded-full px-4 py-2 hover:bg-white/10 transition-colors"
                                >
                                    Daftar Akun
                                </a>
                                <a
                                    href="/login"
                                    className="w-full text-center text-white text-sm font-bold rounded-full px-4 py-2 gradient-blue hover:opacity-90 transition-opacity shadow-lg"
                                >
                                    Masuk
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="relative z-10 min-h-screen flex items-center justify-center text-center px-4">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                            Pelayanan Administrasi Desa Cepoko <br className="hidden md:block" />{" "}
                            di Ujung Jari Anda
                        </h1>
                        <p className="mt-4 text-lg text-white/80">
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
            </div>
            <section className="bg-white text-slate-800 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Kenapa Harus Menggunakan SIPANDHA?
                        </h2>
                        <p className="mt-2 text-slate-600 mx-auto">
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
                        <p className="mt-2 text-slate-600 mx-auto">
                            Ikuti alur sederhana kami untuk mendapatkan surat yang Anda butuhkan
                            dengan cepat.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                        <div className="flex items-start gap-6 max-w-sm">
                            <div className="text-5xl font-bold gradient-blue bg-clip-text text-white rounded-lg">
                                01
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">
                                    Daftar &amp; Isi Formulir
                                </h3>
                                <p className="text-slate-600">
                                    Buat akun, pilih jenis surat, dan lengkapi data pada
                                    formulir online yang interaktif.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6 max-w-sm">
                            <div className="text-5xl font-bold gradient-purple bg-clip-text text-white rounded-lg">
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
                            <div className="text-5xl font-bold gradient-orange bg-clip-text text-white rounded-lg">
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
            <section className="bg-slate-900 pb-20">
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
                        <p className="mt-2 text-slate-400 mx-auto">
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
            <footer className="bg-slate-950 text-slate-400 rounded-t-2xl -mt-6 relative z-10">
                <div className="container mx-auto px-6 py-12 text-center">
                    <div className="mb-8">
                        <h4 className="text-xl font-bold text-white sm:text-2xl">
                            KKN Tematik Kelompok 5
                        </h4>
                        <p className="text-slate-400">
                            Universitas Muhammadiyah Ponorogo
                        </p>

                        <div className="mt-6 flex justify-center items-center gap-4 sm:gap-6">
                            <div className="bg-slate-800/50 p-2 rounded-xl border border-slate-700 shadow-lg hover:bg-slate-700/50 transition-colors">
                                <img
                                    src="/images/logo-umpo.png"
                                    alt="Logo Universitas Muhammadiyah Ponorogo"
                                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                />
                            </div>
                            <div className="bg-slate-800/50 p-2 rounded-xl border border-slate-700 shadow-lg hover:bg-slate-700/50 transition-colors">
                                <img
                                    src="/images/logo-kelompok.png"
                                    alt="Logo Kelompok 5 KKN Tematik"
                                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                />
                            </div>
                            <div className="bg-slate-800/50 p-2 rounded-xl border border-slate-700 shadow-lg hover:bg-slate-700/50 transition-colors">
                                <img
                                    src="/images/logo-ft.png"
                                    alt="Logo Fakultas Teknik"
                                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <hr className="w-full max-6xl mx-auto border-slate-800 my-8" />
                    <div className="container mx-auto text-center">
                        <p>
                            © 2025 SIPANDHA - Pemerintah Desa Cepoko, Kecamatan Ngrayun, Ponorogo.
                        </p>
                        <p className="text-sm mt-1">
                            Sistem Pelayanan Administrasi Desa secara Handal dan Akurat.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default HomePage;