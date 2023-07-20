import api from "../../../api";
import * as React from "react";
import { useState } from "react";
import BtnAuth from "../btnAuth";
import s from "../auth.module.css";
import { useNavigate } from "react-router-dom";
import TextField from "../formFields/textField";
import Loading from "../../../common/loading/loading";
import { errHandler } from "../../../utils/errHandler";
import ResponseMes from "../../../common/responseMes/responseMes";
import { IProdFormErr } from "../../../../types/types";

interface ISignupForm {
  name?: string;
  email?: string;
  password?: string;
  rePassword?: string;
}
interface ISignupFormErrors {
  name?: IProdFormErr;
  email?: IProdFormErr;
  password?: IProdFormErr;
  rePassword?: IProdFormErr;
}
const SignupWindow = () => {
  const defForm: ISignupForm = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
  };
  const [formValues, setFormValues] = useState<ISignupForm>(defForm);
  const [responseMes, setResponseMes] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<ISignupFormErrors>({});
  const navigate = useNavigate();

  // удаление ошибок по ключу поля
  const clearErr = (key: keyof ISignupForm) => {
    delete errors[key];
    setErrors(errors);
  };

  // отправка данных
  const sendData = (
    formValues: ISignupForm,
    e: React.FormEvent<HTMLFormElement>
  ) => {
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
          setTimeout(() => setResponseMes(""), 2000);
        })
        .finally(() => setLoading(false));
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
          name="зарегистрироваться"
          isValid={Boolean(Object.keys(errors).length)}
        />
      </form>

      {loading && <Loading />}
      {responseMes && <ResponseMes message={responseMes} />}
    </div>
  );
};

export default SignupWindow;