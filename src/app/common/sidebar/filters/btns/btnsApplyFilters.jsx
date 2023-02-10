import React from "react";
import s from "../filters.module.css";
import BtnApplyFilters from "./btnApplyFilters";
import BtnClearFilters from "./btnClearFilters";

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
      <BtnApplyFilters
        formData={formData}
        equalObjects={equalObjects}
        conditionsApplied={conditionsApplied}
        setCategoriesHidden={setCategoriesHidden}
        setConditionsApplied={setConditionsApplied}
      />

      <BtnClearFilters
        setFormData={setFormData}
        equalObjects={equalObjects}
        defaultFilters={defaultFilters}
        setOpenedFilters={setOpenedFilters}
        conditionsApplied={conditionsApplied}
        setCategoriesHidden={setCategoriesHidden}
        setConditionsApplied={setConditionsApplied}
      />
    </div>
  );
};

export default BtnsApplyFilters;
