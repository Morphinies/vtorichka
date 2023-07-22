import * as React from "react";
import s from "../filters.module.css";
import { cancelImg } from "../../../../../img/pictures";
import { IBtnClearInput } from "../../../../../../types/types";

const BtnClearInput = ({ value, clearFilter }: IBtnClearInput): JSX.Element => {
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
