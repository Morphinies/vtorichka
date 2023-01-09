import api from "../../../api";
import Sorting from "./sorting";
import s from "./sorting.module.css";
import v from "../sidebar.module.css";
import React, { useEffect, useState } from "react";
import BtnDisplayBlock from "../btnDisplayBlock";

const SortingBlock = ({
  btnName,
  defaultSorting,
  conditionsApplied,
  setConditionsApplied,
}) => {
  const [blockHidden, setBlockHidden] = useState(true);

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
      className={v.categoriesNav + " " + (!blockHidden && v.catNavOpened)}
      id={s.sorting}
    >
      <BtnDisplayBlock
        btnName={
          btnName +
          (blockHidden &&
          !equalObjects(conditionsApplied.sorting, defaultSorting)
            ? " *"
            : "")
        }
        hideBlock={() => setBlockHidden(!blockHidden)}
        blockHidden={blockHidden}
      />

      {!blockHidden && (
        <Sorting
          sortingList={sortingList}
          conditionsApplied={conditionsApplied}
          setConditionsApplied={setConditionsApplied}
          hideBlock={() => setBlockHidden(!blockHidden)}
        />
      )}
    </nav>
  );
};

export default SortingBlock;
