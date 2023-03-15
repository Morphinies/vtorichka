import React from "react";
import s from "../productCard.module.css";
import setting from "../../../img/settings.svg";

const BtnEdit = () => {
  return (
    <button
      onClick={() => console.log("openEditor")}
      className={s.prodBtn + " " + s.btnSetting}
    >
      <img
        src={setting}
        alt="редактировать"
        title="редактировать"
        className={s.prodBtnImg}
      />
    </button>
  );
};

export default BtnEdit;
