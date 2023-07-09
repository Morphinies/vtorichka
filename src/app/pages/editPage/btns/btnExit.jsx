import React from "react";
import s from "../editor.module.css";
import { cancelImg } from "../../../img/pictures";
import { useNavigate } from "react-router-dom";

const BtnExit = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className={s.btnCancel}>
      <img src={cancelImg} alt="выход" title="выход" />
    </button>
  );
};

export default BtnExit;
