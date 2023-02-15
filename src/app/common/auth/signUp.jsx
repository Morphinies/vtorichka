import React from "react";
import s from "./auth.module.css";

const SignUp = () => {
  return (
    <div className={s.wrap}>
      <h1 className={s.title}>регистрация</h1>
      <form className={s.form} action="">
        {/* имя */}
        <p className={s.inputLine}>
          <label className={s.label} htmlFor="name">
            имя:
          </label>
          <input className={s.input} type="text" name="name" id="name" />
        </p>

        {/* Почта */}
        <p className={s.inputLine}>
          <label className={s.label} htmlFor="login">
            почта:
          </label>
          <input className={s.input} type="text" name="login" id="login" />
        </p>

        {/* Пароль */}
        <p className={s.inputLine}>
          <label className={s.label} htmlFor="password">
            пароль:
          </label>
          <input
            className={s.input}
            type="password"
            name="password"
            id="password"
          />
        </p>

        {/* Повторение пароля */}
        <p className={s.inputLine}>
          <label className={s.label} htmlFor="repPassword">
            повторите пароль:
          </label>
          <input
            className={s.input}
            type="password"
            name="repPassword"
            id="repPassword"
          />
        </p>

        {/* кнопка войти */}
        <button type="button" className={"btn " + s.button}>
          зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default SignUp;
