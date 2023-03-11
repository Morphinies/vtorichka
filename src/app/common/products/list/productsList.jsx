import api from "../../../api";
import s from "../products.module.css";
import ProductsItem from "../item/productsItem";
import React, { useEffect, useState } from "react";

const ProductsList = ({ productsOnPage, showProduct }) => {
  // избранные товары
  const [favoriteProduct, setFavoriteProduct] = useState([]);

  // обновление избранного
  useEffect(() => {
    api.favorites.fetchAll().then((data) => setFavoriteProduct(data));
  }, []);

  return productsOnPage.length > 0 ? (
    <ul className={s.products}>
      {productsOnPage.map((i) => {
        const maxVal = i.photo.length * 100;
        return (
          <ProductsItem
            i={i}
            key={i.id}
            maxVal={maxVal}
            showProduct={showProduct}
            favoriteProduct={favoriteProduct}
            setFavoriteProduct={setFavoriteProduct}
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
