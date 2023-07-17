import * as React from "react";
import s from "../auth.module.css";
import { Link } from "react-router-dom";

const BtnForgotPassword = (): JSX.Element => {
  return (
    <Link to="/login">
      <p className={s.helpText}>забыли пароль?</p>{" "}
    </Link>
  );
};

export default BtnForgotPassword;
