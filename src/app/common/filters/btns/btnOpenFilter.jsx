import React from "react";
import arrowDown from "../../../img/arrowDown.svg";
import s from "../../categories/categories.module.css";

const BtnOpenFilter = ({ filterName, displayFilter, opened }) => {
  return (
    <button
      type="button"
      onClick={() => displayFilter(filterName)}
      className={s.categoriesBtn}
      id={opened ? s.openCatItem : ""}
    >
      <p className={s.categoriesBtnText}>{filterName}</p>
      <img className={s.imgArrowDown} alt="" src={arrowDown} />
    </button>
  );
};

export default BtnOpenFilter;
