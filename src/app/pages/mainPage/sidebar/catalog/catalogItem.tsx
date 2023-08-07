import * as React from "react";
import s from "./catalog.module.css";
import v from "../sidebar.module.css";
import { arrowDown } from "../../../../img/pictures";
import { ICatalogItem } from "../../../../../types/types";

const CatalogItem = ({
    catItem,
    choosedCat,
    choosedCatList,
    handleClickOnCatItem,
}: ICatalogItem) => {
    return (
        <li
            role="button"
            onClick={() => handleClickOnCatItem(catItem)}
            className={v.btnDisplayCat}
            id={
                choosedCatList.includes(catItem)
                    ? v.openCatItem
                    : catItem.name === choosedCat
                    ? s.choosedCatItem
                    : ""
            }
        >
            <p className={v.btnDisplayCatText}>{catItem.name}</p>
            {catItem.value && (
                <img
                    alt=""
                    className={v.imgArrowDown}
                    src={String(arrowDown)}
                />
            )}
        </li>
    );
};

export default CatalogItem;
