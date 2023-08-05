import * as React from "react";
import api from "../../../../api";
import SortingItem from "./sortingItem";
import { useEffect, useState } from "react";
import { ISorting } from "../../../../../types/types";

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
