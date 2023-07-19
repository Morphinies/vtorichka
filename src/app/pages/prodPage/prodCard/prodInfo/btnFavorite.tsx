import * as React from "react";
import s from "../prodCard.module.css";
import { heart } from "../../../../img/pictures";
import { heartFill } from "../../../../img/pictures";

interface IBtnFavorite {
  isFavorite: boolean;
  updateFavorite: () => void;
}
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
        src={String(isFavorite ? heartFill : heart)}
      />
    </button>
  );
};

export default BtnFavorite;
