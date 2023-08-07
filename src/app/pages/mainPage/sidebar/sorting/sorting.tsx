import * as React from "react";
import SortingItem from "./sortingItem";
import { ISorting } from "../../../../../types/types";
import { useAppSelector } from "../../../../redux/hooks/hooks";
import { selectSortsList } from "../../../../redux/slices/sortsListSlice";

const Sorting = ({ sort, activeSort }: ISorting) => {
    const sortsList = useAppSelector(selectSortsList).value;

    return (
        <ul>
            {sortsList.map((sortingItem) => (
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
