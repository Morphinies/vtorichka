import React, { useState } from "react";
import s from "./auth.module.css";
import { Link } from "react-router-dom";
import api from "../../api";

const Login = () => {
  const [formValues, setFormValues] = useState({ login: "", password: "" });
  const [user, setUser] = useState({});
  user.id && console.log(user);

  const enterLogin = (enterValue) => {
    enterValue.length <= 30 &&
      setFormValues((prevState) => {
        return { ...prevState, login: enterValue };
      });
  };

  const enterPassword = (enterValue) => {
    enterValue.length <= 20 &&
      setFormValues((prevState) => {
        return { ...prevState, password: enterValue };
      });
  };

  const sendData = ({ login, password }) => {
    api.usersList.fetchAll().then((data) => {
      const user = data.find(
        (user) => user.password === password && user.email === login
      );
      return user && setUser(user);
    });
  };

  return (
    <div className={s.wrap}>
      <h1 className={s.title}>вход</h1>
      <form className={s.form} action="">
        {/* Почта */}
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

        {/* Пароль */}
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

        {/* кнопка войти */}
        <button
          onClick={() => sendData(formValues)}
          type="button"
          className={"btn " + s.button}
        >
          войти
        </button>

        {/* ссылка на восстановление пароля */}
        <Link to="/login">
          <p className={s.helpText}>забыли пароль?</p>{" "}
        </Link>
      </form>
    </div>
  );
};

export default Login;
