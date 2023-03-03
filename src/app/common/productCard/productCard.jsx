import React from "react";
import s from "./productCard.module.css";
import ProductCardImg from "./prodImg/productCardImg";
import ProductCardInfo from "./prodInfo/productCardInfo";
import BtnCloseProduct from "./btnCloseProduct";

const ProductCard = ({ closeCard, product, openEditor }) => {
  return (
    <div className={s.productCard}>
      <BtnCloseProduct closeCard={closeCard} />
      <ProductCardImg product={product} />
      <ProductCardInfo product={product} openEditor={openEditor} />
    </div>
  );
};

export default ProductCard;
