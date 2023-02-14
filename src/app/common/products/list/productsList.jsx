import s from "../products.module.css";
import ProductsItem from "../item/productsItem";
import React, { useEffect, useState } from "react";

const ProductsList = ({ productsOnPage, showProduct }) => {
  // избранные товары
  const [favoriteProduct, setFavoriteProduct] = useState(
    localStorage.getItem("favoriteProduct")
      ? JSON.parse(localStorage.getItem("favoriteProduct"))
      : []
  );

  // обновление избранного в LS
  useEffect(() => {
    localStorage.setItem("favoriteProduct", JSON.stringify(favoriteProduct));
  }, [favoriteProduct]);

  return (
    <ul className={s.products}>
      {productsOnPage.length > 0 &&
        productsOnPage.map((i) => {
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
  );
};

export default ProductsList;
