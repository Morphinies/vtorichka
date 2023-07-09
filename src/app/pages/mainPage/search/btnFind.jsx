import React from "react";
import s from "./search.module.css";
import { searchImg } from "../../../img/pictures";

const BtnFind = ({ search, isDisabled }) => {
  return (
    <button
      className="btn"
      disabled={isDisabled}
      onClick={(e) => search(e)}
      id={!isDisabled ? s.searchBtnFormNotEmpty : s.searchBtn}
    >
      <img className={s.searchImg} src={searchImg} alt="поиск" />
    </button>
  );
};

export default BtnFind;
