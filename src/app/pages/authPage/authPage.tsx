import * as React from "react";
import s from "./auth.module.css";
import AuthWindow from "./authWindow";
import { useLoaderData } from "react-router-dom";
import BtnPrevPage from "../../common/btns/btnPrevPage";
import ErrorMessage from "../../common/errorMes/errorMessage";

const AuthPage = () => {
    const curUser = useLoaderData();

    return !curUser ? (
        <div className={s.authWrap}>
            <BtnPrevPage name="авторизация" />
            <AuthWindow />
        </div>
    ) : (
        <ErrorMessage
            message={"Для начала регистрации выйдите из текущего аккаунта."}
        />
    );
};

export default AuthPage;
