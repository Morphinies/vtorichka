import React from "react";
import del from "../../img/cancel.svg";
import s from "./conditions.module.css";

const ConditionBtn = ({ btnName }) => {
  return (
    <button className={"btn " + s.conditionBtn}>
      <p className={s.conditionBtnText}>{btnName}</p>
      <img className={s.conditionBtnImg} src={del} alt="" />
    </button>
  );
};

export default ConditionBtn;
