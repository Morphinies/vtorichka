import React, { useState } from "react";
import s from "./searchLine.module.css";
import searchImg from "../../img/search.svg";

const SearchLine = () => {
  const [textSearch, setTextSearch] = useState("");
  const search = (e) => {
    e.preventDefault();
    textSearch !== "" && console.log(textSearch);
  };

  return (
    <nav className={s.nav}>
      <form onSubmit={search} className={s.form}>
        <input
          onChange={(e) => setTextSearch(e.target.value)}
          className={s.input}
          type="text"
          placeholder="поиск ..."
        />
        <button type="button" className="btn" id={s.searchBtn} onClick={search}>
          <img className={s.searchImg} src={searchImg} alt="поиск" />
        </button>
      </form>
    </nav>
  );
};

export default SearchLine;
