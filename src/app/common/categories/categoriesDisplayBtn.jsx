import React from "react";
import s from "./categories.module.css";

const CategoriesDisplayBtn = ({ setCategoriesHidden, img, display }) => {
  return (
    <button
      className="btn"
      id={s.categoriesHideBtn}
      onClick={() => setCategoriesHidden(display)}
    >
      <p className={s.categoriesHideText}>категории</p>
      <img className={s.imgCancel} src={img} alt="" />
    </button>
  );
};

export default CategoriesDisplayBtn;
