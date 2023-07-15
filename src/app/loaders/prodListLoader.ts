import { Iprod } from "../../types/types";
import api from "../api";

export async function prodListLoader(): Promise<Iprod[]> {
  // загрузка товаров
  const products: Iprod[] = await api.products.fetchAll();
  return products;
}
