import api from "..";

const updateFavoritesOnLS = (prodId) => {
  const favoritesOnLS = JSON.parse(localStorage.getItem("favorites")) || [];
  if (favoritesOnLS.includes(prodId)) {
    const indexOfProd = favoritesOnLS.indexOf(prodId);
    favoritesOnLS.splice(indexOfProd, 1);
  } else {
    favoritesOnLS.push(prodId);
  }
  localStorage.setItem("favorites", JSON.stringify(favoritesOnLS));
  return favoritesOnLS;
};

// favorites api request
async function fetchAll() {
  const userId = JSON.parse(localStorage.getItem("user"));
  if (userId !== null) {
    const user = await api.users.fetchById(userId);
    return user.favorites;
  } else {
    const favoritesOnLS = JSON.parse(localStorage.getItem("favorites")) || [];
    return favoritesOnLS;
  }
}

// update api request
async function update(id) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    const favorites = api.users.editUserFavorites({ userId: user, prodId: id });
    return favorites;
  } else {
    return updateFavoritesOnLS(id);
  }
}

const favorites = { fetchAll, update };

export default favorites;
