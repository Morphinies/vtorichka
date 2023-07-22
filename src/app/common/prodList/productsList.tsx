import api from "../../api";
import * as React from "react";
import s from "./products.module.css";
import ProdItem from "./item/prodItem";
import { useEffect, useState } from "react";
import { IProductsList, Iprod } from "../../../types/types";

const ProductsList = ({ productsOnPage }: IProductsList): JSX.Element => {
  // избранные товары
  const [favoriteProducts, setFavoriteProducts] = useState<string[]>();

  // обозначение "избранного" у user'a
  useEffect(() => {
    api.favorites.fetchAll().then((data) => setFavoriteProducts(data));
  }, []);

  // обновление избранного
  const updateFavorites = (id: string) => {
    api.favorites
      .update(id)
      .then((data) => setFavoriteProducts(data))
      .catch((err) => console.log(err));
  };

  return productsOnPage.length > 0 ? (
    <ul className={s.products}>
      {productsOnPage.map((prod: Iprod) => {
        const maxVal = prod.photo.length * 100;
        return (
          <ProdItem
            prod={prod}
            key={prod._id}
            maxVal={maxVal}
            isFavorite={
              (favoriteProducts && favoriteProducts.includes(prod._id)) || false
            }
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
