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

  const changedObject = (arr1, arr2) => {
    const arrOfChangedObj = [];
    arr1.map((obj1) =>
      arr2.map(
        (obj2) =>
          obj1.name === obj2.name &&
          obj1.value === obj2.value &&
          arrOfChangedObj.push(obj1)
      )
    );
    return arrOfChangedObj;
  };

  return (
    !equalObjects(defaultConditions, conditionsApplied) && (
      <div className={s.conditions}>
        {Object.keys(conditionsApplied).map((condition) => {
          return (
            <div key={condition}>
              {equalObjects(
                defaultConditions[condition],
                conditionsApplied[condition]
              ) ? (
                ""
              ) : condition === "category" ? ( //category
                <ConditionBtn btnName={conditionsApplied[condition].name} />
              ) : condition === "filters" ? (
                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                conditionsApplied[condition].map(
                  (filter) =>
                    filter.name === "тип" &&
                    !defaultConditions[condition].includes(filter) &&
                    defaultConditions[condition].map((defCond) =>
                      changedObject(filter.value, defCond.value).map(
                        (changedObj) => (
                          <ConditionBtn
                            key={changedObj.name}
                            btnName={changedObj.name}
                          />
                        )
                      )
                    )
                )
              ) : (
                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                condition === "sorting"
              )}
            </div>
          );
        })}
      </div>
    )
  );
};

export default Conditions;
