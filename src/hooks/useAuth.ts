import { useState, useEffect } from 'react';
import api from '../services/api';
import type { User } from '../types/user.types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      // Mengambil data user dari token (jika disimpan) atau dari endpoint profil
      // Contoh: kita asumsikan token menyimpan data user, atau kita punya endpoint /profile
      const fetchUser = async () => {
        try {
          // Anda mungkin perlu membuat endpoint untuk mendapatkan profil user
          const response = await api.get('/auth/profile');
          setUser(response.data);
        } catch (error) {
          console.error('Failed to fetch user', error);
          localStorage.removeItem('accessToken');
        } finally {
          setLoading(false);
        }
      };
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const response = await api.post('/auth/login', { username, password });
      const { accessToken } = response.data.data;
      localStorage.setItem('accessToken', accessToken);
      // Set user data (mungkin dari response login atau fetch profile)
      const userResponse = await api.get('/auth/profile');
      setUser(userResponse.data);
      return { success: true };
    } catch (error: any) {
      return { success: false, message: error.response?.data?.message || 'Login failed' };
    }
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Logout error', error);
    } finally {
      localStorage.removeItem('accessToken');
      setUser(null);
    }
  };

  return { user, loading, login, logout };
};