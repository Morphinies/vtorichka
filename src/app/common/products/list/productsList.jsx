import api from "../../../api";
import s from "../products.module.css";
import ProductsItem from "../item/productsItem";
import React, { useEffect, useState } from "react";

const ProductsList = ({ productsOnPage }) => {
  // избранные товары
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [updatingFavorite, setUpdatingFavorite] = useState();

  // localStorage.clear();

  // установка избранного
  useEffect(() => {
    api.favorites.fetchAll().then((data) => setFavoriteProducts(data));
  }, []);

  // обновление избранного
  useEffect(() => {
    Number(updatingFavorite) &&
      api.favorites.update(updatingFavorite).then((data) => {
        setFavoriteProducts(data);
        setUpdatingFavorite();
      });
  }, [updatingFavorite]);
  const updateFavorites = (id) => {
    !updatingFavorite && setUpdatingFavorite(id);
  };

  return productsOnPage.length > 0 ? (
    <ul className={s.products}>
      {productsOnPage.map((prod) => {
        const maxVal = prod.photo.length * 100;
        return (
          <ProductsItem
            prod={prod}
            key={prod.id}
            maxVal={maxVal}
            isFavorite={favoriteProducts.includes(prod.id)}
            updateFavorites={updateFavorites}
          />
        );
      })}
    </ul>
  ) : (
    <p className={s.noProdsText}>
      Товаров по заданным условиям поиска не найдено :/
    </p>
  );
};

export default ProductsList;
