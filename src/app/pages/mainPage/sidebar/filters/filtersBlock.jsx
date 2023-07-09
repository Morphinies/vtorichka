import Filters from "./filters";
import v from "../sidebar.module.css";
import React, { useEffect, useState } from "react";
import BtnDisplayBlock from "../btnDisplayBlock";

const FiltersBlock = ({
  id,
  btnName,
  searchParams,
  openedSideBar,
  setSearchParams,
  changeOpenedSideBar,
}) => {
  const filtersList = ["minPrice", "maxPrice", "type"];
  const [formData, setFormData] = useState({});
  const [openedFilter, setOpenedFilter] = useState();
  const filtersIsOpened = openedSideBar === btnName;

  useEffect(() => {
    const filtersList = ["minPrice", "maxPrice", "type"];
    const updatedForm = {};
    filtersList.map((filter) => {
      if (searchParams.get(filter)) {
        updatedForm[filter] = searchParams.get(filter);
      }
      return "";
    });
    setFormData(updatedForm);
  }, [searchParams]);

  // открыть/закрыть фильтр
  const openFilter = (item) => {
    if (openedFilter === item) {
      setOpenedFilter(undefined);
    } else {
      setOpenedFilter(item);
    }
  };

  const clearParams = () => {
    filtersList.map((item) => {
      searchParams.delete(item);
      return setSearchParams(searchParams);
    });
  };

  const applyFilters = () => {
    clearParams();
    for (let param in formData) {
      searchParams.set(param, formData[param]);
      setSearchParams(searchParams);
    }
    changeOpenedSideBar("");
  };

  const clearFilters = () => {
    clearParams();
    setFormData({});
    changeOpenedSideBar("");
  };

  return (
    <nav
      className={
        v.categoriesNav + " " + (filtersIsOpened ? v.catNavOpened : "")
      }
      id={v["categoriesNav" + id]}
    >
      <BtnDisplayBlock
        blockHidden={!filtersIsOpened}
        btnName={btnName + (Object.keys(formData).length ? " *" : "")}
        hideBlock={() => changeOpenedSideBar(filtersIsOpened ? "" : btnName)}
      />

      {openedSideBar === btnName && (
        <Filters
          formData={formData}
          openFilter={openFilter}
          setFormData={setFormData}
          applyFilters={applyFilters}
          clearFilters={clearFilters}
          openedFilter={openedFilter}
        />
      )}
    </nav>
  );
};

export default FiltersBlock;
