import React from "react";
import s from "../auth.module.css";
import { Link } from "react-router-dom";

const BtnForgotPassword = () => {
  return (
    <Link to="/login">
      <p className={s.helpText}>забыли пароль?</p>{" "}
    </Link>
  );
};

export default BtnForgotPassword;
