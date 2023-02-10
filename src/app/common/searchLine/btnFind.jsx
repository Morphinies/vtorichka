import React from "react";
import s from "./searchLine.module.css";
import searchImg from "../../img/search.svg";

const BtnFind = ({ textSearch, search }) => {
  return (
    <button
      type="button"
      className="btn"
      id={textSearch ? s.searchBtnFormNotEmpty : s.searchBtn}
      onClick={search}
    >
      <img className={s.searchImg} src={searchImg} alt="поиск" />
    </button>
  );
};

export default BtnFind;
