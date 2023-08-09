import * as React from "react";
import s from "./search.module.css";
import { cancelDark } from "../../../img/pictures";

interface IBtnReset {
    resetSearch: () => void;
}
const BtnReset = ({ resetSearch }: IBtnReset): JSX.Element => {
    return (
        <button
            type="button"
            title="очистить"
            className={s.searchBtn}
            onClick={() => resetSearch()}
        >
            <img src={cancelDark} alt="очистить" />
        </button>
    );
};

export default BtnReset;
