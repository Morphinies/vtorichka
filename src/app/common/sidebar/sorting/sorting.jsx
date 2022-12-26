import React from "react";
import s from "./sorting.module.css";
import v from "../sidebar.module.css";

const Sorting = ({
  sortingList,
  chooseSorting,
  choosedSorting,
  setConditionsApplied,
}) => {
  const equalObjects = (obj1, obj2) => {
    return (
      JSON.stringify(Object.entries(obj1).sort()) ===
      JSON.stringify(Object.entries(obj2).sort())
    );
  };

  return (
    sortingList && (
      <ul>
        {sortingList.map((sortingItem) => (
          <li
            key={sortingItem.value}
            className={
              v.btnDisplayCat +
              (choosedSorting.value === sortingItem.value
                ? " " + s.choosedSorting
                : "")
            }
            onClick={() => {
              !equalObjects(choosedSorting, sortingItem) &&
                chooseSorting(sortingItem) &&
                setConditionsApplied((prevState) => {
                  console.log(prevState);
                  return {
                    ...prevState,
                    sorting: { name: "сортировка", value: sortingItem },
                  };
                });
            }}
          >
            <p className={v.btnDisplayCatText}>{sortingItem.value}</p>
            <img src={sortingItem.img} alt="" className={s.sortArrowImg} />
          </li>
        ))}
      </ul>
    )
  );
};

export default Sorting;
