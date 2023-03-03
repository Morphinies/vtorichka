import React from "react";
import s from "../productCard.module.css";
import setting from "../../../img/settings.svg";

const BtnEdit = ({ openEditor, productId }) => {
  return (
    <button
      onClick={() => openEditor(productId)}
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
