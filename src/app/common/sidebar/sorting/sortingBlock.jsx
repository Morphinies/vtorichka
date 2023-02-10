import api from "../../../api";
import Sorting from "./sorting";
import s from "./sorting.module.css";
import v from "../sidebar.module.css";
import React, { useEffect, useState } from "react";
import BtnDisplayBlock from "../btnDisplayBlock";

const SortingBlock = ({
  btnName,
  openedSideBar,
  changeOpenedSideBar,
  defaultSorting,
  conditionsApplied,
  setConditionsApplied,
}) => {
  // sorting list
  const [sortingList, setSortingList] = useState();
  useEffect(() => {
    api.sortingList.fetchAll().then((data) => setSortingList(data));
  }, []);

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
      id={s.sorting}
    >
      <BtnDisplayBlock
        btnName={
          btnName +
          (openedSideBar !== btnName &&
          !equalObjects(conditionsApplied.sorting, defaultSorting)
            ? " *"
            : "")
        }
        hideBlock={() =>
          changeOpenedSideBar(openedSideBar === btnName ? "" : btnName)
        }
        blockHidden={openedSideBar !== btnName}
      />

      {openedSideBar === btnName && (
        <Sorting
          sortingList={sortingList}
          conditionsApplied={conditionsApplied}
          setConditionsApplied={setConditionsApplied}
          hideBlock={() =>
            changeOpenedSideBar(openedSideBar === btnName ? "" : btnName)
          }
        />
      )}
    </nav>
  );
};

export default SortingBlock;
