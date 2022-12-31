import Filters from "./filters";
import v from "../sidebar.module.css";
import React, { useState } from "react";
import BtnDisplayBlock from "../btnDisplayBlock";

const FiltersBlock = ({
  id,
  btnName,
  defaultFilters,
  conditionsApplied,
  setConditionsApplied,
}) => {
  const [openedFilters, setOpenedFilters] = useState([]);
  const [formData, setFormData] = useState(defaultFilters);
  const [categoriesHidden, setCategoriesHidden] = useState(true);

  const hideFilters = () => {
    setCategoriesHidden(!categoriesHidden);
  };

  return (
    <nav
      className={v.categoriesNav + " " + (!categoriesHidden && v.catNavOpened)}
      id={v["categoriesNav" + id]}
    >
      <BtnDisplayBlock
        btnName={
          btnName
          // +
          // (filtersApplied.length === defaultFilters.length &&
          //   defaultFilters.map((filter) =>
          //     filtersApplied.includes(filter) && defaultFilters.includes(filter)
          //       ? ""
          //       : " *"
          //   ))
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
          setOpenedFilters={setOpenedFilters}
          conditionsApplied={conditionsApplied}
          setCategoriesHidden={setCategoriesHidden}
          setConditionsApplied={setConditionsApplied}

          // setFiltersApplied={setFiltersApplied}
          // appliedFilters={appliedFilters}
          // filtersApplied={filtersApplied}
          // applyFilters={applyFilters}
        />
      )}
    </nav>
  );
};

export default FiltersBlock;
