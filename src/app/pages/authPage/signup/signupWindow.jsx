import api from "../../../api";
import BtnAuth from "../btnAuth";
import s from "../auth.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../formFields/textField";
import Loading from "../../../common/loading/loading";
import { errHandler } from "../../../utils/errHandler";
import ResponseMes from "../../../common/responseMes/responseMes";

const SignupWindow = () => {
  const defForm = { name: "", email: "", password: "", rePassword: "" };
  const [formValues, setFormValues] = useState(defForm);
  const [responseMes, setResponseMes] = useState();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // удаление ошибок по ключу поля
  const clearErr = (key) => {
    delete errors[key];
    setErrors(errors);
  };

  // отправка данных
  const sendData = (formValues, e) => {
    e.preventDefault();
    setLoading(true);
    const errors = errHandler(formValues);
    const formIsValid = !Object.keys(errors).length;
    setErrors(errors);
    if (formIsValid) {
      api.users
        .signup(formValues)
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
      <h1 className={s.title}>регистрация</h1>
      <form className={s.form} onSubmit={(e) => sendData(formValues, e)}>
        {/* имя */}
        <TextField
          type="name"
          label="имя"
          maxLength={30}
          formName="name"
          error={errors.name}
          clearErr={clearErr}
          formValue={formValues.name}
          setFormValues={setFormValues}
        />

        {/* Почта */}
        <TextField
          type="email"
          label="почта"
          maxLength={300}
          formName="email"
          clearErr={clearErr}
          error={errors.email}
          formValue={formValues.email}
          setFormValues={setFormValues}
        />

        {/* Пароль */}
        <TextField
          label="пароль"
          maxLength={30}
          type="password"
          formName="password"
          clearErr={clearErr}
          error={errors.password}
          setFormValues={setFormValues}
          formValue={formValues.password}
        />

        {/* Повторение пароля */}
        <TextField
          maxLength={30}
          type="password"
          clearErr={clearErr}
          formName="rePassword"
          label="повторите пароль"
          error={errors.rePassword}
          setFormValues={setFormValues}
          formValue={formValues.rePassword}
        />

        {/* кнопка зарегистрироваться */}
        <BtnAuth
          sendData={sendData}
          formValues={formValues}
          name="зарегистрироваться"
          error={Object.keys(errors).length}
        />
      </form>

      {loading && <Loading />}
      {responseMes && <ResponseMes message={responseMes} />}
    </div>
  );
};

export default SignupWindow;
