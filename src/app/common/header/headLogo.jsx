import React from "react";
import s from "./header.module.css";
import logo from "../../img/logo.svg";
import { useNavigate } from "react-router-dom";

const HeadLogo = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")} className={s.logoBlock}>
      <img className={s.logoImg} src={logo} alt="logo" />
      <h1 className={s.logoName}>вторичка</h1>
    </div>
  );
};

export default HeadLogo;
