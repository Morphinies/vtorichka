import React from "react";
import s from "../filters.module.css";
import { cancelImg } from "../../../../../img/pictures";

const BtnClearInput = ({ value, clearFilter }) => {
  return (
    <button
      type="button"
      className={"btn " + s.btnClear}
      onClick={() => clearFilter(value)}
    >
      <img
        className={s.imgBtnClear}
        //  + " " + (rotation ? s.rotation : "")
        src={cancelImg}
        alt="сбросить"
      />
    </button>
  );
};

export default BtnClearInput;
