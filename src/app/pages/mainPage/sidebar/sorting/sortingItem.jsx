import React from "react";
import s from "./sorting.module.css";
import v from "../sidebar.module.css";

const SortingItem = ({ sort, sortingItem, activeSort }) => {
  const sortingIsActive = activeSort === sortingItem.name;

  return (
    <li
      className={
        v.btnDisplayCat + " " + (sortingIsActive ? s.choosedSorting : "")
      }
      onClick={() => sort(sortingItem.name)}
    >
      <p className={v.btnDisplayCatText}>{sortingItem.name}</p>
      <img src={sortingItem.img} alt="" className={s.sortArrowImg} />
    </li>
  );
};

export default SortingItem;
