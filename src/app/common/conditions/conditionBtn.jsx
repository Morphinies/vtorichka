import React from "react";
import del from "../../img/cancel.svg";
import s from "./conditions.module.css";

const ConditionBtn = ({
  cond,
  btnName,
  defaultConditions,
  conditionsApplied,
  setConditionsApplied,
}) => {
  return (
    <button
      onClick={() => {
        console.log(cond);
        // setConditionsApplied({ ...defaultConditions });
      }}
      className={"btn " + s.conditionBtn}
    >
      <p className={s.conditionBtnText}>{btnName}</p>
      <img className={s.conditionBtnImg} src={del} alt="" />
    </button>
  );
};

export default ConditionBtn;
