import React from "react";
import s from "./auth.module.css";

const BtnLogin = ({ sendData, formValues, name }) => {
  return (
    <button
      type="submit"
      onClick={(e) => sendData(formValues, e)}
      className={"btn " + s.button}
    >
      {name}
    </button>
  );
};

export default BtnLogin;
