import React from "react";
import s from "../productCard.module.css";
import heart from "../../../img/heart.svg";
import heartFill from "../../../img/heartFill.svg";

const BtnFavorite = ({ isFavorite, updateFavorite }) => {
  return (
    <button
      onClick={() => updateFavorite()}
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
