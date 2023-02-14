import React from "react";
import BtnWrite from "./btnWrite";
import BtnFavorite from "./btnFavorite";
import s from "../productCard.module.css";
import BtnCall from "./btnCall";

const BtnsOfProd = ({ isFavorite, setIsFavorite, seller }) => {
  return (
    <div className={s.prodBtns}>
      <BtnWrite sellerId={seller.id} />
      <BtnFavorite isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
      <BtnCall phone={seller.phone} />
    </div>
  );
};

export default BtnsOfProd;
