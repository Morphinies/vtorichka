import * as React from "react";
import s from "../prodCard.module.css";
import { heart } from "../../../../img/pictures";
import { heartFill } from "../../../../img/pictures";
import { IBtnFavorite } from "../../../../../types/types";

const BtnFavorite = ({
  isFavorite,
  updateFavorite,
}: IBtnFavorite): JSX.Element => {
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
