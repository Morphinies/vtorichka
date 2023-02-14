import ProdName from "./prodName";
import ProdPrice from "./prodPrice";
import ProdSeller from "./prodSeller";
import BtnsOfProd from "./btnsOfProd";
import ProdMainInfo from "./prodMainInfo";
import s from "../productCard.module.css";
import ProdAboutBlock from "./prodAboutBlock";
import React, { useEffect, useState } from "react";

const ProductCardInfo = ({ product }) => {
  // избранные товары
  const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem("favoriteProduct").includes(product.id)
  );

  useEffect(() => {
    const favoriteProducts = JSON.parse(
      localStorage.getItem("favoriteProduct")
    );
    favoriteProducts.includes(product.id)
      ? localStorage.setItem(
          "favoriteProduct",
          JSON.stringify([
            ...favoriteProducts.slice(0, favoriteProducts.indexOf(product.id)),
            ...favoriteProducts.slice(favoriteProducts.indexOf(product.id) + 1),
          ])
        )
      : localStorage.setItem(
          "favoriteProduct",
          JSON.stringify([...favoriteProducts, product.id])
        );
  }, [isFavorite, product.id]);

  return (
    <div className={s.productInfo}>
      <ProdName name={product.name} />
      <ProdPrice price={product.price} />
      <ProdMainInfo
        type={product.type}
        place={product.place}
        category={product.category}
      />
      <ProdAboutBlock textAbout={product.textAbout} />
      <ProdSeller seller={product.seller} />
      <BtnsOfProd
        seller={product.seller}
        isFavorite={isFavorite}
        setIsFavorite={setIsFavorite}
      />
    </div>
  );
};

export default ProductCardInfo;
