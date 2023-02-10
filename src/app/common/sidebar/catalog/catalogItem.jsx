import React from "react";
import s from "./catalog.module.css";
import v from "../sidebar.module.css";
import arrowDown from "../../../img/arrowDown.svg";

const CatalogItem = ({ displayCat, catItem, curCat, conditionsApplied }) => {
  return (
    <li
      role="button"
      onClick={() => displayCat(catItem)}
      className={v.btnDisplayCat}
      id={
        curCat.includes(catItem)
          ? v.openCatItem
          : catItem.name === conditionsApplied.category.name
          ? s.choosedCatItem
          : ""
      }
    >
      <p className={v.btnDisplayCatText}>{catItem.name}</p>
      {catItem.value && (
        <img className={v.imgArrowDown} alt="" src={arrowDown} />
      )}
    </li>
  );
};

export default CatalogItem;
