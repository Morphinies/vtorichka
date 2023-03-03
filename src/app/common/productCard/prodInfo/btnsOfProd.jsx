import React from "react";
import BtnWrite from "./btnWrite";
import BtnFavorite from "./btnFavorite";
import s from "../productCard.module.css";
import BtnCall from "./btnCall";
import { useLocation } from "react-router-dom";
import BtnEdit from "./btnEdit";

const BtnsOfProd = ({
  seller,
  productId,
  openEditor,
  isFavorite,
  setIsFavorite,
}) => {
  let currentPage = useLocation().pathname;

  return (
    <div className={s.prodBtns}>
      {currentPage !== "/personalArea" ? (
        <>
          <BtnWrite sellerId={seller.id} />
          <BtnFavorite isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
          <BtnCall phone={seller.phone} />
        </>
      ) : (
        <>
          <BtnEdit openEditor={openEditor} productId={productId} />
        </>
      )}
    </div>
  );
};

export default BtnsOfProd;
