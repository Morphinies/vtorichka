import React from "react";
import s from "./sorting.module.css";
import v from "../sidebar.module.css";
import sortArrowImg from "../../../img/arrowSort.svg";
import sortArrowDownImg from "../../../img/arrowSortDown.svg";

const Sorting = ({ chooseSorting, choosedSorting }) => {
  const sortingList = [
    { name: "дате (c новых)", value: "dateToDown", img: sortArrowDownImg },
    { name: "дате (со старых)", value: "dateToUp", img: sortArrowImg },
    { name: "цене (с дорогих)", value: "priceToUp", img: sortArrowDownImg },
    { name: "цене (с дешевых)", value: "priceToDown", img: sortArrowImg },
  ];

  return (
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
          onClick={() => chooseSorting(sortingItem)}
        >
          <p className={v.btnDisplayCatText}>{sortingItem.name}</p>
          <img src={sortingItem.img} alt="" className={s.sortArrowImg} />
        </li>
      ))}
    </ul>
  );
};

export default Sorting;
