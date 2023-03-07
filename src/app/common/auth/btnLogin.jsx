import React, { useEffect, useState } from "react";
import s from "./auth.module.css";

const BtnLogin = ({
  errors,
  setUser,
  sendData,
  formValues,
  setLoading,
  setResponseMes,
}) => {
  // проверка валидности
  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(() => {
    const error = errors.find((error) => error.name);
    error ? setFormIsValid(false) : setFormIsValid(true);
  }, [errors]);

  return (
    <button
      type="button"
      onClick={() => formIsValid && sendData(formValues)}
      className={"btn " + s.button + " " + (!formIsValid && "disabled")}
    >
      войти
    </button>
  );
};

export default BtnLogin;
