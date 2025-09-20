import z from "zod";
import type { UserRole } from "./user.types";

// export interface LoginData {
//   email: string;
//   password: string;
// }

export const loginSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(8, "Password minimal 8 karakter")
});

export type LoginData = z.infer<typeof loginSchema>;

export interface RegisterData {
  username: string;
  password: string;
  role: UserRole;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

export interface RegisterWarga {
  nik: string;
  email: string;
  username: string;
  password: string;
  noHp: string;
}
