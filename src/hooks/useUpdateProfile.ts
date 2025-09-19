import { useMutation } from '@tanstack/react-query';
import type { UpdateProfileDto, User } from '../types/user.types';
import userService from '../services/userService';
import { toast } from 'sonner';

export function useUpdateProfile(setUser: (user: User) => void) {
  return useMutation({
    mutationFn: (data: UpdateProfileDto) => userService.updateProfile(data),

    onSuccess: (response) => {
      const updatedUser = response.data;

      toast.success('Profil berhasil diperbarui!');

      if (updatedUser) {
        setUser(updatedUser);
      }
    },

    onError: (error: any) => {
      toast.error(`Gagal memperbarui profil!`);
      console.error('Gagal memperbarui profil:', error);
    },
  });
}
