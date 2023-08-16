import * as React from "react";
import s from "../../editor.module.css";
import arrowDown from "../../../../img/arrowDown.svg";
import { ICatFieldBtnOpenList } from "../../../../../types/types";

const CatFieldBtnOpenList = ({
    setListOpened,
    listOpened,
    catValue,
}: ICatFieldBtnOpenList) => {
    return (
        <button
            type="button"
            onClick={() => {
                setListOpened((prevState) => !prevState);
            }}
            className={s.btn + " " + (listOpened && s.formValue)}
        >
            <p className={s.catName}>{catValue}</p>
            <img className={s.arrowDown} src={arrowDown} alt="" />
        </button>
    );
};

export default CatFieldBtnOpenList;
