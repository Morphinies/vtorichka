import React from "react";
import s from "./conditions.module.css";
import ConditionBtn from "./conditionBtn";
import condTransform from "./condTransform";
import { useSearchParams } from "react-router-dom";

const Conditions = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const conditions = condTransform(searchParams); // search params to array

  const clearCondition = (param) => {
    searchParams.delete(param);
    setSearchParams(searchParams);
  };

  return (
    <div className={s.conditions}>
      {conditions.map((cond) => (
        <ConditionBtn
          cond={cond}
          key={cond.key}
          clearCondition={clearCondition}
        />
      ))}
    </div>
  );
};

export default Conditions;
