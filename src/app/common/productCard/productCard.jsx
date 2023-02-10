import React from "react";
import s from "./productCard.module.css";
import ProductCardImg from "./productCardImg";
import BtnCloseProduct from "./btnCloseProduct";
import ProductCardInfo from "./productCardInfo";

const ProductCard = ({ closeCard, product }) => {
  return (
    <div className={s.productCard}>
      <BtnCloseProduct closeCard={closeCard} />
      <ProductCardImg product={product} />
      <ProductCardInfo product={product} />
    </div>
  );
};

export default ProductCard;
