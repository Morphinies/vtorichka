import React from "react";
import InputPrice from "./inputPrice";
import BtnOpenFilter from "../btns/btnOpenFilter";

const PriceFilter = ({
  formData,
  setFormData,
  displayFilter,
  openedFilters,
  defaultFilters,
  // choosedFilters,
  // setChoosedFilters,
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
            // setChoosedFilters={setChoosedFilters}
            // choosedFilters={choosedFilters}
            id="minPrice"
            placeholder="min"
            formData={formData}
            setFormData={setFormData}
            defaultFilters={defaultFilters}
          />
          <InputPrice
            // setChoosedFilters={setChoosedFilters}
            // choosedFilters={choosedFilters}
            placeholder="max"
            id="maxPrice"
            formData={formData}
            setFormData={setFormData}
            defaultFilters={defaultFilters}
          />
        </>
      )}
    </>
  );
};

export default PriceFilter;
