export type UserRole = 'ADMIN' | 'PENGURUS' | 'WARGA';

export interface User {
  id: number;
  username: string;
  email: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}