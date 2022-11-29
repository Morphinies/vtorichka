import React from "react";
import s from "./categories.module.css";

const CategoriesDisplayBtn = ({ setCategoriesHidden, img, display }) => {
  return (
    <button
      className="btn"
      id={display ? s.categoriesHideBtn : s.categoriesShowBtn}
      onClick={() => setCategoriesHidden(display)}
    >
      <div
        className={
          display ? s.btnWrapper : s.btnWrapper + " " + s.btnWrapperShow
        }
      >
        <p className={s.categoriesHideText}>каталог</p>
        {display && <img className={s.imgCancel} src={img} alt="" />}
      </div>
    </button>
  );
};

export default CategoriesDisplayBtn;
