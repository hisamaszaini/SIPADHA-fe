import api from './api';
import type { ApiResponse } from '../types/api.types';
import type { AuthResponse, LoginData, RegisterData } from '../types/auth.types';
import type { User } from '../types/user.types';

export const authService = {
  // Login
  async login(loginData: LoginData): Promise<ApiResponse<AuthResponse>> {
    const response = await api.post('/auth/login', loginData);
    return response.data;
  },

  // Register
  async register(registerData: RegisterData): Promise<ApiResponse<User>> {
    const response = await api.post('/auth/register', registerData);
    return response.data;
  },

  // Register Warga
  async registerWarga(registerData: RegisterData): Promise<ApiResponse<User>> {
    const response = await api.post('/auth/registerWarga', registerData);
    return response.data;
  },

  // Get user profile
  async getProfile(): Promise<ApiResponse<User>> {
    const response = await api.get('/auth/profile');
    return response.data;
  },

  // Refresh token
  async refreshToken(): Promise<ApiResponse<AuthResponse>> {
    const response = await api.post('/auth/refresh');
    return response.data;
  },

  // Logout
  async logout(): Promise<ApiResponse> {
    const response = await api.post('/auth/logout');
    return response.data;
  },
};

export default authService;