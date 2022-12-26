import React from "react";
import s from "./filters.module.css";
// import TypeFilter from "./typeFilter/typeFilter";
import PriceFilter from "./priceFilter/priceFilter";
// import BtnsApplyFilters from "./btns/btnsApplyFilters";

const Filters = ({
  // applyFilters,
  // appliedFilters,
  formData,
  setFormData,
  openedFilters,
  defaultFilters,
  filtersApplied,
  setOpenedFilters,
  setFiltersApplied,
  setCategoriesHidden,
}) => {
  const displayFilter = (item) => {
    openedFilters.includes(item)
      ? setOpenedFilters((arr) =>
          arr
            .slice(0, arr.indexOf(item))
            .concat(arr.slice(arr.indexOf(item) + 1))
        )
      : setOpenedFilters((arr) => arr.concat(item));
  };

  return (
    <form className={s.filtersForm}>
      <PriceFilter
        formData={formData}
        setFormData={setFormData}
        displayFilter={displayFilter}
        openedFilters={openedFilters}
        defaultFilters={defaultFilters}
      />
      {/* <TypeFilter
        formData={formData}
        setFormData={setFormData}
        displayFilter={displayFilter}
        openedFilters={openedFilters}
        defaultFilters={defaultFilters}
      /> */}
      {/* <BtnsApplyFilters
        formData={formData}
        setFormData={setFormData}
        defaultFilters={defaultFilters}
        filtersApplied={filtersApplied}
        setOpenedFilters={setOpenedFilters}
        setFiltersApplied={setFiltersApplied}
        setCategoriesHidden={setCategoriesHidden}
        // applyFilters={applyFilters}
        // appliedFilters={appliedFilters}
      /> */}
    </form>
  );
};

export default Filters;
