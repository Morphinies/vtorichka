import React, { useEffect, useRef, useState } from "react";
import s from "../auth.module.css";

const Mail = ({ formValues, setFormValues }) => {
  // ввод почты
  const [errorMes, setErrorMes] = useState("");
  const [success, setSuccess] = useState(false);
  useRef();
  let timerId = useRef();

  const enterLogin = (enterValue) => {
    clearTimeout(timerId.current);
    const regExp = /[A-Z1-9._%+-@]/gi;
    const resValue = enterValue
      ? enterValue.match(regExp) && enterValue.match(regExp).join("")
      : "";
    enterValue.length <= 30 &&
      setFormValues((prevState) => {
        return { ...prevState, login: resValue };
      });
  };

  const error = (value, rules) => {
    let errors = 0;
    for (let rule of rules) {
      // empty
      if (rule === "empty") {
        if (value === "") {
          setErrorMes("заполните поле");
          errors += 1;
          break;
        }
      }
      // mailFormat
      if (rule === "mailFormat") {
        const mailRegExp = new RegExp(
          /^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i
        );
        if (!mailRegExp.test(value)) {
          setErrorMes("неверный формат почты");
          errors += 1;
          break;
        }
      }
    }
    return errors;
  };

  useEffect(() => {
    setErrorMes("");
    setSuccess(false);
    timerId.current = setTimeout(() => {
      error(formValues.login, ["empty", "mailFormat"]) === 0 &&
        setSuccess(true);
    }, 1000);
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
          value={formValues.login}
          onChange={(e) => enterLogin(e.target.value)}
          className={
            s.input +
            " " +
            (errorMes && s.inputError) +
            " " +
            (success && s.inputSuccess)
          }
        />
      </p>
      <p className={s.errorMessage}>{errorMes && errorMes + " *"}</p>
    </div>
  );
};

export default Mail;
