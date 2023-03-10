import s from "./auth.module.css";
import BtnLogin from "./btnLogin";
import ResponseMes from "./responseMes";
import React, { useEffect, useState } from "react";
import Loading from "../loading/loading";
import TextField from "./input/textField";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import handleError from "../../utils/handleError";

const SignUp = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMes, setResponseMes] = useState();
  const [formValues, setFormValues] = useState({
    name: "",
    login: "",
    password: "",
    rePassword: "",
  });

  // валидность формы
  const formIsValid = !Object.values(errors).find((error) => error.name);

  // проверка полей на валидность
  useEffect(() => {
    setErrors((prevState) => {
      return {
        ...prevState,
        name: handleError(formValues.name, ["empty", "min", "indent"]),
        password: handleError(formValues.password, ["empty", "min"]),
        login: handleError(formValues.login, ["empty", "mailFormat"]),
        rePassword: handleError(
          formValues.rePassword,
          ["equal"],
          formValues.password
        ),
      };
    });
  }, [formValues]);

  // автоматическое скрытие сообщения о входе/ошибке
  useEffect(() => {
    responseMes &&
      setTimeout(() => {
        setResponseMes();
      }, 1000);
  }, [responseMes]);

  // отправка введённых данных на сервер
  const sendData = (formValues, e) => {
    e.preventDefault();
    if (formIsValid) {
      setLoading(true);
      api.users
        .login(formValues)
        .then((message) => {
          setLoading(false);
          setResponseMes(message);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        })
        .catch((err) => {
          setLoading(false);
          setResponseMes(err);
        });
    }
  };

  return (
    <div className={s.wrap}>
      <h1 className={s.title}>регистрация</h1>
      <form className={s.form} onSubmit={(e) => sendData(formValues, e)}>
        {/* имя */}
        <TextField
          type="name"
          label="имя"
          maxLength={20}
          fieldName="name"
          error={errors.name}
          formValue={formValues.name}
          setFormValues={setFormValues}
        />

        {/* Почта */}
        <TextField
          type="email"
          label="почта"
          maxLength={30}
          fieldName="login"
          error={errors.login}
          formValue={formValues.login}
          setFormValues={setFormValues}
        />

        {/* Пароль */}
        <TextField
          label="пароль"
          maxLength={30}
          type="password"
          fieldName="password"
          error={errors.password}
          setFormValues={setFormValues}
          formValue={formValues.password}
        />

        {/* Повторение пароля */}
        <TextField
          label="повторите пароль"
          maxLength={30}
          type="password"
          fieldName="rePassword"
          error={errors.rePassword}
          setFormValues={setFormValues}
          formValue={formValues.rePassword}
        />

        {/* кнопка войти */}
        <BtnLogin
          sendData={sendData}
          formValues={formValues}
          name="зарегистрироваться"
          formIsValid={formIsValid}
        />
      </form>

      {loading && <Loading />}
      {responseMes && <ResponseMes message={responseMes} />}
    </div>
  );
};

export default SignUp;
