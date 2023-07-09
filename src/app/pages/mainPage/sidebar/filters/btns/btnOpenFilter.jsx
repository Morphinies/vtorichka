import React from "react";
import v from "../../sidebar.module.css";
import { arrowDown } from "../../../../../img/pictures";

const BtnOpenFilter = ({ name, action, isOpen }) => {
  return (
    <button
      type="button"
      onClick={() => action(name)}
      className={v.btnDisplayCat}
      id={isOpen ? v.openCatItem : ""}
    >
      <p className={v.btnDisplayCatText}>{name}</p>
      <img className={v.imgArrowDown} alt="" src={arrowDown} />
    </button>
  );
};

export default BtnOpenFilter;
