// import Mail from "./input/mail";
// import Password from "./input/password";
import handleError from "../../utils/handleError";
import BtnLogin from "./btnLogin";
import s from "./auth.module.css";
import ResponseMes from "./responseMes";
import Loading from "../loading/loading.jsx";
import BtnForgotPassword from "./btnForgotPassword";
import React, { useEffect, useState } from "react";
import TextField from "./input/textField";

const Login = () => {
  const [user, setUser] = useState();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMes, setResponseMes] = useState();
  const [formValues, setFormValues] = useState({ login: "", password: "" });

  useEffect(() => {
    console.log(user);
    localStorage.removeItem("user_vt");
    user && localStorage.setItem("user_vt", JSON.stringify(user));
  }, [user]);

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

  return (
    <div className={s.wrap}>
      <h1 className={s.title}>вход</h1>
      <form className={s.form} action="">
        <TextField
          type="email"
          label="почта"
          fieldName="login"
          error={errors.login}
          formValue={formValues.login}
          setFormValues={setFormValues}
        />

        <TextField
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
