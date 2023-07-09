import React from "react";
import s from "../prodCard.module.css";
import { arrowNext } from "../../../../img/pictures";
import { arrowBack } from "../../../../img/pictures";

const BtnsChangeImg = ({ imgBack, imgForward, showedImg, imgTotal }) => {
  return (
    <>
      {showedImg < imgTotal - 1 && (
        <button
          id={s.btnImgForward}
          onClick={imgForward}
          className={s.btnChangeImg}
        >
          <img className={s.imgArrow} src={arrowNext} alt="" />
        </button>
      )}

      {showedImg > 0 && (
        <button id={s.btnImgBack} onClick={imgBack} className={s.btnChangeImg}>
          <img className={s.imgArrow} src={arrowBack} alt="" />
        </button>
      )}
    </>
  );
};

export default BtnsChangeImg;
