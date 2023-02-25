import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import s from "./auth.module.css";

const BtnLogin = ({
  errors,
  setUser,
  formValues,
  setLoading,
  setResponseMes,
}) => {
  const navigate = useNavigate();
  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(() => {
    const error = errors.find((error) => error.name);
    error ? setFormIsValid(false) : setFormIsValid(true);
  }, [errors]);

  // ответ на кнопку войти
  const response = (user) => {
    !user
      ? setResponseMes("Логин или пароль не верен!")
      : setResponseMes("Добро пожаловать, " + user.name + "!");

    setTimeout(() => {
      setResponseMes();
      user && navigate("/");
    }, 1500);
  };

  // отправка введённых данных на сервер
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
