const updateFavoritesOnLS = (updatedFavorites) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return localStorage.setItem(
      "user",
      JSON.stringify({ ...user, favorites: updatedFavorites })
    );
  } else {
    return localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }
};

const fetchAll = () =>
  new Promise((resolve) => {
    const favoritesOnLS = JSON.parse(localStorage.getItem("favorites"));
    const user = JSON.parse(localStorage.getItem("user"));
    window.setTimeout(() => {
      if (user) {
        resolve(user.favorites);
      } else {
        if (favoritesOnLS) {
          resolve(favoritesOnLS);
        } else {
          localStorage.setItem("favorites", JSON.stringify([]));
          resolve([]);
        }
      }
    }, 100);
  });

const update = (id) =>
  new Promise((resolve) => {
    const favoritesOnLS = JSON.parse(localStorage.getItem("favorites"));
    const user = JSON.parse(localStorage.getItem("user"));
    window.setTimeout(() => {
      if (!!user) {
        const indexOfProd = user.favorites.indexOf(id);
        if (indexOfProd >= 0) {
          // убираем из избранного
          const updatedFavorites = [
            ...user.favorites.slice(0, indexOfProd),
            ...user.favorites.slice(indexOfProd + 1),
          ];
          updateFavoritesOnLS(updatedFavorites);
          resolve(updatedFavorites);
        }
        // добавляем в избранное
        else {
          const updatedFavorites = [...user.favorites, id];
          updateFavoritesOnLS(updatedFavorites);
          resolve(updatedFavorites);
        }
      } else {
        const indexOfProd = favoritesOnLS.indexOf(id);
        if (indexOfProd >= 0) {
          // убираем из избранного
          const updatedFavorites = [
            ...favoritesOnLS.slice(0, indexOfProd),
            ...favoritesOnLS.slice(indexOfProd + 1),
          ];
          updateFavoritesOnLS(updatedFavorites);
          resolve(updatedFavorites);
        }
        // добавляем в избранное
        else {
          const updatedFavorites = [...favoritesOnLS, id];
          updateFavoritesOnLS(updatedFavorites);
          resolve(updatedFavorites);
        }
      }
    }, 100);
  });

const favorites = { fetchAll, update };

export default favorites;
