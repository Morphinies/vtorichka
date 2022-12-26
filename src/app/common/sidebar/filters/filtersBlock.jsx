import Filters from "./filters";
import v from "../sidebar.module.css";
import React, { useState } from "react";
import BtnDisplayBlock from "../btnDisplayBlock";

const FiltersBlock = ({
  id,
  btnName,
  applyFilters,
  appliedFilters,
  defaultFilters,
  filtersApplied,
  setFiltersApplied,
}) => {
  const [openedFilters, setOpenedFilters] = useState([]);
  const [categoriesHidden, setCategoriesHidden] = useState(true);
  const [formData, setFormData] = useState(defaultFilters);

  const hideFilters = () => {
    setCategoriesHidden(!categoriesHidden);
  };

  // console.log(filtersApplied);
  // console.log(defaultFilters);

  return (
    <nav
      className={v.categoriesNav + " " + (!categoriesHidden && v.catNavOpened)}
      id={v["categoriesNav" + id]}
    >
      <BtnDisplayBlock
        btnName={
          btnName +
          (filtersApplied.length === defaultFilters.length &&
            defaultFilters.map((filter) =>
              filtersApplied.includes(filter) && defaultFilters.includes(filter)
                ? ""
                : " *"
            ))
        }
        blockHidden={categoriesHidden}
        hideBlock={hideFilters}
      />

      {!categoriesHidden && (
        <Filters
          formData={formData}
          setFormData={setFormData}
          openedFilters={openedFilters}
          defaultFilters={defaultFilters}
          filtersApplied={filtersApplied}
          setOpenedFilters={setOpenedFilters}
          setFiltersApplied={setFiltersApplied}
          setCategoriesHidden={setCategoriesHidden}
          // appliedFilters={appliedFilters}
          // applyFilters={applyFilters}
        />
      )}
    </nav>
  );
};

export default FiltersBlock;
