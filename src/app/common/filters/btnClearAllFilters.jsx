import React from "react";
import s from "../categories/categories.module.css";

const BtnClearAllFilters = ({ choosedFilters, applyFilters }) => {
  const isEmpty = (obj) => {
    for (let i in obj) {
      return false;
    }
    return true;
  };

  return (
    <button
      type="button"
      id={s.clearAllFilterBtn}
      className={
        s.categoriesBtn + " " + (isEmpty(choosedFilters) && "disabled")
      }
      onClick={() => {
        if (isEmpty(choosedFilters)) return;
        applyFilters({});
      }}
    >
      <p className={s.categoriesBtnText}>сбросить</p>
    </button>
  );
};

export default BtnClearAllFilters;
