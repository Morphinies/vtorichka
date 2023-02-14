import React from "react";
import s from "../productCard.module.css";
import heart from "../../../img/heart.svg";
import heartFill from "../../../img/heartFill.svg";

const BtnFavorite = ({ isFavorite, setIsFavorite }) => {
  return (
    <button
      onClick={() => setIsFavorite(!isFavorite)}
      className={s.prodBtn + " " + s.btnFavorite}
    >
      <img
        alt=""
        title="избранное"
        className={s.prodBtnImg}
        src={isFavorite ? heartFill : heart}
      />
    </button>
  );
};

export default BtnFavorite;
