import api from "../../api";
import s from "./auth.module.css";
import BtnLogin from "./btnLogin";
import ResponseMes from "./responseMes";
import Loading from "../loading/loading";
import TextField from "./input/textField";
import AvatarField from "./input/avatarField";
import { useNavigate } from "react-router-dom";
import handleError from "../../utils/handleError";
import React, { useEffect, useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMes, setResponseMes] = useState();
  const [errorsHidden, setErrorsHidden] = useState(true);
  const [formValues, setFormValues] = useState({
    avatar: "",
    name: "",
    email: "",
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
        password: handleError(formValues.password, [
          "empty",
          "indent",
          "password",
        ]),
        email: handleError(formValues.email, ["empty", "mailFormat", "indent"]),
        rePassword: handleError(
          formValues.rePassword,
          ["empty", "equal"],
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
        .signup(formValues)
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
      <h1 className={s.title}>регистрация</h1>
      <form className={s.form} onSubmit={(e) => sendData(formValues, e)}>
        {/* аватар */}
        <AvatarField />

        {/* имя */}
        <TextField
          type="name"
          label="имя"
          maxLength={30}
          fieldName="name"
          error={errors.name}
          errorsHidden={errorsHidden}
          formValue={formValues.name}
          setFormValues={setFormValues}
          setErrorsHidden={setErrorsHidden}
        />

        {/* Почта */}
        <TextField
          type="email"
          label="почта"
          maxLength={300}
          fieldName="email"
          error={errors.email}
          errorsHidden={errorsHidden}
          formValue={formValues.email}
          setFormValues={setFormValues}
          setErrorsHidden={setErrorsHidden}
        />

        {/* Пароль */}
        <TextField
          label="пароль"
          maxLength={30}
          type="password"
          fieldName="password"
          error={errors.password}
          errorsHidden={errorsHidden}
          setFormValues={setFormValues}
          formValue={formValues.password}
          setErrorsHidden={setErrorsHidden}
        />

        {/* Повторение пароля */}
        <TextField
          maxLength={30}
          type="password"
          fieldName="rePassword"
          label="повторите пароль"
          error={errors.rePassword}
          errorsHidden={errorsHidden}
          setFormValues={setFormValues}
          formValue={formValues.rePassword}
          setErrorsHidden={setErrorsHidden}
        />

        {/* кнопка войти */}
        <BtnLogin
          sendData={sendData}
          formValues={formValues}
          name="зарегистрироваться"
        />
      </form>

      {loading && <Loading />}
      {responseMes && <ResponseMes message={responseMes} />}
    </div>
  );
};

export default SignUp;
