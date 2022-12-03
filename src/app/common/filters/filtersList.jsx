import InputPrice from "./inputPrice";
import React, { useState } from "react";
import BtnOpenFilter from "./btnOpenFilter";
import s from "../categories/categories.module.css";
import BtnApplyFilter from "./btnApplyFilter";

const FiltersList = ({ filters, chooseFilters, opacity }) => {
  const [openedFilters, setOpenedFilters] = useState([]);
  const [choosedFilters, setChoosedFilters] = useState({});

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
        filterName={"цена"}
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
      <BtnApplyFilter choosedFilters={choosedFilters} />
    </form>
  );
};

export default FiltersList;
