import s from "./sorting.module.css";
import v from "../sidebar.module.css";
import React, { useState } from "react";
import BtnDisplayBlock from "../btnDisplayBlock";
import Sorting from "./sorting";

const SortingBlock = ({
  btnName,
  choosedSorting,
  setChoosedSorting,
  setConditionsApplied,
}) => {
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
          choosedSorting={choosedSorting}
          chooseSorting={setChoosedSorting}
          setConditionsApplied={setConditionsApplied} //
        />
      )}
    </nav>
  );
};

export default SortingBlock;
