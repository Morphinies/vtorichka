import React from "react";
import s from "../auth.module.css";

const Password = ({ formValues, setFormValues }) => {
  // ввод пароля
  const enterPassword = (enterValue) => {
    const regExp = enterValue.replace(/\W/g, "");
    enterValue.length <= 20 &&
      setFormValues((prevState) => {
        return { ...prevState, password: regExp };
      });
  };

  return (
    <div>
      <p className={s.inputLine}>
        <label className={s.label} htmlFor="password">
          пароль:
        </label>
        <input
          id="password"
          maxLength={20}
          type="password"
          name="password"
          className={s.input}
          value={formValues.password}
          onChange={(e) => enterPassword(e.target.value)}
        />
      </p>
      <p className={s.errorMessage}>123*</p>
    </div>
  );
};

export default Password;
