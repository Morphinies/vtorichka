import React from "react";
import BtnFind from "./btnFind";
import BtnReset from "./btnReset";
import s from "./search.module.css";
import SearchInput from "./searchInput";
import { useSearchParams } from "react-router-dom";

const SearchForm = ({ textSearch, setTextSearch }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedName = searchParams.get("name");

  const search = (e) => {
    e.preventDefault();
    setTextSearch("");
    if (textSearch) searchParams.set("name", textSearch);
    else searchParams.delete("name");
    setSearchParams(searchParams);
  };

  const resetSearch = () => {
    searchParams.delete("name");
    setSearchParams(searchParams);
    setTextSearch("");
  };

  return (
    <form
      onSubmit={search}
      className={
        s.form +
        " " +
        (textSearch || searchedName ? s.formWithText : "") +
        " " +
        (textSearch ? s.formWithRes : "")
      }
    >
      <SearchInput textSearch={textSearch} setTextSearch={setTextSearch} />

      {(textSearch || searchedName) && <BtnReset resetSearch={resetSearch} />}
      <BtnFind isDisabled={!textSearch} search={search} />
    </form>
  );
};

export default SearchForm;
