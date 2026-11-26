import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productsApi";
import { demoProducts } from "../../../mocks/data/products";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      if (import.meta.env.VITE_USE_MOCKS === "true") {
        return demoProducts;
      }

      return getProducts();
    },
  });
}
