import * as React from "react";
import Catalog from "./catalog";
import { useState } from "react";
import api from "../../../../api";
import { useEffect } from "react";
import v from "../sidebar.module.css";
import BtnDisplayBlock from "../btnDisplayBlock";
import { useSearchParams } from "react-router-dom";
import { ICatalogBlock, IcatItem } from "../../../../../types/types";

const CatalogBlock = ({
    id,
    btnName,
    openedSideBar,
    changeOpenedSideBar,
}: ICatalogBlock): JSX.Element => {
    const [curCat, setCurCat] = useState([]); //путь до имени категории
    const [categories, setCategories] = useState([]);
    const [catList, setCatList] = useState<IcatItem[]>();
    const [searchParams, setSearchParams] = useSearchParams();

    console.log(categories);

    // подгрузка существующих категорий
    useEffect(() => {
        api.categoryList.fetchAll().then((data) => setCategories(data));
    }, []);

    // установка видимых категорий
    useEffect(() => {
        setCatList(categories);
    }, [categories]);

    // установка открытого sidebar'a
    const openBlock = () => {
        changeOpenedSideBar(openedSideBar === btnName ? "" : btnName);
    };

    return (
        <nav
            className={
                v.categoriesNav +
                " " +
                (openedSideBar === btnName && v.catNavOpened)
            }
            id={v["categoriesNav" + id]}
        >
            <BtnDisplayBlock
                btnName={btnName + (searchParams.get("category") ? " *" : "")}
                blockHidden={openedSideBar !== btnName}
                hideBlock={() => openBlock()}
            />

            {openedSideBar === btnName && (
                <Catalog
                    curCat={curCat}
                    catList={catList}
                    setCurCat={setCurCat}
                    setCatList={setCatList}
                    searchParams={searchParams}
                    hideCatalog={() => openBlock()}
                    setSearchParams={setSearchParams}
                    setCatListDefault={() => setCatList(categories)}
                />
            )}
        </nav>
    );
};

export default CatalogBlock;
