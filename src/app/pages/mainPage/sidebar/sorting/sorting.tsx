import * as React from "react";
import { useEffect, useState } from "react";
import SortingItem from "./sortingItem";
import api from "../../../../api";

interface ISorting {
  sort: (val: string) => void;
  activeSort: string;
}
const Sorting = ({ sort, activeSort }: ISorting) => {
  const [sortingList, setSortingList] = useState([]);

  useEffect(() => {
    api.sortingList.fetchAll().then((data) => setSortingList(data));
  });

  return (
    <ul>
      {sortingList.map((sortingItem) => (
        <SortingItem
          sort={sort}
          key={sortingItem.name}
          activeSort={activeSort}
          sortingItem={sortingItem}
        />
      ))}
    </ul>
  );
};

export default Sorting;
