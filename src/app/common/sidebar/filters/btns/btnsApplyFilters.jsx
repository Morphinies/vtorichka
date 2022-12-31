import React from "react";
import s from "../filters.module.css";
import apply from "../../../../img/apply.svg";
import reset from "../../../../img/reset.svg";

const BtnsApplyFilters = ({
  formData,
  setFormData,
  defaultFilters,
  setOpenedFilters,
  conditionsApplied,
  setCategoriesHidden,
  setConditionsApplied,
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
          "btn " +
          s.btnApplyFilters +
          " " +
          (equalObjects(conditionsApplied.filters, formData) ? "disabled" : "")
        }
        onClick={() => {
          if (equalObjects(conditionsApplied.filters, formData)) return;
          setConditionsApplied((prevState) => {
            return { ...prevState, filters: formData };
          });
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
          "btn " +
          s.btnApplyFilters +
          " " +
          (equalObjects(conditionsApplied.filters, defaultFilters)
            ? "disabled"
            : "")
        }
        onClick={() => {
          if (!equalObjects(conditionsApplied.filters, defaultFilters)) {
            setConditionsApplied((prevState) => {
              return { ...prevState, filters: defaultFilters };
            });
            setOpenedFilters([]);
            setFormData(defaultFilters);
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
