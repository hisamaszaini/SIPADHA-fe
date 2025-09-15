import type { UserRole } from "./user.types";

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  username: string;
  password: string;
  role: UserRole;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}