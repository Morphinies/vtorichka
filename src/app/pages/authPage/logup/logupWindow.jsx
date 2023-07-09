import api from "../../../api";
import BtnAuth from "../btnAuth";
import s from "../auth.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../formFields/textField";
import BtnForgotPassword from "./btnForgotPassword";
import Loading from "../../../common/loading/loading";
import { errHandler } from "../../../utils/errHandler";
import ResponseMes from "../../../common/responseMes/responseMes";

const LogupWindow = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMes, setResponseMes] = useState();
  const [formValues, setFormValues] = useState({ login: "", password: "" });

  // удаление ошибок по ключу поля
  const clearErr = (key) => {
    delete errors[key];
    setErrors(errors);
  };

  // отправка данных
  const sendData = (formValue, e) => {
    e.preventDefault();
    setLoading(true);
    const errors = errHandler(formValues);
    const formIsValid = !Object.keys(errors).length;
    setErrors(errors);
    if (formIsValid) {
      api.users
        .logup(formValue)
        .then((message) => {
          setResponseMes(message);
          setTimeout(() => navigate("/"), 2000);
        })
        .catch((err) => {
          setResponseMes(err);
          setTimeout(() => setResponseMes(), 2000);
        })
        .finally(setLoading(false));
    } else {
      setLoading(false);
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
          formName="login"
          clearErr={clearErr}
          error={errors.login}
          formValue={formValues.login}
          setFormValues={setFormValues}
        />

        <TextField
          maxLength={30}
          label="пароль"
          type="password"
          formName="password"
          clearErr={clearErr}
          error={errors.password}
          setFormValues={setFormValues}
          formValue={formValues.password}
        />

        <BtnAuth name="войти" sendData={sendData} formValues={formValues} />
        <BtnForgotPassword />
      </form>

      {loading && <Loading />}
      {responseMes && <ResponseMes message={responseMes} />}
    </div>
  );
};

export default LogupWindow;
