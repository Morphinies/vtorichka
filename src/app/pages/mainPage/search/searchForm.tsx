import * as React from "react";
import BtnFind from "./btnFind";
import BtnReset from "./btnReset";
import s from "./search.module.css";
import SearchInput from "./searchInput";
import { useSearchParams } from "react-router-dom";

interface ISearchForm {
  textSearch: string;
  setTextSearch: (v: string) => void;
}
const SearchForm = ({ textSearch, setTextSearch }: ISearchForm) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedName = searchParams.get("name");

  const search = (e: React.FormEvent<HTMLFormElement>) => {
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
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => search(e)}
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
      <BtnFind isDisabled={!textSearch} />
    </form>
  );
};

export default SearchForm;
