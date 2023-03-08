import React from "react";
import s from "./searchLine.module.css";

const BtnReset = ({ setTextSearch, setConditionsApplied }) => {
  return (
    <button
      type="button"
      onClick={() => {
        setConditionsApplied((prevState) => {
          return { ...prevState, search: "" };
        });
        setTextSearch("");
      }}
      className={s.btnReset}
    >
      сброс
    </button>
  );
};

export default BtnReset;
