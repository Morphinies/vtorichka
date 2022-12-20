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
}) => {
  const [openedFilters, setOpenedFilters] = useState([]);
  const [categoriesHidden, setCategoriesHidden] = useState(true);
  const [choosedFilters, setChoosedFilters] = useState(defaultFilters);

  const equalObjects = (obj1, obj2) => {
    return (
      JSON.stringify(Object.entries(obj1).sort()) ===
      JSON.stringify(Object.entries(obj2).sort())
    );
  };

  const hideFlters = () => {
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
          (appliedFilters &&
            (equalObjects(appliedFilters, defaultFilters) ? "" : " *"))
        }
        blockHidden={categoriesHidden}
        hideBlock={hideFlters}
      />

      {!categoriesHidden && (
        <Filters
          applyFilters={applyFilters}
          openedFilters={openedFilters}
          choosedFilters={choosedFilters}
          appliedFilters={appliedFilters}
          defaultFilters={defaultFilters}
          setOpenedFilters={setOpenedFilters}
          setChoosedFilters={setChoosedFilters}
          setCategoriesHidden={setCategoriesHidden}
        />
      )}
    </nav>
  );
};

export default FiltersBlock;
