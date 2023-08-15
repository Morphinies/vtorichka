import * as React from "react";
import { useState } from "react";
import s from "./auth.module.css";
import Logup from "./logup/logup";
import Signup from "./signup/signup";
import AuthSwitchBtn from "./authSwitchBtn";

const AuthWindow = () => {
    const [curForm, setCurForm] = useState("logup");

    const toggleForm = (form: string) => {
        if (form !== curForm) {
            setCurForm(form);
        }
    };

    return (
        <div className={s.formWindow}>
            <nav className={s.formSwitcher}>
                <AuthSwitchBtn
                    name="вход"
                    value="logup"
                    curForm={curForm}
                    toggleForm={toggleForm}
                />
                <AuthSwitchBtn
                    value="signup"
                    name="регистрация"
                    curForm={curForm}
                    toggleForm={toggleForm}
                />
            </nav>
            <div className={s.formWrap}>
                {curForm === "logup" && <Logup />}
                {curForm === "signup" && <Signup />}
            </div>
        </div>
    );
};

export default AuthWindow;

/* {curWindow === "signup" && <Signup />}
            {curWindow === "logup" && <Logup />} */
/* <div className={s.authBtns}>
                <button
                    className={s.authBtn}
                    onClick={() => handleClick("signup")}
                >
                    регистрация
                </button>
                <button
                    className={s.authBtn}
                    onClick={() => handleClick("logup")}
                >
                    вход
                </button>
            </div> */
