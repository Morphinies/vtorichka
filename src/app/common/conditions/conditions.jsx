import React from "react";
import ConditionBtn from "./conditionBtn";
import s from "./conditions.module.css";

const Conditions = ({
  clearFilter,
  clearCategory,
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
    <div className={s.conditions}>
      {!equalObjects(defaultConditions, conditionsApplied) &&
        Object.keys(conditionsApplied)
          .reverse()
          .map((condition) => {
            return (
              equalObjects(
                defaultConditions[condition],
                conditionsApplied[condition]
              ) ||
              (condition === "category" && (
                <ConditionBtn
                  condition={condition}
                  clearCategory={clearCategory}
                  btnName={conditionsApplied[condition].name}
                  key={conditionsApplied[condition].name}
                />
              )) ||
              (condition === "filters" &&
                conditionsApplied[condition].map((filter) =>
                  filter.name === "тип"
                    ? !defaultConditions[condition].includes(filter) &&
                      defaultConditions[condition].map((defCond) =>
                        changedObject(filter.value, defCond.value).map(
                          (changedObj) => (
                            <ConditionBtn
                              condition={condition}
                              key={changedObj.name}
                              btnName={changedObj.name}
                              clearFilter={clearFilter}
                              conditionId={filter.name}
                            />
                          )
                        )
                      )
                    : filter.name === "цена" &&
                      !defaultConditions[condition].includes(filter) && (
                        <ConditionBtn
                          key={filter.id}
                          condition={condition}
                          clearFilter={clearFilter}
                          conditionId={filter.name}
                          btnName={filter.id + ": " + filter.value + "р."}
                        />
                      )
                )) ||
              (condition === "sorting" && (
                <ConditionBtn
                  key={conditionsApplied[condition].value}
                  btnName={
                    conditionsApplied[condition].name +
                    " по " +
                    conditionsApplied[condition].value
                  }
                />
              )) ||
              null
            );
          })}
    </div>
  );
};

export default Conditions;
