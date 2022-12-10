import React from "react";
import s from "../../../categories/categories.module.css";

const BtnApplyFilter = ({
  name,
  applyFilters,
  choosedFilters,
  appliedFilters,
}) => {
  const equalObjects = (obj1, obj2) => {
    return (
      JSON.stringify(Object.entries(obj1).sort()) ===
      JSON.stringify(Object.entries(obj2).sort())
    );
  };

  return (
    <button
      type="button"
      id={s.clickAnimate}
      className={
        s.categoriesBtn +
        " " +
        (equalObjects(choosedFilters, appliedFilters) && "disabled")
      }
      onClick={() => {
        if (equalObjects(choosedFilters, appliedFilters)) return;
        applyFilters(choosedFilters);
      }}
    >
      <p className={s.categoriesBtnText}>{name}</p>
    </button>
  );
};

export default BtnApplyFilter;
