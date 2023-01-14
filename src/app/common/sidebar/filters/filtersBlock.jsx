import Filters from "./filters";
import v from "../sidebar.module.css";
import React, { useEffect, useState } from "react";
import BtnDisplayBlock from "../btnDisplayBlock";

const FiltersBlock = ({
  id,
  btnName,
  defaultFilters,
  categoriesHidden,
  conditionsApplied,
  setCategoriesHidden,
  setConditionsApplied,
}) => {
  const [openedFilters, setOpenedFilters] = useState([]);
  const [formData, setFormData] = useState(defaultFilters);

  useEffect(() => {
    categoriesHidden && setOpenedFilters([]);
  }, [categoriesHidden]);

  const equalObjects = (obj1, obj2) => {
    return (
      JSON.stringify(Object.entries(obj1).sort()) ===
      JSON.stringify(Object.entries(obj2).sort())
    );
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
        hideBlock={setCategoriesHidden}
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
