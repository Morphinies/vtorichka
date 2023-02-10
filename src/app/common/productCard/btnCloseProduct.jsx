import React from "react";
import s from "./productCard.module.css";
import cancelImg from "../../img/cancelDark.svg";

const BtnCloseProduct = ({ closeCard }) => {
  return (
    <button className={s.closeCard} onClick={closeCard}>
      <img src={cancelImg} alt="cancel" className={s.cancelImg} />
    </button>
  );
};

export default BtnCloseProduct;
