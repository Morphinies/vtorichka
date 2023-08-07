import * as React from "react";
import v from "./sidebar.module.css";
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
            className={v.btnDisplayCat}
            id={blockHidden ? v.categoriesShowBtn : v.categoriesHideBtn}
        >
            <p className={v.btnDisplayCatText}>{btnName} </p>
            {!blockHidden && (
                <img className={v.imgDisplayCat} src={cancelImg} alt="" />
            )}
        </button>
    );
};

export default BtnDisplayBlock;
