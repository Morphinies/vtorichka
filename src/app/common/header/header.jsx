import React from "react";
import s from "./header.module.css";
import logo from "../../img/logo.svg";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logoBlock}>
        <img className={s.logoImg} src={logo} alt="logo" />
        <h1 className={s.logoName}>вторичка</h1>
      </div>
      <nav className={s.navBlock}>
        <button>вход</button>
        <button>регистрация</button>
      </nav>
    </header>
  );
};

export default Header;
