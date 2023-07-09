import React from "react";
import s from "./errorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={s.errorBlock}>
      <h1 className={s.errorMessage}>{message}</h1>
    </div>
  );
};

export default ErrorMessage;
