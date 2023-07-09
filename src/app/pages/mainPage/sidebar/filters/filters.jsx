import React from "react";
import s from "./filters.module.css";
import TypeFilter from "./typeFilter/typeFilter";
import PriceFilter from "./priceFilter/priceFilter";
import BtnsApplyFilters from "./btns/btnsApplyFilters";

const Filters = ({
  formData,
  setFormData,
  clearFilters,
  applyFilters,
  openedFilter,
  openFilter,
}) => {
  return (
    <form className={s.filtersForm}>
      <PriceFilter
        formData={formData}
        openFilter={openFilter}
        setFormData={setFormData}
        isOpen={openedFilter === "цена"}
      />
      <TypeFilter
        formData={formData}
        openFilter={openFilter}
        setFormData={setFormData}
        isOpen={openedFilter === "тип"}
      />
      <BtnsApplyFilters
        applyFilters={applyFilters}
        clearFilters={clearFilters}
      />
    </form>
  );
};

export default Filters;
