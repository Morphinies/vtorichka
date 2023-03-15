import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeadBtn from "./headBtn";
import s from "./header.module.css";

const HeadNav = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  let currentPage = useLocation().pathname;
  const navigate = useNavigate();

  const output = () => {
    navigate("/");
    window.location.reload();
    localStorage.removeItem("user");
  };

  switch (currentPage) {
    case "/":
      return !user ? (
        <nav className={s.navBlock}>
          <HeadBtn name={"вход"} link={"/login"} />
          <HeadBtn name={"регистрация"} link={"/signUp"} />
        </nav>
      ) : (
        <nav className={s.navBlock}>
          <HeadBtn name={"личный кабинет"} link={"/personal/bio"} />
          <HeadBtn name={"выход"} link={"/"} action={output} />
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
    case "/personal/bio":
    case "/personal/sales":
    case "/personal/products":
      return (
        <nav className={s.navBlock}>
          <HeadBtn name={"на главную"} link={"/"} />
          <HeadBtn name={"выход"} link={"/"} action={output} />
        </nav>
      );
    default:
      console.log();
  }
};

export default HeadNav;
