import React from "react";
import s from "./searchLine.module.css";

const BtnReset = ({
  textSearch,
  setTextSearch,
  searchProducts,
  setSearchProducts,
}) => {
  return (
    <button
      type="button"
      onClick={() => {
        searchProducts.length && setSearchProducts([]);
        textSearch && setTextSearch("");
      }}
      className={s.btnReset}
    >
      сброс
    </button>
  );
};

export default BtnReset;
