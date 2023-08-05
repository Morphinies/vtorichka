import * as React from "react";
import s from "./sorting.module.css";
import SortingItem from "./sortingItem";
import { ISorting } from "../../../../../types/types";
import { useAppSelector } from "../../../../redux/hooks/hooks";
import ErrorMessage from "../../../../common/errorMes/errorMessage";
import { selectSortsList } from "../../../../redux/slices/sortsListSlice";

const Sorting = ({ sort, activeSort }: ISorting) => {
    const sortsList = useAppSelector(selectSortsList);
    const status = sortsList.status;

    const content = () => {
        switch (status) {
            case "succeeded":
                return sortsList.value.map((sortingItem) => (
                    <SortingItem
                        sort={sort}
                        key={sortingItem.name}
                        activeSort={activeSort}
                        sortingItem={sortingItem}
                    />
                ));
            case "loading":
                return <p className={s.loading}>загрузка...</p>;

            case "failed":
                return (
                    <ErrorMessage message="список сортировок недоступен, попробуйте перезагрузить страицу" />
                );
        }
    };

    return <ul>{content()}</ul>;
};

export default Sorting;
