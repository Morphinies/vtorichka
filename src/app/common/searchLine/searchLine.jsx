import s from "./searchLine.module.css";
import SearchLineForm from "./searchLineForm";
import React, { useState, useEffect } from "react";
import PossibleGoods from "./possibleGoods";

const SearchLine = ({
  products,
  chooseProduct,
  searchProducts,
  setSearchProducts,
}) => {
  const [regex, setRegex] = useState(); // условное выражение, по которому происходит поиск
  const [selected, setSelected] = useState([]);
  const [textSearch, setTextSearch] = useState(""); // то, что сейчас находится в поиск. строке

  // изменение условия поиска
  useEffect(() => {
    !textSearch && setRegex();
    textSearch && setRegex(new RegExp(`${textSearch}`, "gi"));
  }, [textSearch]);

  // изменение отобранных товаров
  useEffect(() => {
    !regex && setSelected([]);
    regex && setSelected(products.filter((prod) => regex.test(prod.name)));
  }, [regex, products]);

  return (
    <nav className={s.nav}>
      <SearchLineForm
        selected={selected}
        textSearch={textSearch}
        setTextSearch={setTextSearch}
        searchProducts={searchProducts}
        setSearchProducts={setSearchProducts}
      />
      <PossibleGoods
        selected={selected}
        textSearch={textSearch}
        chooseProduct={chooseProduct}
      />
    </nav>
  );
};

export default SearchLine;
