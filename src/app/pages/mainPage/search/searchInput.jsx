import React from "react";
import s from "./search.module.css";

const SearchInput = ({ textSearch, setTextSearch }) => {
  return (
    <input
      type="text"
      value={textSearch}
      placeholder="поиск ..."
      onChange={(e) => {
        setTextSearch(e.target.value);
      }}
      className={s.input + " " + (textSearch ? s.formNotEmpty : "")}
    />
  );
};

export default SearchInput;
