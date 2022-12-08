import React from "react";
import s from "./header.module.css";
import logo from "../../img/logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={s.header}>
      <div onClick={() => navigate("/")} className={s.logoBlock}>
        <img className={s.logoImg} src={logo} alt="logo" />
        <h1 className={s.logoName}>вторичка</h1>
      </div>
      <nav className={s.navBlock}>
        <button className={"btn " + s.headerBtn} id={s.logInBtn}>
          вход
        </button>
        <button className={"btn " + s.headerBtn} id={s.regBtn}>
          регистрация
        </button>
      </nav>
    </header>
  );
};

export default Header;
