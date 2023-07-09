import React from "react";
import s from "./auth.module.css";

const BtnAuth = ({ sendData, formValues, name, error }) => {
  return (
    <button
      type="submit"
      disabled={error}
      onClick={(e) => sendData(formValues, e)}
      className={"btn " + s.button}
    >
      {name}
    </button>
  );
};

export default BtnAuth;
