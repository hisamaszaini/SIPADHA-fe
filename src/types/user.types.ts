import z from "zod";

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

export interface pendudukReference {
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

export const updateProfileSchema = z
  .object({
    email: z.string().nonempty("Email wajib diisi").trim().optional(),
    noHp: z
      .string()
      .min(11, "Nomor HP minimal 11 digit")
      .max(15, "Nomor HP maksimal 15 digit")
      .trim()
      .optional(),
    password: z .string() .optional() .refine( (val) => { if (!val) return true; return val.length >= 8; }, { message: "Password minimal 8 karakter", } ),
    confirmPassword: z.string().optional(),
  })
  .refine(
    (data) => !data.password || (data.confirmPassword && data.password === data.confirmPassword),
    {
      message: "Password dan konfirmasi tidak cocok",
      path: ["confirmPassword"],
    }
  )
  .strict();

export type UpdateProfileDto = z.infer<typeof updateProfileSchema>;