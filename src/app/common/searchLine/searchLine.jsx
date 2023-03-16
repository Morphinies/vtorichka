import s from "./searchLine.module.css";
import SearchLineForm from "./searchLineForm";
import React, { useState, useEffect, useRef } from "react";
import PossibleGoods from "./possibleGoods";
import api from "../../api";

const SearchLine = ({ searchActive, setConditionsApplied }) => {
  const [allResults, setAllResults] = useState(false);
  const [handling, setHandling] = useState(false); // обработка ввода, поиск товаров
  const [selected, setSelected] = useState([]); // товары удовлетворяющие условиям запроса
  const [textSearch, setTextSearch] = useState(""); // то, что сейчас находится в поисковой строке
  const timerId = useRef();

  useEffect(() => {
    const maxResults = 3;
    setAllResults(false);
    if (textSearch) {
      setSelected([]);
      clearTimeout(timerId.current);
      timerId.current = setTimeout(() => {
        api.products.fetchByName(textSearch, maxResults + 1).then((data) => {
          if (data.length > maxResults) {
            setAllResults(true);
          }
          setSelected(data.slice(0, maxResults));
          setHandling(false);
        });
      }, 1000);
    } else {
      setHandling(false);
      setSelected([]);
    }
  }, [textSearch]);

  const showAllResults = () => {
    setConditionsApplied((prevState) => {
      return { ...prevState, search: textSearch };
    });
    setTextSearch("");
  };

  return (
    <nav className={s.nav}>
      <SearchLineForm
        timerId={timerId}
        handling={handling}
        textSearch={textSearch}
        setHandling={setHandling}
        searchActive={searchActive}
        setTextSearch={setTextSearch}
        setConditionsApplied={setConditionsApplied}
      />
      <PossibleGoods
        handling={handling}
        selected={selected}
        textSearch={textSearch}
        allResults={allResults}
        showAllResults={showAllResults}
      />
    </nav>
  );
};

export default SearchLine;
