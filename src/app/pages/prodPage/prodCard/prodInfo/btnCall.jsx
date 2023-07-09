import React from "react";
import s from "../prodCard.module.css";
import { call } from "../../../../img/pictures";

const BtnCall = ({ phone }) => {
  return (
    <a href={"tel:" + phone} className={s.prodBtn + " " + s.btnCall}>
      <img title="позвонить" alt="" className={s.prodBtnImg} src={call} />
    </a>
  );
};

export default BtnCall;
