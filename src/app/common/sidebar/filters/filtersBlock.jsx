import Filters from "./filters";
import v from "../sidebar.module.css";
import React, { useState } from "react";
import BtnDisplayBlock from "../btnDisplayBlock";

const FiltersBlock = ({
  id,
  btnName,
  openedSideBar,
  defaultFilters,
  conditionsApplied,
  changeOpenedSideBar,
  setConditionsApplied,
}) => {
  const [openedFilters, setOpenedFilters] = useState([]);
  const [formData, setFormData] = useState(defaultFilters);

  const equalObjects = (obj1, obj2) => {
    return (
      JSON.stringify(Object.entries(obj1).sort()) ===
      JSON.stringify(Object.entries(obj2).sort())
    );
  };

  return (
    <nav
      className={
        v.categoriesNav + " " + (openedSideBar === btnName && v.catNavOpened)
      }
      id={v["categoriesNav" + id]}
    >
      <BtnDisplayBlock
        btnName={
          btnName +
          (equalObjects(conditionsApplied.filters, defaultFilters) ? "" : " *")
        }
        blockHidden={openedSideBar !== btnName}
        hideBlock={() => {
          changeOpenedSideBar(openedSideBar === btnName ? "" : btnName);
        }}
      />

      {openedSideBar === btnName && (
        <Filters
          formData={formData}
          setFormData={setFormData}
          openedFilters={openedFilters}
          defaultFilters={defaultFilters}
          setOpenedFilters={setOpenedFilters}
          conditionsApplied={conditionsApplied}
          setCategoriesHidden={() => {
            changeOpenedSideBar(openedSideBar === btnName ? "" : btnName);
          }}
          setConditionsApplied={setConditionsApplied}
        />
      )}
    </nav>
  );
};

export default FiltersBlock;
