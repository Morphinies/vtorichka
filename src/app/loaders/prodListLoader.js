import api from "../api";

export async function prodListLoader() {
  // загрузка товаров
  const products = await api.products.fetchAll();
  if (products) {
    return products;
  } else return products;
}
