import React from "react";
import v from "../../sidebar.module.css";
import arrowDown from "../../../../img/arrowDown.svg";

const BtnOpenFilter = ({ filterName, displayFilter, opened }) => {
  return (
    <button
      type="button"
      onClick={() => displayFilter(filterName)}
      className={v.btnDisplayCat}
      id={opened ? v.openCatItem : ""}
    >
      <p className={v.btnDisplayCatText}>{filterName}</p>
      <img className={v.imgArrowDown} alt="" src={arrowDown} />
    </button>
  );
};

export default BtnOpenFilter;
