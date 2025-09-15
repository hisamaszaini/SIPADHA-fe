import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import type { LoginData } from '../types/auth.types';

const Login: React.FC = () => {
    const [formData, setFormData] = useState<LoginData>({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            await login(formData);
            navigate('/profile');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Login failed');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen">
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
            <main className="relative z-10 flex items-center justify-center min-h-screen p-4">
                <form action="kk-dashboard.html" className="w-full max-w-md p-8 space-y-6 rounded-2xl shadow-2xl glass-effect form-fade-in"
                    onSubmit={handleSubmit}>
                    <header className="text-center">
                        <svg
                            className="mx-auto h-9 mb-4"
                            viewBox="0 0 150 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <text
                                x={0}
                                y={20}
                                fontFamily="Lexend Deca, sans-serif"
                                fontSize={24}
                                fontWeight="bold"
                                fill="white"
                            >
                                Desa Cepoko
                            </text>
                        </svg>
                        <h1 className="text-2xl font-bold text-white">
                            Selamat Datang Kembali
                        </h1>
                        <p className="mt-2 text-sm text-white/80">
                            Silakan masuk untuk melanjutkan.
                        </p>
                    </header>
                    {error && (
                        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                            {error}
                        </div>
                    )}
                    <section className="space-y-4">
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-white/90">
                                Alamat Email
                            </label>
                            <div className="mt-1 relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg
                                        className="w-5 h-5 text-white/50"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-3 py-3 bg-white/10 border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                                    placeholder="contoh@email.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="text-sm font-medium text-white/90"
                            >
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg
                                        className="w-5 h-5 text-white/50"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        />
                                    </svg>
                                </span>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-3 py-3 bg-white/10 border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                    </section>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 focus:ring-offset-gray-900 transition-transform duration-300">
                        {isLoading ? 'Logging in...' : 'Masuk'}
                    </button>
                </form>
            </main>
        </div>
    );
};

export default Login;