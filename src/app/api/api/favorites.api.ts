import api from "..";
import { Iseller } from "../../../types/types";

const updateFavoritesOnLS = (prodId: string): string[] => {
  const favoritesOnLS: string[] =
    JSON.parse(localStorage.getItem("favorites")) || [];
  if (favoritesOnLS.includes(prodId)) {
    const indexOfProd: number = favoritesOnLS.indexOf(prodId);
    favoritesOnLS.splice(indexOfProd, 1);
  } else {
    favoritesOnLS.push(prodId);
  }
  localStorage.setItem("favorites", JSON.stringify(favoritesOnLS));
  return favoritesOnLS;
};

// favorites api request
async function fetchAll(): Promise<string[]> {
  const userId: string = JSON.parse(localStorage.getItem("user"));
  if (userId !== null) {
    const user: Iseller = await api.users.fetchById(userId);
    return user.favorites;
  } else {
    const favoritesOnLS: string[] =
      JSON.parse(localStorage.getItem("favorites")) || [];
    return favoritesOnLS;
  }
}

// update api request
async function update(id: string): Promise<string[]> {
  const userId: string = JSON.parse(localStorage.getItem("user"));
  if (userId) {
    const favorites: string[] = await api.users.editUserFavorites({
      userId: userId,
      prodId: id,
    });
    return favorites;
  } else {
    return updateFavoritesOnLS(id);
  }
}

const favorites = { fetchAll, update };

export default favorites;
