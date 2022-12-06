import React from "react";
import cancel from "../../../img/cancel.svg";
import s from "../../categories/categories.module.css";

const BtnClearFilter = ({ setChoosedFilters, chooseFilters, name }) => {
  return (
    <button
      onClick={() =>
        setChoosedFilters((prevState) => {
          delete prevState[name];

          return { ...prevState };
        })
      }
      type="button"
      className={"btn " + s.btnClear}
    >
      <img className={s.imgDisplayCat} src={cancel} alt="очистить" />
    </button>
  );
};

export default BtnClearFilter;
