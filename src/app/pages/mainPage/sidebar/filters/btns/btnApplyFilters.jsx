import React from "react";
import s from "../filters.module.css";

const BtnApplyFilters = ({ action, img, name }) => {
  return (
    <button
      type="button"
      onClick={() => action()}
      className={"btn " + s.btnApplyFilters}
    >
      <img src={img} alt={name} title={name} className={s.btnApplyFiltersImg} />
    </button>
  );
};

export default BtnApplyFilters;
