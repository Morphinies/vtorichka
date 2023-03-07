import React from "react";
import s from "./searchLine.module.css";

const SearchInput = ({ textSearch, handling, setTextSearch }) => {
  return (
    <input
      type="text"
      value={textSearch}
      placeholder="поиск ..."
      onChange={(e) => setTextSearch(e.target.value.trim())}
      className={
        s.input + " " + (!handling && textSearch ? s.formNotEmpty : "")
      }
    />
  );
};

export default SearchInput;
