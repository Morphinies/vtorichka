import * as React from "react";
import s from "./catalog.module.css";
import v from "../sidebar.module.css";
import { arrowDown } from "../../../../img/pictures";
import { ICatalogItem } from "../../../../../types/types";

const CatalogItem = ({
  curCat,
  catItem,
  displayCat,
  choosedCat,
}: ICatalogItem) => {
  return (
    <li
      role="button"
      onClick={() => displayCat(catItem)}
      className={v.btnDisplayCat}
      id={
        curCat.includes(catItem)
          ? v.openCatItem
          : catItem.name === choosedCat
          ? s.choosedCatItem
          : ""
      }
    >
      <p className={v.btnDisplayCatText}>{catItem.name}</p>
      {catItem.value && (
        <img className={v.imgArrowDown} alt="" src={String(arrowDown)} />
      )}
    </li>
  );
};

export default CatalogItem;
