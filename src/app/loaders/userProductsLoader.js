import api from "../api";

export async function userProductsLoader() {
  const curUserId = JSON.parse(localStorage.getItem("user"));
  if (curUserId) {
    const userProducts = await api.products.fetchBySeller(curUserId);
    return userProducts;
  } else return null;
}
