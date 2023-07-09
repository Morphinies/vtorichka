import React, { useEffect, useState } from "react";
import Sorting from "./sorting";
import s from "./sorting.module.css";
import v from "../sidebar.module.css";
import BtnDisplayBlock from "../btnDisplayBlock";

const SortingBlock = ({
  btnName,
  searchParams,
  openedSideBar,
  setSearchParams,
  changeOpenedSideBar,
}) => {
  const defSort = "с новых";
  const blockIsOpen = openedSideBar === btnName;
  const [activeSort, setActiveSort] = useState(defSort);

  const handleClick = (name) => {
    if (openedSideBar === name) changeOpenedSideBar("");
    else changeOpenedSideBar(name);
  };

  const setSortParam = (value) => {
    if (value !== defSort) {
      searchParams.set("sort", value);
    } else {
      searchParams.delete("sort");
    }
    setSearchParams(searchParams);
    changeOpenedSideBar("");
  };

  useEffect(() => {
    if (searchParams.get("sort")) {
      setActiveSort(searchParams.get("sort"));
    } else {
      setActiveSort(defSort);
    }
  }, [searchParams]);

  return (
    <nav
      className={v.categoriesNav + " " + (blockIsOpen && v.catNavOpened)}
      id={s.sorting}
    >
      <BtnDisplayBlock
        btnName={btnName + (activeSort !== defSort ? " *" : "")}
        hideBlock={() => handleClick(btnName)}
        blockHidden={openedSideBar !== btnName}
      />
      {blockIsOpen && <Sorting sort={setSortParam} activeSort={activeSort} />}
    </nav>
  );
};

export default SortingBlock;
