import React from "react";
import s from "./sorting.module.css";
import v from "../sidebar.module.css";

const Sorting = ({
  hideBlock,
  sortingList,
  conditionsApplied,
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
              (conditionsApplied.sorting.value === sortingItem.value
                ? " " + s.choosedSorting
                : "")
            }
            onClick={() => {
              !equalObjects(sortingList, conditionsApplied) &&
                setConditionsApplied((prevState) => {
                  hideBlock();
                  return {
                    ...prevState,
                    sorting: { name: "сортировка", value: sortingItem.value },
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
