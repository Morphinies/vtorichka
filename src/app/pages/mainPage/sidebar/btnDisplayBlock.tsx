import * as React from "react";
import v from "./sidebar.module.css";
import { cancelImg } from "../../../img/pictures";
import { IBtnDisplayBlock } from "../../../../types/types";

const BtnDisplayBlock = ({
  btnName,
  blockHidden,
  hideBlock,
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
        <img className={v.imgDisplayCat} src={String(cancelImg)} alt="" />
      )}
    </button>
  );
};

export default BtnDisplayBlock;
