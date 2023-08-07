import * as React from "react";
import { useState } from "react";
import v from "../sidebar.module.css";
import CatalogItem from "./catalogItem";
import { useAppSelector } from "../../../../redux/hooks/hooks";
import { ICatalog, IcatItem } from "../../../../../types/types";
import { selectCatList } from "../../../../redux/slices/catListSlice";

const Catalog = ({ hideCatalog, searchParams, setSearchParams }: ICatalog) => {
    const categories = useAppSelector(selectCatList).value;
    const [visibleCatList, setVisibleCatList] = useState(categories);
    const [choosedCatList, setChoosedCatList] = useState<IcatItem[]>([]);

    // handle click on category button
    const handleClickOnCatItem = (catItem: IcatItem) => {
        const choosedCatListegory = searchParams.get("category");
        //
        let allSumOpenCat = 0;
        const catItemCats = catItem.value;
        const lIndexOfchoosedCatList = choosedCatList.length - 1;
        choosedCatList.map(
            (category) => (allSumOpenCat += category.value.length)
        );

        //~~~~~~~~~~~~~~~~~~~~~~~~~~ убрать категорию ~~~~~~~~~~~~~~~~~~~~~~~~~~//
        if (catItem.name === choosedCatListegory) {
            searchParams.delete("category");
            setSearchParams(searchParams);
        }

        //~~~~~~~~~~~~~~~~~~~~~~~~~~ выбор/смена категории ~~~~~~~~~~~~~~~~~~~~~~~~~~//
        else if (!catItem.value) {
            searchParams.set("category", catItem.name);
            setSearchParams(searchParams);
            hideCatalog();
        }

        //~~~~~~~~~~~~~~~~~~~~~~~~~~ открытие ветки категорий ~~~~~~~~~~~~~~~~~~~~~~~~~~//
        else if (!choosedCatList.length) {
            (() => {
                setVisibleCatList([catItem].concat(catItemCats));
                setChoosedCatList((arr) => [...arr, catItem]);
            })();
        }

        //~~~~~~~~~~~~~~~~~~~~~~~~~~ внутренняя категория ~~~~~~~~~~~~~~~~~~~~~~~~~~//
        else if (
            choosedCatList.length &&
            !choosedCatList.includes(catItem) &&
            choosedCatList[lIndexOfchoosedCatList].value.includes(catItem)
        ) {
            setVisibleCatList(choosedCatList.concat([catItem], catItemCats));
            setChoosedCatList((arr) => [...arr, catItem]);
        }

        //~~~~~~~~~~~~~~~~~~~~~~~~~~ повторное нажатие на категорию из истории ~~~~~~~~~~~~~~~~~~~~~~~~~~//
        else if (
            choosedCatList.length &&
            choosedCatList.includes(catItem) &&
            choosedCatList[0] !== catItem
        ) {
            setVisibleCatList(
                visibleCatList
                    .slice(0, visibleCatList.indexOf(catItem))
                    .concat(
                        visibleCatList[visibleCatList.indexOf(catItem) - 1]
                            .value
                    )
            );
            setChoosedCatList((arr) => [...arr.slice(0, arr.indexOf(catItem))]);
        }

        //~~~~~~~~~~~~~~~~~~~~~~~~~~ возвращение к основному каталогу ~~~~~~~~~~~~~~~~~~~~~~~~~~//
        else if (
            choosedCatList.length &&
            choosedCatList.includes(catItem) &&
            choosedCatList[0] === catItem
        ) {
            setVisibleCatList(categories);
            setChoosedCatList(() => []);
        }
    };

    return (
        visibleCatList && (
            <ul className={v.catList}>
                {visibleCatList.map((catItem) => (
                    <CatalogItem
                        catItem={catItem}
                        key={catItem.name}
                        choosedCatList={choosedCatList}
                        choosedCat={searchParams.get("category")}
                        handleClickOnCatItem={handleClickOnCatItem}
                    />
                ))}
            </ul>
        )
    );
};

export default Catalog;
