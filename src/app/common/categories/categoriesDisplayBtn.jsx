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
      {display && <img className={s.imgCancel} src={img} alt="" />}
    </button>
  );
};

export default CategoriesDisplayBtn;
