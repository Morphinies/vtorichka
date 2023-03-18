import api from "../../../api";
import BtnCall from "./btnCall";
import BtnEdit from "./btnEdit";
import BtnWrite from "./btnWrite";
import BtnFavorite from "./btnFavorite";
import s from "../productCard.module.css";
import React, { useEffect, useState } from "react";

const BtnsOfProd = ({ product, isFavorite, updateFavorite, seller }) => {
  const [myProd, setMyProd] = useState();

  // проверка на "своё" объявление
  useEffect(() => {
    product &&
      api.products
        .isMyProd(product.id)
        .then((data) => setMyProd(data))
        .catch((reason) => setMyProd(reason));
  }, [product]);

  return (
    <div className={s.prodBtns}>
      {!myProd ? (
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
          <BtnEdit productId={product.id} />
        </>
      )}
    </div>
  );
};

export default BtnsOfProd;
