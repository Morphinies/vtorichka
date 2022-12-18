import React from "react";
import s from "./categories.module.css";

const CategoriesDisplayBtn = ({
  img,
  display,
  btnName,
  setCategoriesHidden,
}) => {
  return (
    <button
      className={s.categoriesBtn}
      id={display ? s.categoriesHideBtn : s.categoriesShowBtn}
      onClick={() => {
        setCategoriesHidden(display);
      }}
    >
      <p className={s.categoriesBtnText}>{btnName}</p>
      <img
        className={s.imgDisplayCat}
        id={display ? "" : s.hidden}
        src={img}
        alt=""
      />
    </button>
  );
};

export default CategoriesDisplayBtn;
