import React from "react";
import s from "../categories/categories.module.css";

const BtnApplyFilter = ({ choosedFilters, applyFilters, name }) => {
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
      onClick={() => {
        if (isEmpty(choosedFilters)) return;
        applyFilters(choosedFilters);
      }}
    >
      <p className={s.categoriesBtnText}>{name}</p>
    </button>
  );
};

export default BtnApplyFilter;
