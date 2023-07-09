import React from "react";
import SignupWindow from "./signupWindow";
import { useLoaderData } from "react-router-dom";
import ErrorMessage from "../../../common/errorMes/errorMessage";

const Signup = () => {
  const curUser = useLoaderData();

  return !curUser ? (
    <SignupWindow />
  ) : (
    <ErrorMessage
      message={"Для начала регистрации выйдите из текущего аккаунта."}
    />
  );
};

export default Signup;
