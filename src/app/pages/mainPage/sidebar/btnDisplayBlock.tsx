import * as React from "react";
import s from "./sidebar.module.css";
import { cancelImg } from "../../../img/pictures";
import { IBtnDisplayBlock } from "../../../../types/types";

const BtnDisplayBlock = ({
    btnName,
    hideBlock,
    blockHidden,
}: IBtnDisplayBlock) => {
    return (
        <button
            type="button"
            onClick={hideBlock}
            className={s.btnDisplayCat}
            id={blockHidden ? s.categoriesShowBtn : s.categoriesHideBtn}
        >
            <p className={s.btnDisplayCatText}>{btnName} </p>
            {!blockHidden && (
                <img className={s.imgDisplayCat} src={cancelImg} alt="" />
            )}
        </button>
    );
};

export default BtnDisplayBlock;
