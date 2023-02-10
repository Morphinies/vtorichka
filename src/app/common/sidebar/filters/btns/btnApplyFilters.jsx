import React from "react";
import s from "../filters.module.css";
import apply from "../../../../img/apply.svg";

const BtnApplyFilters = ({
  formData,
  equalObjects,
  conditionsApplied,
  setCategoriesHidden,
  setConditionsApplied,
}) => {
  const applyFilters = () => {
    if (equalObjects(conditionsApplied.filters, formData)) return;
    setConditionsApplied((prevState) => {
      return { ...prevState, filters: formData };
    });
    setCategoriesHidden(true);
  };

  return (
    <button
      type="button"
      className={
        "btn " +
        s.btnApplyFilters +
        " " +
        (equalObjects(conditionsApplied.filters, formData) ? "disabled" : "")
      }
      onClick={() => applyFilters()}
    >
      <img
        className={s.btnApplyFiltersImg}
        src={apply}
        title="применить"
        alt="применить"
      />
    </button>
  );
};

export default BtnApplyFilters;
