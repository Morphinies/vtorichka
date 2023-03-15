import React from "react";
import s from "./productCard.module.css";
import cancelImg from "../../img/cancelDark.svg";
import { useNavigate } from "react-router-dom";

const BtnCloseProduct = () => {
  const navigate = useNavigate();
  return (
    <button
      className={s.closeCard}
      onClick={() => {
        navigate(-1);
      }}
    >
      <img src={cancelImg} alt="cancel" className={s.cancelImg} />
    </button>
  );
};

export default BtnCloseProduct;
