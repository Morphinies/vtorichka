import React from "react";
import apply from "../../../../img/apply.svg";
import reset from "../../../../img/reset.svg";
import s from "../../../categories/categories.module.css";

const BtnsApplyFilters = ({
  applyFilters,
  choosedFilters,
  appliedFilters,
  setCategoriesHidden,
  setChoosedFilters,
  defaultFilters,
  setOpenedFilters,
}) => {
  const equalObjects = (obj1, obj2) => {
    return (
      JSON.stringify(Object.entries(obj1).sort()) ===
      JSON.stringify(Object.entries(obj2).sort())
    );
  };

  return (
    <div className={s.btnsApplyFilters}>
      <button
        type="button"
        className={
          s.btnApplyFilters +
          " " +
          (equalObjects(choosedFilters, appliedFilters) ? "disabled" : "")
        }
        onClick={() => {
          if (equalObjects(choosedFilters, appliedFilters)) return;
          applyFilters(choosedFilters);
          setCategoriesHidden(true);
        }}
      >
        <img
          className={s.btnApplyFiltersImg}
          src={apply}
          title="применить"
          alt="применить"
        />
      </button>

      <button
        type="button"
        className={
          s.btnApplyFilters +
          " " +
          (equalObjects(appliedFilters, defaultFilters) ? "disabled" : "")
        }
        onClick={() => {
          if (!equalObjects(appliedFilters, defaultFilters)) {
            applyFilters({ ...defaultFilters });
            setOpenedFilters([]);
            setChoosedFilters({ ...defaultFilters });
            setCategoriesHidden(true);
          }
        }}
      >
        <img
          className={s.btnApplyFiltersImg}
          title="сбросить"
          alt="сбросить"
          src={reset}
        />
      </button>
    </div>
  );
};

export default BtnsApplyFilters;
