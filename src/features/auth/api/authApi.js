import apiClient from "../../../services/api/client";
import { API_ENDPOINTS } from "../../../services/api/endpoints";

export async function login(credentials) {
  const { data } = await apiClient.post(
    API_ENDPOINTS.login,
    credentials
  );

  return data;
}

export async function register(userData) {
  const { data } = await apiClient.post(
    API_ENDPOINTS.register,
    userData
  );

  return data;
}
