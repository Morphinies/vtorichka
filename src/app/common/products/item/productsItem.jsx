import s from "../products.module.css";
import React, { useState } from "react";
import ProductInfo from "./productInfo";
import ProductPhoto from "./productPhoto";

const ProductsItem = ({ prod, maxVal, isFavorite, updateFavorites }) => {
  const [x, setX] = useState(0);

  return (
    <li className={s.productCard}>
      <ProductPhoto x={x} prod={prod} setX={setX} maxVal={maxVal} />
      <ProductInfo
        s={s}
        prod={prod}
        isFavorite={isFavorite}
        updateFavorites={updateFavorites}
      />
    </li>
  );
};

export default ProductsItem;
