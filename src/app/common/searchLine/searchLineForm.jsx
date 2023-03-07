import React from "react";
import BtnFind from "./btnFind";
import BtnReset from "./btnReset";
import s from "./searchLine.module.css";
import SearchInput from "./searchInput";

const SearchLineForm = ({
  selected,
  handling,
  textSearch,
  setTextSearch,
  searchProducts,
  setSearchProducts,
}) => {
  const search = (e) => {
    if (selected.length) {
      setSearchProducts(selected);
      setTextSearch("");
    }
    e.preventDefault();
  };

  return (
    <form
      onSubmit={search}
      className={s.form + " " + (!handling && textSearch ? s.formWithRes : "")}
    >
      <SearchInput
        handling={handling}
        textSearch={textSearch}
        setTextSearch={setTextSearch}
      />
      {!handling && textSearch && (
        <BtnReset
          textSearch={textSearch}
          setTextSearch={setTextSearch}
          searchProducts={searchProducts}
          setSearchProducts={setSearchProducts}
        />
      )}
      <BtnFind textSearch={textSearch} handling={handling} search={search} />
    </form>
  );
};

export default SearchLineForm;
