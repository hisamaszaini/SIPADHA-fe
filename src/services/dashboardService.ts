import api from "./api"

export const dashboardService = {
  async getDashboardSummary() {
    const response = await api.get('/dashboard')
    return response.data
  }
}