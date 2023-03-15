import React from "react";
import BtnWrite from "./btnWrite";
import BtnFavorite from "./btnFavorite";
import s from "../productCard.module.css";
import BtnCall from "./btnCall";
import { useLocation } from "react-router-dom";
import BtnEdit from "./btnEdit";

const BtnsOfProd = ({ seller, productId, isFavorite, updateFavorite }) => {
  let currentPage = useLocation().pathname;

  return (
    <div className={s.prodBtns}>
      {currentPage !== "/personalArea" ? (
        <>
          <BtnWrite sellerId={seller.id} />
          <BtnFavorite
            isFavorite={isFavorite}
            updateFavorite={updateFavorite}
          />
          <BtnCall phone={seller.phone} />
        </>
      ) : (
        <>
          <BtnEdit />
        </>
      )}
    </div>
  );
};

export default BtnsOfProd;
