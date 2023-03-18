import React from "react";
import s from "../productCard.module.css";
import setting from "../../../img/settings.svg";
import { useNavigate } from "react-router-dom";

const BtnEdit = ({ productId }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/prodEditor/${productId}`)}
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
