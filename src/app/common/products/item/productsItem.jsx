import s from "../products.module.css";
import React, { useState } from "react";
import ProductInfo from "./productInfo";
import ProductPhoto from "./productPhoto";

const ProductsItem = ({
  i,
  maxVal,
  openEditor,
  showProduct,
  favoriteProduct,
  updateFavorites,
}) => {
  const [x, setX] = useState(0);

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
        favoriteProduct={favoriteProduct}
        updateFavorites={updateFavorites}
      />
    </li>
  );
};

export default ProductsItem;
