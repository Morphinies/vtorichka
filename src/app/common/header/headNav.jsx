import React from "react";
import { useLocation } from "react-router-dom";
import HeadBtn from "./headBtn";
import s from "./header.module.css";

const HeadNav = () => {
  let currentPage = useLocation().pathname;
  switch (currentPage) {
    case "/":
      return (
        <nav className={s.navBlock}>
          <HeadBtn name={"вход"} link={"/login"} />
          <HeadBtn name={"регистрация"} link={"/signUp"} />
        </nav>
      );
    case "/login":
      return (
        <nav className={s.navBlock}>
          <HeadBtn name={"на главную"} link={"/"} />
          <HeadBtn name={"регистрация"} link={"/signUp"} />
        </nav>
      );
    case "/signUp":
      return (
        <nav className={s.navBlock}>
          <HeadBtn name={"на главную"} link={"/"} />
          <HeadBtn name={"вход"} link={"/login"} />
        </nav>
      );
    default:
      console.log();
  }
};

export default HeadNav;
