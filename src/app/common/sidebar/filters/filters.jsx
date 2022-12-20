import React from "react";
import s from "./filters.module.css";
import TypeFilter from "./typeFilter/typeFilter";
import PriceFilter from "./priceFilter/priceFilter";
// import BtnsApplyFilters from "./btns/btnsApplyFilters";

const Filters = ({
  applyFilters,
  openedFilters,
  choosedFilters,
  appliedFilters,
  defaultFilters,
  setOpenedFilters,
  setChoosedFilters,
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
        displayFilter={displayFilter}
        openedFilters={openedFilters}
        choosedFilters={choosedFilters}
        appliedFilters={appliedFilters}
        defaultFilters={defaultFilters}
        setChoosedFilters={setChoosedFilters}
      />
      <TypeFilter
        displayFilter={displayFilter}
        openedFilters={openedFilters}
        choosedFilters={choosedFilters}
        setChoosedFilters={setChoosedFilters}
      />
      {/* <BtnsApplyFilters
        applyFilters={applyFilters}
        appliedFilters={appliedFilters}
        choosedFilters={choosedFilters}
        defaultFilters={defaultFilters}
        setOpenedFilters={setOpenedFilters}
        setChoosedFilters={setChoosedFilters}
        setCategoriesHidden={setCategoriesHidden}
      /> */}
    </form>
  );
};

export default Filters;
