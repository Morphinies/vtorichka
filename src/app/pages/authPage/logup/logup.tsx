import * as React from "react";
import LogupWindow from "./logupWindow";
import { useLoaderData } from "react-router-dom";
import ErrorMessage from "../../../common/errorMes/errorMessage";

const Logup = (): JSX.Element => {
  const curUser = useLoaderData();

  return !curUser ? (
    <LogupWindow />
  ) : (
    <ErrorMessage
      message={"Для начала авторизации выйдите из текущего аккаунта."}
    />
  );
};

export default Logup;
