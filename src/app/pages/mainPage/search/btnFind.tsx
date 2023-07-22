import * as React from "react";
import s from "./search.module.css";
import { searchImg } from "../../../img/pictures";

interface IBtnFind {
  isDisabled: boolean;
}
const BtnFind = ({ isDisabled }: IBtnFind) => {
  return (
    <button
      className="btn"
      disabled={isDisabled}
      id={!isDisabled ? s.searchBtnFormNotEmpty : s.searchBtn}
    >
      <img className={s.searchImg} src={searchImg} alt="поиск" />
    </button>
  );
};

export default BtnFind;
