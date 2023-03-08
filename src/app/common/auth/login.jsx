import api from "../../api";
import BtnLogin from "./btnLogin";
import s from "./auth.module.css";
import ResponseMes from "./responseMes";
import TextField from "./input/textField";
import Loading from "../loading/loading.jsx";
import { useNavigate } from "react-router-dom";
import handleError from "../../utils/handleError";
import React, { useEffect, useState } from "react";
import BtnForgotPassword from "./btnForgotPassword";

const Login = () => {
  const [user, setUser] = useState();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMes, setResponseMes] = useState();
  const [formValues, setFormValues] = useState({ login: "", password: "" });

  const navigate = useNavigate();

  // проверка полей на валидность
  useEffect(() => {
    setErrors((prevState) => {
      return {
        ...prevState,
        login: handleError(formValues.login, ["empty", "mailFormat"]),
        password: handleError(formValues.password, ["empty"]),
      };
    });
  }, [formValues]);

  // ответ на кнопку войти
  const response = (user) => {
    !user
      ? setResponseMes("Логин или пароль не верен!")
      : setResponseMes("Добро пожаловать, " + user.name + "!");

    setTimeout(() => {
      setResponseMes();
      user && navigate("/");
    }, 1000);
  };

  // отправка введённых данных на сервер
  const sendData = ({ login, password }) => {
    setLoading(true);
    api.users.login(login, password).then((data) => {
      setUser(data);
      response(data);
      setLoading(false);
    });
  };

  return (
    <div className={s.wrap}>
      <h1 className={s.title}>вход</h1>
      <form className={s.form} onSubmit="">
        <TextField
          type="email"
          label="почта"
          maxLength={30}
          fieldName="login"
          error={errors.login}
          formValue={formValues.login}
          setFormValues={setFormValues}
        />

        <TextField
          maxLength={30}
          label="пароль"
          type="password"
          fieldName="password"
          error={errors.password}
          setFormValues={setFormValues}
          formValue={formValues.password}
        />

        {/* кнопка войти */}
        <BtnLogin
          setUser={setUser}
          sendData={sendData}
          formValues={formValues}
          setLoading={setLoading}
          errors={Object.values(errors)}
          setResponseMes={setResponseMes}
        />

        {/* ссылка на восстановление пароля */}
        <BtnForgotPassword />
      </form>

      {loading && <Loading />}
      {responseMes && <ResponseMes message={responseMes} />}
    </div>
  );
};

export default Login;
