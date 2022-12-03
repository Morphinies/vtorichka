import React from "react";
import s from "../categories/categories.module.css";

const BtnApplyFilter = ({ choosedFilters }) => {
  const isEmpty = (obj) => {
    for (let i in obj) {
      return false;
    }
    return true;
  };

  return (
    <button
      type="button"
      id={s.applyFilterBtn}
      className={
        s.categoriesBtn + " " + (isEmpty(choosedFilters) && "disabled")
      }
      onClick={() => !isEmpty(choosedFilters) && console.log(choosedFilters)}
    >
      <p className={s.categoriesBtnText}>Применить</p>
    </button>
  );
};

export default BtnApplyFilter;
