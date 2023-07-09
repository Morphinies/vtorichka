import s from "../products.module.css";
import React, { useState } from "react";
import ProductInfo from "./prodInfo";
import ProductPhoto from "./prodPhoto";

const ProdItem = ({ prod, maxVal, isFavorite, updateFavorites }) => {
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

export default ProdItem;
