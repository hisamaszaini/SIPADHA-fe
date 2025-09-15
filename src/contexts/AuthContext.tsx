import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { authService } from '../services/authService';
import type { User } from '../types/user.types';
import type { LoginData, RegisterData } from '../types/auth.types';

interface AuthContextType {
  user: User | null;
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  registerWarga: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      // Hanya check auth jika tidak di halaman login/register
      const currentPath = window.location.pathname;
      const publicPaths = ['/login', '/register', '/'];
      
      if (publicPaths.includes(currentPath)) {
        setIsLoading(false);
        return;
      }

      const response = await authService.getProfile();
      setUser(response.data);
    } catch (error: any) {
      console.error('Auth check failed:', error);
      setUser(null);
      
      // Hanya redirect jika error 401 dan tidak di public pages
      const currentPath = window.location.pathname;
      const publicPaths = ['/login', '/register', '/'];
      
      if (error.response?.status === 401 && !publicPaths.includes(currentPath)) {
        window.location.href = '/login';
      }
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (data: LoginData) => {
    try {
      await authService.login(data);
      const response = await authService.getProfile();
      setUser(response.data);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const register = async (data: RegisterData) => {
    try {
      await authService.register(data);
      const response = await authService.getProfile();
      setUser(response.data);
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  const registerWarga = async (data: RegisterData) => {
    try {
      await authService.registerWarga(data);
      const response = await authService.getProfile();
      setUser(response.data);
    } catch (error) {
      console.error('Warga registration failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      setUser(null);
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout failed:', error);
      // Tetap reset user state meski logout gagal
      setUser(null);
      window.location.href = '/login';
    }
  };

  const value = {
    user,
    login,
    register,
    registerWarga,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};