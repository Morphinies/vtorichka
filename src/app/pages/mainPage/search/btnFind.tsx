import * as React from "react";
import s from "./search.module.css";
import { search } from "../../../img/pictures";

interface IBtnFind {
    isDisabled: boolean;
}
const BtnFind = ({ isDisabled }: IBtnFind) => {
    return (
        <button
            disabled={isDisabled}
            title="найти"
            id={s.btnFind}
            className={
                s.searchBtn + (!isDisabled ? " " + s.searchBtnFormNotEmpty : "")
            }
        >
            <img src={search} alt="поиск" />
        </button>
    );
};

export default BtnFind;
