import React from "react";
import InputType from "./inputType";
import BtnOpenFilter from "../btns/btnOpenFilter";

const TypeFilter = ({
  displayFilter,
  openedFilters,
  choosedFilters,
  setChoosedFilters,
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
          <InputType
            choosedFilters={choosedFilters}
            setChoosedFilters={setChoosedFilters}
          />
        </>
      )}
    </>
  );
};

export default TypeFilter;
