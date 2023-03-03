import React, { useState } from "react";
import s from "../products.module.css";
import ProductPhoto from "./productPhoto";
import ProductInfo from "./productInfo";

const ProductsItem = ({
  i,
  maxVal,
  openEditor,
  showProduct,
  favoriteProduct,
  setFavoriteProduct,
}) => {
  const [x, setX] = useState(0);
  // обновление избранного - функция
  const addFavorite = (obj) => {
    !favoriteProduct.includes(obj)
      ? setFavoriteProduct((prevState) => [...prevState, obj])
      : setFavoriteProduct((prevState) =>
          prevState
            .slice(0, favoriteProduct.indexOf(obj))
            .concat(prevState.slice(favoriteProduct.indexOf(obj) + 1))
        );
  };
  return (
    <li className={s.productCard}>
      <ProductPhoto
        x={x}
        i={i}
        setX={setX}
        maxVal={maxVal}
        showProduct={showProduct}
      />
      <ProductInfo
        i={i}
        s={s}
        openEditor={openEditor}
        addFavorite={addFavorite}
        favoriteProduct={favoriteProduct}
      />
    </li>
  );
};

export default ProductsItem;
