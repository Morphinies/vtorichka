import React from "react";
import BtnFind from "./btnFind";
import BtnReset from "./btnReset";
import s from "./searchLine.module.css";
import SearchInput from "./searchInput";

const SearchLineForm = ({
  selected,
  textSearch,
  setTextSearch,
  searchProducts,
  setSearchProducts,
}) => {
  const search = (e) => {
    selected.length && setSearchProducts(selected);
    e.preventDefault();
  };

  return (
    <form
      onSubmit={search}
      className={
        s.form +
        (searchProducts.length ? " " + s.formWithRes : "") +
        (textSearch ? " " + s.formWithText : "")
      }
    >
      <SearchInput textSearch={textSearch} setTextSearch={setTextSearch} />
      <BtnReset
        textSearch={textSearch}
        setTextSearch={setTextSearch}
        searchProducts={searchProducts}
        setSearchProducts={setSearchProducts}
      />
      <BtnFind textSearch={textSearch} search={search} />
    </form>
  );
};

export default SearchLineForm;
