import api from "./api"

export const dashboardService = {
  async getDashboardSummary() {
    const response = await api.get('/dashboard');
    return response.data
  },

  async getDashboardWarga(){
    const response = await api.get('/dashboard/warga');
    return response.data;
  }
}