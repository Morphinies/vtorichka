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

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ условие по категории
  useEffect(() => {
    if (!equalObjects(conditionsApplied.category, defaultConditions.category)) {
      setConditions((prevState) => {
        return {
          ...prevState,
          category: { name: conditionsApplied.category.name },
        };
      });
    } else {
      setConditions((prevState) => {
        return {
          ...prevState,
          category: { name: null },
        };
      });
    }
  }, [conditionsApplied, defaultConditions]);

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ условие по сортировке
  useEffect(() => {
    if (!equalObjects(conditionsApplied.sorting, defaultConditions.sorting)) {
      setConditions((prevState) => {
        return {
          ...prevState,
          sorting: {
            name:
              conditionsApplied.sorting.name +
              ": " +
              conditionsApplied.sorting.value,
          },
        };
      });
    } else {
      setConditions((prevState) => {
        return { ...prevState, sorting: null };
      });
    }
  }, [conditionsApplied, defaultConditions]);

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ условие по фильтрам
  useEffect(() => {
    const regExpPrice = (number) => {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    if (!equalObjects(defaultConditions.filters, conditionsApplied.filters)) {
      setConditions((prevState) => {
        return { ...prevState, type: null, minPrice: {}, maxPrice: {} };
      });
      for (let cond of conditionsApplied.filters) {
        for (let defCond of defaultConditions.filters) {
          if (cond.name === "тип" && !equalObjects(defCond.value, cond.value)) {
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
            if (cond.id === "от") {
              setConditions((prevState) => {
                return {
                  ...prevState,
                  minPrice: {
                    name: cond.id + ": " + regExpPrice(cond.value) + "р.",
                  },
                };
              });
            } else if (cond.id === "до") {
              setConditions((prevState) => {
                return {
                  ...prevState,
                  maxPrice: {
                    name: cond.id + ": " + regExpPrice(cond.value) + "р.",
                  },
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
      setConditions((prevState) => {
        return { ...prevState, type: null, minPrice: {}, maxPrice: {} };
      });
    }
  }, [conditionsApplied, defaultConditions]);

  return (
    <div className={s.conditions}>
      {Object.values(conditions).map((cond) => {
        return (
          cond &&
          cond.name && (
            <ConditionBtn
              key={cond.name}
              btnName={cond.name}
              defaultConditions={defaultConditions}
              conditionsApplied={conditionsApplied}
              setConditionsApplied={setConditionsApplied}
            />
          )
        );
      })}
    </div>
  );
};

export default Conditions;
