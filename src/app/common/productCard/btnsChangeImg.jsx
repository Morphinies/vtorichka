import React from "react";
import s from "./productCard.module.css";
import arrowBack from "../../img/arrowBack.svg";
import arrowNext from "../../img/arrowNext.svg";

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
