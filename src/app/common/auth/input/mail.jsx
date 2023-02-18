import React, { useEffect, useState } from "react";
import s from "../auth.module.css";

const Mail = ({ formValues, setFormValues }) => {
  // ввод почты
  const [errorMes, setErrorMes] = useState("");
  const enterLogin = (enterValue) => {
    const regExp = enterValue.replace(/\W/g, "");
    enterValue.length <= 30 &&
      setFormValues((prevState) => {
        return { ...prevState, login: regExp };
      });
  };
  console.log(errorMes);

  const mailRegExp = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i);

  const error = (value, rules) => {
    for (let rule of rules) {
      // empty
      if (rule === "empty") {
        if (value === "") {
          setErrorMes("заполните стороку");
          break;
        } else {
          setErrorMes("");
        }
      }
      // mailFormat
      if (rule === "mailFormat") {
        if (!mailRegExp.test(value)) {
          setErrorMes("Неверный формат почты");
          break;
        } else {
          setErrorMes("");
        }
      }
    }
  };

  // empty error
  // if (rule === "empty") {
  //   value === "" ? setErrorMes("заполните стороку") : setErrorMes("");
  // } else if (rule === "mailFormat") {
  //   mailRegExp.test(value)
  //     ? setErrorMes("")
  //     : setErrorMes("не соответстует формату эл. почты");
  // }

  useEffect(() => {
    error(formValues.login, ["empty", "mailFormat"]);
  }, [formValues]);

  return (
    <div>
      <p className={s.inputLine}>
        <label className={s.label} htmlFor="login">
          почта:
        </label>
        <input
          id="login"
          type="text"
          name="login"
          maxLength={30}
          className={s.input}
          value={formValues.login}
          onChange={(e) => enterLogin(e.target.value)}
        />
      </p>
      <p className={s.errorMessage}>{errorMes && errorMes + "*"}</p>
    </div>
  );
};

export default Mail;
