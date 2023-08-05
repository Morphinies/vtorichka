import * as React from "react";
import s from "./search.module.css";
import { ISearchInput } from "../../../../types/types";

const SearchInput = ({
    textSearch,
    setTextSearch,
}: ISearchInput): JSX.Element => {
    return (
        <input
            type="text"
            value={textSearch}
            placeholder="поиск ..."
            onChange={(e) => {
                setTextSearch(e.target.value);
            }}
            className={s.input + " " + (textSearch ? s.formNotEmpty : "")}
        />
    );
};

export default SearchInput;
