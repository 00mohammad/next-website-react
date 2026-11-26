import apiClient from "../../../services/api/client";
import { API_ENDPOINTS } from "../../../services/api/endpoints";

export async function getProducts() {
  const { data } = await apiClient.get(API_ENDPOINTS.products);
  return data;
}
