import * as React from "react";
import s from "./conditions.module.css";
import ConditionBtn from "./conditionBtn";
import condTransform from "./condTransform";
import { useSearchParams } from "react-router-dom";

const Conditions = (): JSX.Element => {
    const [searchParams, setSearchParams] = useSearchParams();
    const conditions = condTransform(searchParams); // search params to array

    const clearCondition = (paramKey: string): void => {
        searchParams.delete(paramKey);
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
