import React from "react";
import s from "./sorting.module.css";
import v from "../sidebar.module.css";

const SortingItem = ({
  hideBlock,
  sortingItem,
  sortingList,
  equalObjects,
  conditionsApplied,
  setConditionsApplied,
}) => {
  const sort = () => {
    !equalObjects(sortingList, conditionsApplied) &&
      setConditionsApplied((prevState) => {
        hideBlock();
        return {
          ...prevState,
          sorting: { name: "сортировка", value: sortingItem.value },
        };
      });
  };

  return (
    <li
      className={
        v.btnDisplayCat +
        (conditionsApplied.sorting.value === sortingItem.value
          ? " " + s.choosedSorting
          : "")
      }
      onClick={() => sort()}
    >
      <p className={v.btnDisplayCatText}>{sortingItem.value}</p>
      <img src={sortingItem.img} alt="" className={s.sortArrowImg} />
    </li>
  );
};

export default SortingItem;
