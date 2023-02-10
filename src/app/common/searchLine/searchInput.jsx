import React from "react";
import s from "./searchLine.module.css";

const SearchInput = ({ textSearch, setTextSearch }) => {
  return (
    <input
      value={textSearch}
      onChange={(e) => setTextSearch(e.target.value.trim())}
      className={s.input + " " + (textSearch ? s.formNotEmpty : "")}
      type="text"
      placeholder="поиск ..."
    />
  );
};

export default SearchInput;
