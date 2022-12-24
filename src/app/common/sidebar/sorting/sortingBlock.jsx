import s from "./sorting.module.css";
import v from "../sidebar.module.css";
import React, { useState } from "react";
import BtnDisplayBlock from "../btnDisplayBlock";
import Sorting from "./sorting";

const SortingBlock = ({ btnName, choosedSorting, setChoosedSorting }) => {
  const [blockHidden, setBlockHidden] = useState(true);

  return (
    <nav
      className={v.categoriesNav + " " + (!blockHidden && v.catNavOpened)}
      id={s.sorting}
    >
      <BtnDisplayBlock
        btnName={btnName + (!blockHidden ? " по:" : "")}
        hideBlock={() => setBlockHidden(!blockHidden)}
        blockHidden={blockHidden}
      />

      {!blockHidden && (
        <Sorting
          chooseSorting={setChoosedSorting}
          choosedSorting={choosedSorting}
        />
      )}
    </nav>
  );
};

export default SortingBlock;
