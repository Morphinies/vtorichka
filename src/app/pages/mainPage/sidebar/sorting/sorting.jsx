import React, { useEffect, useState } from "react";
import SortingItem from "./sortingItem";
import api from "../../../../api";

const Sorting = ({ sort, activeSort }) => {
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
