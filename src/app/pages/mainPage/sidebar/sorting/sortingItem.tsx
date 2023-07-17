import * as React from "react";
import s from "./sorting.module.css";
import v from "../sidebar.module.css";

interface ISortingItem {
  sort: (val: string) => void;
  sortingItem: {
    name: string;
    img: string;
  };
  activeSort: string;
}
const SortingItem = ({
  sort,
  sortingItem,
  activeSort,
}: ISortingItem): JSX.Element => {
  const sortingIsActive: boolean = activeSort === sortingItem.name;

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
