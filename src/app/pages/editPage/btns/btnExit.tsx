import * as React from "react";
import s from "../editor.module.css";
import { cancelImg } from "../../../img/pictures";
import { NavigateFunction, useNavigate } from "react-router-dom";

const BtnExit = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className={s.btnCancel}>
      <img src={String(cancelImg)} alt="выход" title="выход" />
    </button>
  );
};

export default BtnExit;
