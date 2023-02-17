import React from "react";
import s from "./auth.module.css";

const ResponseMes = ({ message }) => {
  return (
    <div className={s.message}>
      <h2 className={s.messageText}>{message}</h2>
    </div>
  );
};

export default ResponseMes;
