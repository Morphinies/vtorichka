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
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMes, setResponseMes] = useState();
  const [errorsHidden, setErrorsHidden] = useState(true);
  const [formValues, setFormValues] = useState({ login: "", password: "" });

  // валидность формы
  const formIsValid = !Object.values(errors).find((error) => error.name);

  // проверка полей на валидность
  useEffect(() => {
    setErrors((prevState) => {
      return {
        ...prevState,
        login: handleError(formValues.login, ["empty", "mailFormat", "indent"]),
        password: handleError(formValues.password, ["empty", "indent"]),
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
    } else {
      setErrorsHidden(false);
    }
  };

  return (
    <div className={s.wrap}>
      <h1 className={s.title}>вход</h1>
      <form className={s.form} onSubmit={(e) => sendData(formValues, e)}>
        <TextField
          type="email"
          label="почта"
          maxLength={300}
          fieldName="login"
          error={errors.login}
          errorsHidden={errorsHidden}
          formValue={formValues.login}
          setFormValues={setFormValues}
          setErrorsHidden={setErrorsHidden}
        />

        <TextField
          maxLength={30}
          label="пароль"
          type="password"
          fieldName="password"
          error={errors.password}
          errorsHidden={errorsHidden}
          setFormValues={setFormValues}
          formValue={formValues.password}
          setErrorsHidden={setErrorsHidden}
        />

        {/* кнопка войти */}
        <BtnLogin name="войти" sendData={sendData} formValues={formValues} />

        {/* ссылка на восстановление пароля */}
        <BtnForgotPassword />
      </form>

      {loading && <Loading />}
      {responseMes && <ResponseMes message={responseMes} />}
    </div>
  );
};

export default Login;
