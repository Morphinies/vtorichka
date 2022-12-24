import React from "react";
import ConditionBtn from "./conditionBtn";
import s from "./conditions.module.css";

const Conditions = ({ choosedConditions, defaultValues }) => {
  const equalObjects = (obj1, obj2) => {
    return (
      JSON.stringify(Object.entries(obj1).sort()) ===
      JSON.stringify(Object.entries(obj2).sort())
    );
  };
  return (
    !equalObjects(choosedConditions, defaultValues) && (
      <div className={s.conditions}>
        {Object.keys(choosedConditions).map((condition) => {
          return (
            <>
              {condition === "category" &&
                !equalObjects(
                  choosedConditions[condition],
                  defaultValues[condition]
                ) && (
                  <ConditionBtn btnName={choosedConditions[condition].name} />
                )}

              {condition === "sorting" &&
                !equalObjects(
                  choosedConditions[condition].value,
                  defaultValues[condition].value
                ) && (
                  <ConditionBtn btnName={choosedConditions[condition].name} />
                )}
              {
                condition === "filters" &&
                  !equalObjects(
                    choosedConditions[condition],
                    defaultValues[condition]
                  ) &&
                  console.log(choosedConditions[condition])
                // <ConditionBtn btnName={choosedConditions[condition].name} />
              }
            </>
          );
        })}
      </div>
    )
  );
};

export default Conditions;
