import React from "react";
import s from "./prodCard.module.css";
import { useNavigate } from "react-router-dom";
import { cancelDark } from "../../../img/pictures";

const BtnCloseProduct = () => {
  const navigate = useNavigate();

  return (
    <button className={s.closeCard} onClick={() => navigate(-1)}>
      <img src={cancelDark} alt="cancel" className={s.cancelImg} />
    </button>
  );
};

export default BtnCloseProduct;
