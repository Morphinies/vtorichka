import React from "react";
import { useState } from "react";
import { useEffect } from "react";
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

  const [conditions, setConditions] = useState({});
  // console.log(conditions);

  useEffect(() => {
    if (!equalObjects(defaultConditions.filters, conditionsApplied.filters)) {
      for (let cond of conditionsApplied.filters) {
        for (let defCond of defaultConditions.filters) {
          if (
            // фильтр по типу
            cond.name === "тип" &&
            !equalObjects(defCond.value, cond.value)
          ) {
            for (let filt of cond.value) {
              for (let defFilt of defCond.value) {
                if (
                  filt.name === defFilt.name &&
                  filt.value === defFilt.value
                ) {
                  setConditions((prevState) => {
                    return { ...prevState, type: filt };
                  });
                }
              }
            }
          } else if (cond.name === "цена") {
            // фильтр по цене
            if (cond.id === "от") {
              setConditions((prevState) => {
                return {
                  ...prevState,
                  minPrice: { name: cond.id + " " + cond.value + "р." },
                };
              });
            } else if (cond.id === "до") {
              setConditions((prevState) => {
                return {
                  ...prevState,
                  maxPrice: { name: cond.id + " " + cond.value + "р." },
                };
              });
            } else {
              console.log("hi");
              setConditions((prevState) => {
                return {
                  ...prevState,
                  minPrice: {},
                  maxPrice: {},
                };
              });
            }
          }
        }
      }
    } else {
      setConditions({});
    }
  }, [conditionsApplied, defaultConditions]);

  return (
    <div className={s.conditions}>
      {Object.values(conditions).map((cond) => {
        return <ConditionBtn btnName={cond.name} key={cond.name} />;
      })}
    </div>
  );
};

export default Conditions;
