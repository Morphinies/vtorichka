import { useRouteError } from "react-router-dom";
import s from "./errorPage.module.css";
import * as React from "react";

const ErrorPage = (): JSX.Element => {
  const error: any = useRouteError();
  console.log(JSON.parse(error));

  return (
    <div className={s.errorPage}>
      <div className={s.errorBlock}>
        <h1 className={s.errorHeader}>Упс!</h1>
        <p className={s.errorDescription}>
          К сожалению, произошла непредвиденная ошибка.
        </p>
        <p className={s.errorName}>{error.statusText || error.message}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
