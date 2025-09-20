import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { SettingResponse, UpdateSettingDto } from "../types/setting.types";
import { toast } from "sonner";
import settingService from "../services/settingService";

export function useSetting() {
  const queryClient = useQueryClient();

  const settingQuery = useQuery({
    queryKey: ["setting"],
    queryFn: async () => {
      const response = await settingService.find();
      return response.data as SettingResponse;
    },
  });

  const updateSettingMutation = useMutation({
    mutationFn: (data: UpdateSettingDto) => settingService.update(data),

    onSuccess: (response) => {
      const updatedSetting = response.data as SettingResponse;

      toast.success("Setting berhasil diperbarui!");
      queryClient.setQueryData(["setting"], updatedSetting);
    },

    onError: (error: any) => {
      toast.error("Gagal memperbarui setting!");
      console.error("Gagal memperbarui setting:", error);
    },
  });

  return {
    ...settingQuery,
    updateSetting: updateSettingMutation.mutate,
    updateSettingAsync: updateSettingMutation.mutateAsync,
    isUpdating: updateSettingMutation.isPending,
  };
}
