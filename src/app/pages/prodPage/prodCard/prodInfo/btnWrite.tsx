import * as React from "react";
import s from "../prodCard.module.css";
import { message } from "../../../../img/pictures";

const BtnWrite = ({ sellerId }: { sellerId: string }) => {
  const toDialog = (sellerId: string) => {
    console.log(sellerId);
  };

  return (
    <button
      onClick={() => toDialog(sellerId)}
      className={s.prodBtn + " " + s.btnWrite}
    >
      <img
        alt=""
        title="написать"
        src={String(message)}
        className={s.prodBtnImg}
      />
    </button>
  );
};

export default BtnWrite;
