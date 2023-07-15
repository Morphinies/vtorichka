import { Iprod } from "../../types/types";
import api from "../api";

interface IprodLoader {
  params: {
    prodId: string;
  };
}
export async function prodLoader({ params }: IprodLoader): Promise<Iprod> {
  const prodId: string = params.prodId;
  if (!prodId) return null;

  const product: Iprod = await api.products.fetchById(prodId);
  if (!product) {
    return null;
  }

  return product;
}
