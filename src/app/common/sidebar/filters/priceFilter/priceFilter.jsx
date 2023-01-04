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
            id="от"
            placeholder="min"
            formData={formData}
            setFormData={setFormData}
            defaultFilters={defaultFilters}
          />
          <InputPrice
            id="до"
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
