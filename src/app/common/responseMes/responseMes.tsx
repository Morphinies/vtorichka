import * as React from "react";
import s from "./responseMes.module.css";

interface IResponseMes {
  message: string;
}

const ResponseMes = ({ message }: IResponseMes): JSX.Element => {
  return (
    <div className={s.message}>
      <h2 className={s.messageText}>{message}</h2>
    </div>
  );
};

export default ResponseMes;
