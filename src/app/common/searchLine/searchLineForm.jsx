import React from "react";
import BtnFind from "./btnFind";
import BtnReset from "./btnReset";
import s from "./searchLine.module.css";
import SearchInput from "./searchInput";

const SearchLineForm = ({
  handling,
  textSearch,
  setHandling,
  searchActive,
  setTextSearch,
  setConditionsApplied,
}) => {
  const search = (e) => {
    setConditionsApplied((prevState) => {
      return { ...prevState, search: textSearch };
    });
    setTextSearch("");
    e.preventDefault();
  };

  return (
    <form
      onSubmit={search}
      className={
        s.form +
        " " +
        (textSearch || searchActive ? s.formWithText : "") +
        " " +
        (!handling && textSearch ? s.formWithRes : "")
      }
    >
      <SearchInput
        handling={handling}
        textSearch={textSearch}
        setHandling={setHandling}
        setTextSearch={setTextSearch}
      />
      {(textSearch || searchActive) && (
        <BtnReset
          setTextSearch={setTextSearch}
          setConditionsApplied={setConditionsApplied}
        />
      )}
      <BtnFind textSearch={textSearch} handling={handling} search={search} />
    </form>
  );
};

export default SearchLineForm;
