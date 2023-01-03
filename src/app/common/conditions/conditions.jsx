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
          return (
            <div key={condition}>
              {/* !equalObjects(
                defaultConditions[condition],
                conditionsApplied[condition]
              )
                if (condition === "category") { (
                    <ConditionBtn btnName={conditionsApplied[condition].name} />
                  ) */}

              {equalObjects(
                defaultConditions[condition],
                conditionsApplied[condition]
              ) ? (
                ""
              ) : condition === "category" ? ( //category
                <ConditionBtn btnName={conditionsApplied[condition].name} />
              ) : condition === "filters" ? ( //filters
                conditionsApplied[condition].map((filter) => {
                  !defaultConditions[condition].includes(filter)
                    ? !Array.isArray(filter.value)
                      ? console.log("!")
                      : console.log(filter.value)
                    : console.log();

                  // !defaultConditions[condition].includes(
                  //   conditionsApplied[condition][i]
                  // ) && !Array.isArray(conditionsApplied[condition][i].value)
                  //   ? console.log(
                  //       conditionsApplied[condition][i].id +
                  //         ": " +
                  //         conditionsApplied[condition][i].value
                  //     )
                  //   : console.log("тип");
                })
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    )
  );
};

export default Conditions;
