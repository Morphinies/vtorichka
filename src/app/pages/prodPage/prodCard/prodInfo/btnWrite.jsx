import React from "react";
import s from "../prodCard.module.css";
import { message } from "../../../../img/pictures";

const BtnWrite = ({ sellerId }) => {
  const toDialog = (sellerId) => {
    console.log(sellerId);
  };

  return (
    <button
      onClick={() => toDialog(sellerId)}
      className={s.prodBtn + " " + s.btnWrite}
    >
      <img title="написать" alt="" className={s.prodBtnImg} src={message} />
    </button>
  );
};

export default BtnWrite;
