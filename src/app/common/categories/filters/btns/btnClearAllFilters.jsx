import React from "react";
import s from "../../../categories/categories.module.css";

const BtnClearAllFilters = ({
  applyFilters,
  defaultFilters,
  choosedFilters,
  setOpenedFilters,
  setChoosedFilters,
}) => {
  return (
    <button
      type="button"
      id={s.clearAllFilterBtn}
      className={s.categoriesBtn}
      onClick={() => {
        applyFilters({ ...defaultFilters });
        setOpenedFilters([]);
        setChoosedFilters({ ...defaultFilters });
      }}
    >
      <p className={s.categoriesBtnText}>сбросить</p>
    </button>
  );
};

export default BtnClearAllFilters;
