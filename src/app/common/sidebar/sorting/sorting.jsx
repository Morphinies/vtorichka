import React from "react";
import s from "./sorting.module.css";
import v from "../sidebar.module.css";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../../api";

const Sorting = ({ chooseSorting, choosedSorting, setConditionsApplied }) => {
  const [sortingList, setSortingList] = useState();
  useEffect(() => {
    api.sortingList.fetchAll().then((data) => setSortingList(data));
  }, []);

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
              chooseSorting(sortingItem);
              setConditionsApplied((prevState) => {
                console.log(prevState);
                return {
                  ...prevState,
                  sorting: { name: "сортировка", value: sortingItem },
                };
              });
            }}
          >
            <p className={v.btnDisplayCatText}>{sortingItem.name}</p>
            <img src={sortingItem.img} alt="" className={s.sortArrowImg} />
          </li>
        ))}
      </ul>
    )
  );
};

export default Sorting;
