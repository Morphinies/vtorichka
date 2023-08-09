import * as React from "react";
import { useState } from "react";
import s from "./auth.module.css";
import Signup from "./signup/signup";
import Logup from "./logup/logup";

const AuthPage = () => {
    const [curWindow, setCurWindow] = useState("logup");

    const handleClick = (window: string) => {
        if (window !== curWindow) {
            setCurWindow(window);
        }
    };

    return (
        <div>
            <div>
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
            </div>
            {curWindow === "signup" && <Signup />}
            {curWindow === "logup" && <Logup />}
        </div>
    );
};

export default AuthPage;
