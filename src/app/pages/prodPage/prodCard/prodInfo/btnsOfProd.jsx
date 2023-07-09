import BtnCall from "./btnCall";
import BtnEdit from "./btnEdit";
import BtnWrite from "./btnWrite";
import BtnFavorite from "./btnFavorite";
import s from "../prodCard.module.css";
import React, { useEffect, useState } from "react";

const BtnsOfProd = ({ product, isFavorite, updateFavorite, seller }) => {
  const [myProd, setMyProd] = useState();
  // проверка на "своё" объявление
  useEffect(() => {
    const userIdOnLS = JSON.parse(localStorage.getItem("user"));
    if (userIdOnLS === product.seller) {
      setMyProd(true);
    }
  }, [product.seller]);

  return (
    <div className={s.prodBtns}>
      {!myProd ? (
        <>
          <BtnWrite sellerId={seller._id} />
          <BtnFavorite
            isFavorite={isFavorite}
            updateFavorite={updateFavorite}
          />
          <BtnCall phone={seller.phone} />
        </>
      ) : (
        <>
          <BtnEdit productId={product._id} />
        </>
      )}
    </div>
  );
};

export default BtnsOfProd;
