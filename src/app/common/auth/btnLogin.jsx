import React from "react";
import s from "./auth.module.css";

const BtnLogin = ({ sendData, formValues }) => {
  return (
    <button
      onClick={() => sendData(formValues)}
      type="button"
      className={"btn " + s.button}
    >
      войти
    </button>
  );
};

export default BtnLogin;
