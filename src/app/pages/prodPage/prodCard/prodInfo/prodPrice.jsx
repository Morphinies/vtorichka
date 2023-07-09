import React from "react";
import s from "../prodCard.module.css";

const ProdPrice = ({ price }) => {
  return (
    <div className={s.priceWrap}>
      <h1 className={s.prodPrice}>{price}р</h1>
    </div>
  );
};

export default ProdPrice;
