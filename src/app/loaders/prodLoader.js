import api from "../api";

export async function prodLoader({ params }) {
  const prodId = params.prodId;

  if (prodId) {
    const product = await api.products.fetchById(prodId);
    if (!product) {
      return null;
    }
    return product;
  } else {
    return null;
  }
}
