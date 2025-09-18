export type UserRole = 'ADMIN' | 'PENGURUS' | 'WARGA';
export type StatusUser = 'ACTIVE' | 'INACTIVE';
export interface UserDto {
  noHp: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  statusUser: StatusUser;
  role: UserRole;
  nik: string | null;
}

export type UpdateUserDto = Partial<Omit<UserDto, 'confirmPassword'>>;

export interface pendudukReference{
  nik: string;
  nama: string;
  noHp: string;
}

export interface User {
  id: number;
  noHp: string;
  username: string;
  email: string;
  role: UserRole;
  statusUser: StatusUser;
  createdAt: string;
  updatedAt: string;
  penduduk: pendudukReference | null;
}

export type UserSortableKeys = keyof User | 'nama';

export interface UserQueryParams {
      page?: number;
      limit?: number;
      search?: string;
      role?: UserRole;
      sortBy?: UserSortableKeys;
      sortOrder?: 'asc' | 'desc';
}