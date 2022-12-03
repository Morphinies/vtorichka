import InputPrice from "./inputPrice";
import React from "react";
import BtnOpenFilter from "./btnOpenFilter";
import BtnApplyFilter from "./btnApplyFilter";
import s from "../categories/categories.module.css";

const FiltersList = ({
  opacity,
  applyFilters,
  openedFilters,
  choosedFilters,
  setOpenedFilters,
  setChoosedFilters,
}) => {
  const displayFilter = (item) => {
    openedFilters.includes(item)
      ? setOpenedFilters((arr) =>
          arr.slice(0, arr.indexOf(item)).concat(arr.indexOf(item) + 1)
        )
      : setOpenedFilters((arr) => arr.concat(item));
  };

  return (
    <form className={s.filtersForm} id={!opacity ? s.opacity : ""}>
      <BtnOpenFilter
        filterName="цена"
        displayFilter={displayFilter}
        opened={openedFilters.includes("цена")}
      />
      {openedFilters.includes("цена") && (
        <>
          <InputPrice
            setChoosedFilters={setChoosedFilters}
            choosedFilters={choosedFilters}
            placeholder="min"
            name="minPrice"
            label="от"
          />
          <InputPrice
            setChoosedFilters={setChoosedFilters}
            choosedFilters={choosedFilters}
            placeholder="max"
            name="maxPrice"
            label="до"
          />
        </>
      )}
      <BtnApplyFilter
        choosedFilters={choosedFilters}
        applyFilters={applyFilters}
        name="применить"
      />
    </form>
  );
};

export default FiltersList;
