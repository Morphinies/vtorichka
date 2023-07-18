import * as React from "react";
import s from "./conditions.module.css";
import { cancelImg } from "../../../img/pictures";

interface IConditionBtn {
  cond: {
    key: string;
    name: string;
    value: string;
  };
  clearCondition: (v: string) => void;
}
const ConditionBtn = ({ cond, clearCondition }: IConditionBtn): JSX.Element => {
  return (
    <button
      title="сбросить"
      onClick={() => clearCondition(cond.key)}
      className={"btn " + s.conditionBtn}
    >
      <p className={s.conditionBtnText}>
        {cond.name}: {cond.value}
      </p>
      <img className={s.conditionBtnImg} src={String(cancelImg)} alt="" />
    </button>
  );
};

export default ConditionBtn;
