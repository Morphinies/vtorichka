import api from "../../../api";
import s from "../products.module.css";
import ProductsItem from "../item/productsItem";
import React, { useEffect, useState } from "react";

const ProductsList = ({ productsOnPage }) => {
  // избранные товары
  const [favoriteProduct, setFavoriteProduct] = useState([]);
  const [favoritesIsUpdating, setFavoritesIsUpdating] = useState(false);

  // установка избранного
  useEffect(() => {
    api.favorites.fetchAll().then((data) => setFavoriteProduct(data));
  }, []);

  // обновление избранного
  useEffect(() => {
    Number(favoritesIsUpdating) &&
      api.favorites.update(favoritesIsUpdating).then((data) => {
        setFavoriteProduct(data);
        setFavoritesIsUpdating(false);
      });
  }, [favoritesIsUpdating]);

  return productsOnPage.length > 0 ? (
    <ul className={s.products}>
      {productsOnPage.map((prod) => {
        const maxVal = prod.photo.length * 100;
        return (
          <ProductsItem
            prod={prod}
            key={prod.id}
            maxVal={maxVal}
            isFavorite={favoriteProduct.includes(prod.id)}
            updateFavorites={(id) => setFavoritesIsUpdating(id)}
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
