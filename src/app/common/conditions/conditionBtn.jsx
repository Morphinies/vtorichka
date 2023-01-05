import React from "react";
import del from "../../img/cancel.svg";
import s from "./conditions.module.css";

const ConditionBtn = ({ btnName, id }) => {
  console.log(id);
  return (
    <button className={"btn " + s.conditionBtn} key={id}>
      <p className={s.conditionBtnText}>{btnName}</p>
      <img className={s.conditionBtnImg} src={del} alt="" />
    </button>
  );
};

export default ConditionBtn;
