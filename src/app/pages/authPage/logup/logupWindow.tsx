import * as React from "react";
import api from "../../../api";
import { useState } from "react";
import BtnAuth from "../btnAuth";
import s from "../auth.module.css";
import { useNavigate } from "react-router-dom";
import TextField from "../formFields/textField";
import BtnForgotPassword from "./btnForgotPassword";
import Loading from "../../../common/loading/loading";
import { errHandler } from "../../../utils/errHandler";
import ResponseMes from "../../../common/responseMes/responseMes";
import { ILogupError, ILogupform } from "../../../../types/types";

const LogupWindow = (): JSX.Element => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState<ILogupError>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [responseMes, setResponseMes] = useState<string>();
    const [formValues, setFormValues] = useState<ILogupform>({
        login: "",
        password: "",
    });

    // удаление ошибок по ключу поля
    const clearErr = (key: string): void => {
        delete errors[key as keyof ILogupError];
        setErrors(errors);
    };

    // отправка данных
    const sendData = (
        formValue: ILogupform,
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        setLoading(true);
        const errors = errHandler(formValues);
        const formIsValid = !Object.keys(errors).length;
        setErrors(errors);
        if (formIsValid) {
            api.users
                .logup(formValue)
                .then((message: string) => {
                    setResponseMes(message);
                    setTimeout(() => navigate("/"), 2000);
                })
                .catch((err) => {
                    setResponseMes(err);
                    setTimeout(() => setResponseMes(""), 2000);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    };

    return (
        <div className={s.wrap}>
            <h1 className={s.title}>вход</h1>
            <form
                className={s.form}
                onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                    sendData(formValues, e)
                }
            >
                <TextField
                    type="text"
                    label="почта"
                    maxLength={300}
                    formName="login"
                    clearErr={clearErr}
                    error={errors.login}
                    formValue={formValues.login}
                    setFormValues={setFormValues}
                />

                <TextField
                    maxLength={30}
                    label="пароль"
                    type="password"
                    formName="password"
                    clearErr={clearErr}
                    error={errors.password}
                    setFormValues={setFormValues}
                    formValue={formValues.password}
                />

                <BtnAuth name="войти" isValid={!Object.keys(errors).length} />
                <BtnForgotPassword />
            </form>

            {loading && <Loading />}
            {responseMes && <ResponseMes message={responseMes} />}
        </div>
    );
};

export default LogupWindow;
