import React from "react";
import del from "../../img/cancel.svg";
import s from "./conditions.module.css";

const ConditionBtn = ({
  cond,
  defaultConditions,
  conditionsApplied,
  setConditionsApplied,
}) => {
  const clearCondition = (condition) => {
    if (condition.value === "minPrice") {
      setConditionsApplied((prevState) => {
        return {
          ...prevState,
          filters: conditionsApplied.filters.filter(
            (filter) => filter.id !== "от"
          ),
        };
      });
    } else if (condition.value === "maxPrice") {
      setConditionsApplied((prevState) => {
        return {
          ...prevState,
          filters: conditionsApplied.filters.filter(
            (filter) => filter.id !== "до"
          ),
        };
      });
    } else if (condition.value === "type") {
      setConditionsApplied((prevState) => {
        return {
          ...prevState,
          filters: conditionsApplied.filters.map((filter) => {
            return filter.name === "тип"
              ? defaultConditions.filters.find(
                  (filter) => filter.name === "тип"
                )
              : filter;
          }),
        };
      });
    } else if (condition.value === "sorting") {
      setConditionsApplied((prevState) => {
        return {
          ...prevState,
          sorting: defaultConditions.sorting,
        };
      });
    } else if (condition.value === "category") {
      setConditionsApplied((prevState) => {
        return {
          ...prevState,
          category: defaultConditions.category,
        };
      });
    } else if (condition.value === "search") {
      setConditionsApplied((prevState) => {
        return {
          ...prevState,
          search: defaultConditions.search,
        };
      });
    }
  };

  return (
    <button
      onClick={() => {
        clearCondition(cond);
      }}
      className={"btn " + s.conditionBtn}
    >
      <p className={s.conditionBtnText}>{cond.name}</p>
      <img className={s.conditionBtnImg} src={del} alt="" />
    </button>
  );
};

export default ConditionBtn;
