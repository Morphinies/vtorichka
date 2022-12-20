import React from "react";
import InputPrice from "./inputPrice";
import BtnOpenFilter from "../btns/btnOpenFilter";

const PriceFilter = ({
  displayFilter,
  openedFilters,
  choosedFilters,
  setChoosedFilters,
  // appliedFilters,
  // defaultFilters,
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
          />
          <InputPrice
            setChoosedFilters={setChoosedFilters}
            choosedFilters={choosedFilters}
            placeholder="max"
            name="maxPrice"
          />
        </>
      )}
    </>
  );
};

export default PriceFilter;
