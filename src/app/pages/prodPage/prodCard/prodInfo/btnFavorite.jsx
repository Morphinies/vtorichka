import React from "react";
import s from "../prodCard.module.css";
import { heart } from "../../../../img/pictures";
import { heartFill } from "../../../../img/pictures";

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
