import React from "react";
import call from "../../../img/call.svg";
import s from "../productCard.module.css";

const BtnCall = ({ phone }) => {
  return (
    <a href={"tel:" + phone} className={s.prodBtn + " " + s.btnCall}>
      <img title="позвонить" alt="" className={s.prodBtnImg} src={call} />
    </a>
  );
};

export default BtnCall;
