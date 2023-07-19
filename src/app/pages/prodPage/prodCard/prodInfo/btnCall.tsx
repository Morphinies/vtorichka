import * as React from "react";
import s from "../prodCard.module.css";
import { call } from "../../../../img/pictures";

const BtnCall = ({ phone }: { phone: string }) => {
  return (
    <a href={"tel:" + phone} className={s.prodBtn + " " + s.btnCall}>
      <img
        alt=""
        title="позвонить"
        src={String(call)}
        className={s.prodBtnImg}
      />
    </a>
  );
};

export default BtnCall;
