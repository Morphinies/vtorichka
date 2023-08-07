import * as React from "react";
import Sorting from "./sorting";
import s from "./sorting.module.css";
import v from "../sidebar.module.css";
import { useEffect, useState } from "react";
import BtnDisplayBlock from "../btnDisplayBlock";
import { ISortingBlock } from "../../../../../types/types";
import { useSearchParams } from "react-router-dom";

const SortingBlock = ({
    btnName,
    openedSideBar,
    changeOpenedSideBar,
}: ISortingBlock): JSX.Element => {
    const [searchParams, setSearchParams] = useSearchParams();
    const defSort = "с новых";
    const blockIsOpen: boolean = openedSideBar === btnName;
    const [activeSort, setActiveSort] = useState<string>(defSort);

    const handleClick = (name: string): void => {
        if (openedSideBar === name) changeOpenedSideBar("");
        else changeOpenedSideBar(name);
    };

    const setSortParam = (value: string): void => {
        if (value !== defSort) {
            searchParams.set("sort", value);
        } else {
            searchParams.delete("sort");
        }
        setSearchParams(searchParams);
        changeOpenedSideBar("");
    };

    useEffect(() => {
        if (searchParams.get("sort")) {
            setActiveSort(searchParams.get("sort"));
        } else {
            setActiveSort(defSort);
        }
    }, [searchParams]);

    return (
        <nav
            className={v.categoriesNav + " " + (blockIsOpen && v.catNavOpened)}
            id={s.sorting}
        >
            <BtnDisplayBlock
                hideBlock={() => handleClick(btnName)}
                blockHidden={openedSideBar !== btnName}
                btnName={btnName + (activeSort !== defSort ? " *" : "")}
            />
            {blockIsOpen && (
                <Sorting sort={setSortParam} activeSort={activeSort} />
            )}
        </nav>
    );
};

export default SortingBlock;
