import * as React from "react";
import s from "./errorMessage.module.css";

interface IErrorMessage {
    message: string;
}
const ErrorMessage = ({ message }: IErrorMessage): JSX.Element => {
    return (
        <div className={s.errorBlock}>
            <h1 className={s.errorMessage}>{message}</h1>
        </div>
    );
};

export default ErrorMessage;
