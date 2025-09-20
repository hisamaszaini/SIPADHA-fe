import type { ApiResponse } from "../types/api.types";
import type { SettingResponse, UpdateSettingDto } from "../types/setting.types";
import api from "./api";

export const settingService = {
  /**
   * Ambil data setting (hanya satu record).
   * @returns {Promise<ApiResponse<Setting>>} Data setting global.
   */
  async find(): Promise<ApiResponse<SettingResponse>> {
    const response = await api.get("/setting");
    return response.data;
  },

  /**
   * Update data setting.
   * @param data - Data baru untuk setting.
   * @returns {Promise<ApiResponse<Setting>>} Data setting setelah update.
   */
  async update(data: UpdateSettingDto): Promise<ApiResponse<SettingResponse>> {
    const response = await api.put("/setting", data);
    return response.data;
  },
};

export default settingService;
