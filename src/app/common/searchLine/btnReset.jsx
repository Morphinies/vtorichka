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
      className={
        s.btnReset +
        (searchProducts.length || textSearch ? "" : " " + s.btnResetHide)
      }
    >
      сброс
    </button>
  );
};

export default BtnReset;
