import { useQuery } from "@tanstack/react-query";
import { dashboardService } from "../services/dashboardService";

export const useDashboardData = () => {
  return useQuery({
    queryKey: ["dashboardData"],
    queryFn: dashboardService.getDashboardSummary,
  })
}

export const useDashboardWargaData = () => {
  return useQuery({
    queryKey: ["dashboardWargaData"],
    queryFn: dashboardService.getDashboardWarga,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};
