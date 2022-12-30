import React from "react";
import InputPrice from "./inputPrice";
import BtnOpenFilter from "../btns/btnOpenFilter";

const PriceFilter = ({
  formData,
  setFormData,
  displayFilter,
  openedFilters,
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
            id="minPrice"
            placeholder="min"
            formData={formData}
            setFormData={setFormData}
            defaultFilters={defaultFilters}
          />
          <InputPrice
            id="maxPrice"
            placeholder="max"
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
