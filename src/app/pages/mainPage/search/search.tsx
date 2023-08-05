import api from "../../../api";
import * as React from "react";
import s from "./search.module.css";
import SearchForm from "./searchForm";
import DropDownList from "./dropDownList";
import { useState, useEffect } from "react";
import { Iprod } from "../../../../types/types";

const Search = () => {
    const [textSearch, setTextSearch] = useState<string>(""); // текст поиска
    const [selectedList, setSelectedList] = useState<Iprod[]>([]); // отобранные товары

    // обновление выпадающего списка товаров
    useEffect(() => {
        if (textSearch) {
            setSelectedList([]);
            api.products.fetchByName(textSearch).then((data) => {
                setSelectedList(data);
            });
        } else {
            setSelectedList([]);
        }
    }, [textSearch]);

    return (
        <nav className={s.nav}>
            <SearchForm textSearch={textSearch} setTextSearch={setTextSearch} />
            <DropDownList
                textSearch={textSearch}
                selectedList={selectedList}
                setTextSearch={setTextSearch}
            />
        </nav>
    );
};

export default Search;
