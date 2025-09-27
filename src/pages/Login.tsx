import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { loginSchema, type LoginData } from '../types/auth.types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../components/ui/Button';
import { Loader2, UserPlus } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginData) => {
    setError("");
    try {
      const loggedInUser = await login(data);
      const role = loggedInUser?.role?.toLowerCase() ?? "warga";
      navigate(`/${role}/dashboard`);
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen relative glass-effect">
      {/* Floating shapes */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-full floating-animation" style={{ animationDelay: "-2s" }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-2xl floating-animation" style={{ animationDuration: "15s" }} />
      <div className="absolute top-10 right-20 w-48 h-48 bg-white/10 rounded-xl floating-animation" style={{ animationDelay: "-5s", animationDuration: "18s" }} />
      <div className="absolute bottom-5 left-20 w-52 h-52 bg-white/5 rounded-full floating-animation" style={{ animationDelay: "-8s" }} />

      <main className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md p-8 space-y-6 rounded-2xl shadow-2xl glass-effect form-fade-in"
        >
          <header className="text-center">
            <h1 className="text-2xl font-bold text-white">SIPANDHA DESA CEPOKO</h1>
            <p className="mt-2 text-sm text-white/80">Silakan masuk untuk melanjutkan.</p>
          </header>

          {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">{error}</div>}

          <section className="space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="text-sm font-medium text-white/90">Alamat Email</label>
              <div className="mt-1 relative">
                <input
                  id="email"
                  type="email"
                  placeholder="contoh@email.com"
                  {...register("email")}
                  className="w-full pl-3 pr-3 py-3 bg-white/10 border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
              </div>
              {errors.email && <div className='mt-2'><p className="text-red-500 text-sm mt-2">{errors.email.message}</p></div>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="text-sm font-medium text-white/90">Password</label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  {...register("password")}
                  className="w-full pl-3 pr-3 py-3 bg-white/10 border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
              </div>
              {errors.password && <div className='mt-2'><p className="text-red-500 text-sm">{errors.password.message}</p></div>}
            </div>
          </section>

          <div className="pt-2 space-y-4">
            <Button
              type="submit"
              variant="primary" // Pastikan variant ini ada di komponen Button Anda
              className="w-full" // Membuat tombol menjadi full-width
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <UserPlus className="mr-2 h-4 w-4" />
              )}
              {isSubmitting ? 'Sedang login...' : 'Login'}
            </Button>

            <div className="mt-4 text-center">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm font-medium transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.37 10.53a5.39 5.39 0 0 0-.78-.42 2.6 2.6 0 0 0-.59-.19c-.19-.03-.39-.05-.58-.05-.21 0-.41.01-.61.03-.31.03-.62.08-.92.14-.32.07-.63.15-.94.25-.27.09-.54.19-.8.29a8.33 8.33 0 0 0-1.28.57c-.2.12-.38.26-.57.4a4.92 4.92 0 0 0-.66.58c-.22.22-.37.46-.52.7-.15.26-.28.53-.39.81-.08.18-.16.36-.23.54-.05.15-.11.3-.15.45-.04.1-.07.21-.09.31-.03.1-.05.2-.07.31-.02.14-.04.28-.05.42-.01.05-.01.09-.01.14s0 .1 0 .15c0 .07 0 .14 0 .2.01.07.02.14.03.21.02.12.04.24.07.36.05.21.11.42.18.63.08.21.17.42.26.63.1.2.2.4.31.59.06.1.11.21.18.31a1.11 1.11 0 0 0 .18.22c.08.08.17.15.26.22.12.09.25.16.37.24a1.79 1.79 0 0 0 .38.16c.13.05.25.09.38.12.25.06.5.09.75.11.2.02.41.03.61.03h.61c.21 0 .42-.01.63-.03.21-.02.42-.05.63-.08.18-.03.35-.06.53-.1.27-.06.54-.13.81-.2.25-.07.5-.15.74-.24a7.96 7.96 0 0 0 1.14-.46c.23-.11.46-.23.68-.36a4.3 4.3 0 0 0 .6-.5 4.14 4.14 0 0 0 .53-.55 5.05 5.05 0 0 0 .37-.53 4.65 4.65 0 0 0 .32-.53 4.08 4.08 0 0 0 .2-.4 4.22 4.22 0 0 0 .17-.41 3.63 3.63 0 0 0 .15-.44c.04-.15.07-.3.1-.45a5.06 5.06 0 0 0 .06-.48c.01-.09.01-.17.01-.26 0-.12 0-.24 0-.36s-.01-.22-.02-.33c-.01-.15-.03-.3-.05-.44-.03-.21-.06-.42-.1-.63a7.38 7.38 0 0 0-.15-.64 3.4 3.4 0 0 0-.12-.38 4.63 4.63 0 0 0-.2-.57 3.9 3.9 0 0 0-.25-.55 4.92 4.92 0 0 0-.32-.54z" />
                </svg>
                Hubungi Admin via WhatsApp
              </a>
            </div>

            <p className="text-center text-sm text-white/80">
              Belum punya akun?{" "}
              <Link to="/register" className="font-semibold text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded">
                Daftar di sini
              </Link>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;
