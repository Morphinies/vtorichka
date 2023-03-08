import React from "react";
import s from "./searchLine.module.css";
import searchImg from "../../img/search.svg";

const BtnFind = ({ handling, search, textSearch }) => {
  return (
    <button
      type="button"
      className={"btn " + (!textSearch && s.btnDisabled)}
      onClick={(e) => textSearch && search(e)}
      id={!handling && textSearch ? s.searchBtnFormNotEmpty : s.searchBtn}
    >
      <img className={s.searchImg} src={searchImg} alt="поиск" />
    </button>
  );
};

export default BtnFind;
