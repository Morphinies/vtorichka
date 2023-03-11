const fetchAll = () =>
  new Promise((resolve) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const favoritesOnLS = JSON.parse(localStorage.getItem("favorites"));
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
    }, 1000);
  });

const update = (id) => {
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(id);
    });
  });
};

const favorites = { fetchAll, update };

export default favorites;
