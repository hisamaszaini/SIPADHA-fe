import React, { useState } from "react";
import { toast, Toaster } from "sonner";
import axios from "axios";
import AuthInput from "../components/ui/AuthInput";
import { Link, useNavigate } from "react-router-dom";
import { Loader2, UserPlus } from "lucide-react";
import { Button } from "../components/ui/Button";

interface RegisterWargaForm {
    nik: string;
    noHp: string;
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
}

export default function RegisterPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<RegisterWargaForm>({
        nik: "",
        noHp: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState<Partial<RegisterWargaForm>>({});
    const [globalError, setGlobalError] = useState<string | null>(null);
    const [isLoading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name as keyof RegisterWargaForm]) {
            setErrors({ ...errors, [e.target.name]: undefined });
        }
        setGlobalError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});
        setGlobalError(null);

        if (formData.password !== formData.confirmPassword) {
            setErrors({ confirmPassword: "Konfirmasi password tidak cocok" });
            setLoading(false);
            return;
        }

        try {
            await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/auth/registerWarga`,
                formData
            );
            toast.success("Registrasi berhasil! Anda akan dialihkan ke halaman login.");
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (err: any) {
            if (err.response?.data?.message) {
                const msg = err.response.data.message;
                if (typeof msg === "string") {
                    setGlobalError(msg);
                } else if (typeof msg === "object") {
                    setErrors(msg);
                } else {
                    setGlobalError("Terjadi kesalahan tak terduga.");
                }
            } else {
                setGlobalError("Tidak dapat terhubung ke server.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Toaster richColors position="top-right" />
            <div className="flex min-h-screen flex-col lg:flex-row glass-effect">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-full floating-animation" style={{ animationDelay: "-2s" }} />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-2xl floating-animation" style={{ animationDuration: "15s" }} />
                <div className="absolute top-10 right-20 w-48 h-48 bg-white/10 rounded-xl floating-animation" style={{ animationDelay: "-5s", animationDuration: "18s" }} />
                <div className="absolute bottom-5 left-20 w-52 h-52 bg-white/5 rounded-full floating-animation" style={{ animationDelay: "-8s" }} />

                <aside className="relative z-10 hidden w-full p-12 lg:flex lg:w-1/2 flex-col items-center justify-center text-center">
                    <h1 className="text-4xl font-bold text-white tracking-tight">
                        Portal Digital Desa Cepoko
                    </h1>
                    <p className="mt-4 max-w-md text-lg text-white/80">
                        Satu akun untuk semua layanan desa. Daftar sekarang untuk memulai.
                    </p>
                </aside>

                <main className="relative z-10 flex w-full items-center justify-center p-4 lg:w-1/2">
                    <form
                        className="w-full max-w-md p-8 space-y-6 rounded-2xl shadow-2xl glass-effect form-fade-in"
                        onSubmit={handleSubmit}
                    >
                        <header className="text-center">
                            <svg className="mx-auto h-9 mb-4" viewBox="0 0 150 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x={0} y={20} fontFamily="Lexend Deca, sans-serif" fontSize={24} fontWeight="bold" fill="white">
                                    Desa Cepoko
                                </text>
                            </svg>
                            <h1 className="text-2xl font-bold text-white">Buat Akun Baru</h1>
                            <p className="mt-2 text-sm text-white/80">Silakan isi data diri Anda</p>
                        </header>
                        <section className="space-y-4">
                            <AuthInput id="nik" name="nik" label="NIK" value={formData.nik} placeholder="Masukan NIK..." error={errors.nik} onChange={handleChange} />
                            <AuthInput id="noHp" name="noHp" label="Nomor HP" value={formData.noHp} placeholder="Masukan Nomor HP..." error={errors.noHp} onChange={handleChange} />
                            <AuthInput type="email" id="email" name="email" label="Email" value={formData.email} placeholder="Masukan Email..." error={errors.email} onChange={handleChange} />
                            <AuthInput id="username" name="username" label="Username" value={formData.username} placeholder="Masukan Username..." error={errors.username} onChange={handleChange} />
                            <AuthInput type="password" id="password" name="password" label="Password" value={formData.password} placeholder="Masukan Password..." error={errors.password} onChange={handleChange} />
                            <AuthInput type="password" id="confirmPassword" name="confirmPassword" label="Konfirmasi Password" value={formData.confirmPassword} placeholder="Ulangi Password..." error={errors.confirmPassword} onChange={handleChange} />
                            {globalError && (
                                <div className="p-3 text-sm bg-red-500/20 text-red-300 rounded-lg">
                                    {globalError}
                                </div>
                            )}
                        </section>

                        <div className="pt-2 space-y-4">
                            <Button
                                type="submit"
                                variant="primary"
                                className="w-full"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                ) : (
                                    <UserPlus className="mr-2 h-4 w-4" />
                                )}
                                {isLoading ? 'Mendaftar...' : 'Daftar Akun'}
                            </Button>

                            <p className="text-center text-sm text-white/80">
                                Sudah punya akun?{" "}
                                <Link to="/login" className="font-semibold text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded">
                                    Masuk di sini
                                </Link>
                            </p>
                        </div>
                    </form>
                </main>
            </div>
        </>
    );
}