import React from "react";
import del from "../../img/cancel.svg";
import s from "./conditions.module.css";

const ConditionBtn = ({
  btnName,
  condition,
  clearCategory,
  clearFilter,
  conditionId,
}) => {
  const clearCondition = (condName) => {
    // console.log(condName);
    switch (condName) {
      case "category":
        clearCategory();
        break;
      case "filters":
        clearFilter(conditionId);
        break;
      default:
        console.log();
    }
    return null;
  };

  return (
    <button
      className={"btn " + s.conditionBtn}
      onClick={() => clearCondition(condition)}
    >
      <p className={s.conditionBtnText}>{btnName}</p>
      <img className={s.conditionBtnImg} src={del} alt="" />
    </button>
  );
};

export default ConditionBtn;
