import s from "./searchLine.module.css";
import SearchLineForm from "./searchLineForm";
import React, { useState, useEffect, useRef } from "react";
import PossibleGoods from "./possibleGoods";
import api from "../../api";

const SearchLine = ({ showProduct, searchProducts, setSearchProducts }) => {
  const [handling, setHandling] = useState(false); // обработка ввода, поиск товаров
  const [selected, setSelected] = useState([]); // товары удовлетворяющие условиям запроса
  const [textSearch, setTextSearch] = useState(""); // то, что сейчас находится в поисковой строке
  const timerId = useRef();

  useEffect(() => {
    setSelected([]);
    setHandling(true);
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      api.products.fetchByName(textSearch).then((data) => {
        setSelected(data);
        setHandling(false);
      });
    }, 1000);
  }, [textSearch]);

  return (
    <nav className={s.nav}>
      <SearchLineForm
        handling={handling}
        selected={selected}
        textSearch={textSearch}
        setTextSearch={setTextSearch}
        searchProducts={searchProducts}
        setSearchProducts={setSearchProducts}
      />
      <PossibleGoods
        handling={handling}
        selected={selected}
        textSearch={textSearch}
        showProduct={showProduct}
      />
    </nav>
  );
};

export default SearchLine;
