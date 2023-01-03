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

  const equalObjects = (obj1, obj2) => {
    return (
      JSON.stringify(Object.entries(obj1).sort()) ===
      JSON.stringify(Object.entries(obj2).sort())
    );
  };

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
          btnName +
          (equalObjects(conditionsApplied.filters, defaultFilters) ? "" : " *")
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
        />
      )}
    </nav>
  );
};

export default FiltersBlock;
