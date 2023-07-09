import React from "react";
import s from "./search.module.css";

const BtnReset = ({ resetSearch }) => {
  return (
    <button type="button" onClick={() => resetSearch()} className={s.btnReset}>
      сброс
    </button>
  );
};

export default BtnReset;
