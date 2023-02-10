import React from "react";
import s from "../products.module.css";
import arrowBack from "../../../img/arrowBack.svg";
import arrowNext from "../../../img/arrowNext.svg";
import { useEffect } from "react";

const BtnChangePhoto = ({ i, x, setX, maxVal, change }) => {
  const id = "slide_" + i.id;

  useEffect(() => {
    const slides = document.getElementById(id);
    for (let slide in slides.childNodes) {
      if (slides.childNodes[slide].className === s.productPhotoBtn) {
        slides.childNodes[slide].style.right = `${x}%`;
      }
    }
  }, [x, i, id]);

  return (
    <>
      {change === "prev" && (
        <button
          onClick={() => {
            if (x > 0) {
              setX(x - 100);
            }
          }}
          className={s.btnChangeImg + " " + s.btnArrowBack}
        >
          <img alt="" src={arrowBack} className={s.arrowChangeImg} />
        </button>
      )}

      {change === "next" && (
        <button
          onClick={() => {
            if (x < maxVal - 100) {
              setX(x + 100);
            }
          }}
          className={s.btnChangeImg + " " + s.btnArrowNext}
        >
          <img alt="" src={arrowNext} className={s.arrowChangeImg} />
        </button>
      )}
    </>
  );
};

export default BtnChangePhoto;
