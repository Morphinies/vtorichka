import * as React from "react";
import s from "../filters.module.css";
import { cancelImg } from "../../../../../img/pictures";

interface IBtnClearInput {
  value: string;
  clearFilter: (v: string) => void;
}
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
        src={String(cancelImg)}
        alt="сбросить"
      />
    </button>
  );
};

export default BtnClearInput;
