import React from "react";
import s from "./header.module.css";
import logo from "../../img/logo.svg";
import { Link } from "react-router-dom";

const HeadLogo = () => {
  return (
    <Link to={"/"}>
      <div className={s.logoBlock}>
        <img className={s.logoImg} src={logo} alt="logo" />
        <h1 className={s.logoName}>вторичка</h1>
      </div>
    </Link>
  );
};

export default HeadLogo;
