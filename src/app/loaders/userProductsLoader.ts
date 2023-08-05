import { Iprod } from "../../types/types";
import api from "../api";

export async function userProductsLoader(): Promise<Iprod[]> {
    const curUserId: string = JSON.parse(localStorage.getItem("user"));
    if (curUserId) {
        const userProducts: Iprod[] = await api.products.fetchBySeller(
            curUserId
        );
        return userProducts;
    } else return null;
}
