import React from "react";
import s from "../filters.module.css";
import reset from "../../../../img/reset.svg";

const BtnClearFilters = ({
  setFormData,
  equalObjects,
  defaultFilters,
  setOpenedFilters,
  conditionsApplied,
  setCategoriesHidden,
  setConditionsApplied,
}) => {
  const clearFilters = () => {
    if (!equalObjects(conditionsApplied.filters, defaultFilters)) {
      setConditionsApplied((prevState) => {
        return { ...prevState, filters: defaultFilters };
      });
      setOpenedFilters([]);
      setFormData(defaultFilters);
      setCategoriesHidden(true);
    }
  };

  return (
    <button
      type="button"
      className={
        "btn " +
        s.btnApplyFilters +
        " " +
        (equalObjects(conditionsApplied.filters, defaultFilters)
          ? "disabled"
          : "")
      }
      onClick={() => clearFilters()}
    >
      <img
        className={s.btnApplyFiltersImg}
        title="сбросить"
        alt="сбросить"
        src={reset}
      />
    </button>
  );
};

export default BtnClearFilters;
