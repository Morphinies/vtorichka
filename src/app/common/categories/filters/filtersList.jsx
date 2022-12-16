import React from "react";
import PriceFilter from "./priceFilter/priceFilter";
import s from "../../categories/categories.module.css";
import BtnApplyFilter from "./btns/btnApplyFilter";
import BtnClearAllFilters from "./btns/btnClearAllFilters";
import TypeFilter from "./typeFilter/typeFilter";

const FiltersList = ({
  opacity,
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

  const equalObjects = (obj1, obj2) => {
    return (
      JSON.stringify(Object.entries(obj1).sort()) ===
      JSON.stringify(Object.entries(obj2).sort())
    );
  };

  return (
    <form className={s.filtersForm} id={!opacity ? s.opacity : ""}>
      <PriceFilter
        displayFilter={displayFilter}
        openedFilters={openedFilters}
        choosedFilters={choosedFilters}
        setChoosedFilters={setChoosedFilters}
      />

      <TypeFilter
        displayFilter={displayFilter}
        openedFilters={openedFilters}
        choosedFilters={choosedFilters}
        setChoosedFilters={setChoosedFilters}
      />

      <BtnApplyFilter
        name="применить"
        applyFilters={applyFilters}
        appliedFilters={appliedFilters}
        choosedFilters={choosedFilters}
        setCategoriesHidden={setCategoriesHidden}
      />

      {!equalObjects(defaultFilters, appliedFilters) && (
        <BtnClearAllFilters
          name="сбросить"
          applyFilters={applyFilters}
          choosedFilters={choosedFilters}
          defaultFilters={defaultFilters}
          setOpenedFilters={setOpenedFilters}
          setChoosedFilters={setChoosedFilters}
          setCategoriesHidden={setCategoriesHidden}
        />
      )}
    </form>
  );
};

export default FiltersList;
