import * as React from "react";
import { useEffect } from "react";
import s from "../products.module.css";
import arrowBack from "../../../img/arrowBack.svg";
import arrowNext from "../../../img/arrowNext.svg";
import { IBtnChangePhoto } from "../../../../types/types";

const BtnChangePhoto = ({
  x,
  setX,
  prod,
  maxVal,
  change,
}: IBtnChangePhoto): JSX.Element => {
  const id = "slide_" + prod._id;

  useEffect(() => {
    const slides: any = document.getElementById(id); //////!!!!!!!!!!!!!! добавить тип когда реализуется добавление фото
    for (let slide in slides.childNodes) {
      if (slides.childNodes[slide].className === s.productPhotoBtn) {
        slides.childNodes[slide].style.right = `${x}%`;
      }
    }
  }, [x, prod, id]);

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
