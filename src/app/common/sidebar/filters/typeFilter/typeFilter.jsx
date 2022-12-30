import React from "react";
import InputType from "./inputType";
import BtnOpenFilter from "../btns/btnOpenFilter";

const TypeFilter = ({
  formData,
  setFormData,
  displayFilter,
  openedFilters,
  defaultFilters,
}) => {
  return (
    <>
      <BtnOpenFilter
        filterName="тип"
        displayFilter={displayFilter}
        opened={openedFilters.includes("тип")}
      />
      {openedFilters.includes("тип") && (
        <>
          <InputType formData={formData} setFormData={setFormData} />
        </>
      )}
    </>
  );
};

export default TypeFilter;
