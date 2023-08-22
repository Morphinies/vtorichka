import * as React from "react";
import s from "./auth.module.css";

interface IAuthSwitchBtn {
    name: string;
    value: string;
    curForm: string;
    toggleForm: (name: string) => void;
}

const AuthSwitchBtn = ({
    value,
    name,
    curForm,
    toggleForm,
}: IAuthSwitchBtn) => {
    return (
        <button
            className={curForm === value ? s.activeBtn : ""}
            onClick={() => toggleForm(value)}
        >
            {name}
        </button>
    );
};

export default AuthSwitchBtn;
