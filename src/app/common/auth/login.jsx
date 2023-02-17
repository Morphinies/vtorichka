import api from "../../api";
import s from "./auth.module.css";
import React, { useEffect, useState } from "react";
import Loading from "../loading/loading.jsx";
import ResponseMes from "./responseMes";
import Mail from "./input/mail";
import Password from "./input/password";
import BtnLogin from "./btnLogin";
import BtnForgotPassword from "./btnForgotPassword";

const Login = () => {
  const [formValues, setFormValues] = useState({ login: "", password: "" });
  const [responseMes, setResponseMes] = useState();
  const [loading, setLoading] = useState(false);
  const [setUser] = useState({});

  // ответ на кнопку войти
  const response = (user) => {
    user
      ? setResponseMes("Добро пожаловать, " + user.name + "!")
      : setResponseMes("Логин или пароль не верен!");
  };
  useEffect(() => {
    responseMes && setTimeout(() => setResponseMes(), 2000);
  });

  // отправка введённых данных и поиск на сервере
  const sendData = ({ login, password }) => {
    setLoading(true);
    api.usersList.fetchAll().then((data) => {
      const user = data.find(
        (user) => user.password === password && user.email === login
      );
      user && setUser(user);
      setLoading(false);
      response(user);
    });
  };

  return (
    <div className={s.wrap}>
      <h1 className={s.title}>вход</h1>
      <form className={s.form} action="">
        {/* Почта */}
        <Mail formValues={formValues} setFormValues={setFormValues} />

        {/* Пароль */}
        <Password formValues={formValues} setFormValues={setFormValues} />

        {/* кнопка войти */}
        <BtnLogin sendData={sendData} formValues={formValues} />

        {/* ссылка на восстановление пароля */}
        <BtnForgotPassword />
      </form>

      {loading && <Loading />}
      {responseMes && <ResponseMes message={responseMes} />}
    </div>
  );
};

export default Login;
