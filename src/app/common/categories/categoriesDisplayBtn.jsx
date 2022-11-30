import React from "react";
import s from "./categories.module.css";

const CategoriesDisplayBtn = ({ setCategoriesHidden, img, display }) => {
  return (
    <button
      className={s.categoriesBtn}
      id={display ? s.categoriesHideBtn : s.categoriesShowBtn}
      onClick={() => setCategoriesHidden(display)}
    >
      <p className={s.categoriesBtnText}>каталог</p>
      <img
        className={s.imgDisplayCat}
        id={display ? "" : s.imgArrowDown}
        src={img}
        alt=""
      />
    </button>
  );
};

export default CategoriesDisplayBtn;