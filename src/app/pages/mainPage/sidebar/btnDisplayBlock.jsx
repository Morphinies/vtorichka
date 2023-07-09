import React from "react";
import v from "./sidebar.module.css";
import { cancelImg } from "../../../img/pictures";

const BtnDisplayBlock = ({ btnName, blockHidden, hideBlock }) => {
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
