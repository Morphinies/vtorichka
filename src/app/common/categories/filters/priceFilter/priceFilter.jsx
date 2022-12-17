import React from "react";
import BtnOpenFilter from "../btns/btnOpenFilter";
import InputPrice from "./inputPrice";

const PriceFilter = ({
  displayFilter,
  openedFilters,
  choosedFilters,
  setChoosedFilters,
  appliedFilters,
  defaultFilters,
}) => {
  return (
    <>
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
    </>
  );
};

export default PriceFilter;
