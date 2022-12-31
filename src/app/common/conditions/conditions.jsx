import React from "react";
import ConditionBtn from "./conditionBtn";
import s from "./conditions.module.css";

const Conditions = ({
  defaultConditions,
  conditionsApplied,
  setConditionsApplied,
}) => {
  const equalObjects = (obj1, obj2) => {
    return (
      JSON.stringify(Object.entries(obj1).sort()) ===
      JSON.stringify(Object.entries(obj2).sort())
    );
  };

  return (
    !equalObjects(defaultConditions, conditionsApplied) && (
      <div className={s.conditions}>
        {Object.keys(conditionsApplied).map((condition) => {
          console.log(conditionsApplied[condition]);
          return (
            <div key={condition}>
              {!equalObjects(
                defaultConditions[condition],
                conditionsApplied[condition]
              ) && <ConditionBtn btnName={conditionsApplied[condition].name} />}
            </div>
          );
        })}
      </div>
    )
  );
};

export default Conditions;
