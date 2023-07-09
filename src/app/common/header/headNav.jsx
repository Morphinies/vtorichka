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
    localStorage.removeItem("user");
  };

  switch (currentPage) {
    // главная
    case "/":
      return (
        <nav className={s.navBlock}>
          {!user ? (
            <>
              <HeadBtn name={"регистрация"} link={"/signup"} />
              <HeadBtn name={"вход"} link={"/logup"} />
            </>
          ) : (
            <>
              <HeadBtn name={"личный кабинет"} link={"/personal/bio"} />
              <HeadBtn name={"выход"} link={"/"} action={output} />
            </>
          )}
        </nav>
      );

    // продукт
    case currentPage.match(/^\/\w{24}$/)?.input:
      return (
        <nav className={s.navBlock}>
          <HeadBtn name={"на главную"} link={"/"} />
          {user && <HeadBtn name={"личный кабинет"} link={"/personal/bio"} />}
        </nav>
      );

    // авторизация
    case "/logup":
      return (
        <nav className={s.navBlock}>
          <HeadBtn name={"на главную"} link={"/"} />
          {!user && <HeadBtn name={"регистрация"} link={"/signup"} />}
        </nav>
      );

    // регистрация
    case "/signup":
      return (
        <nav className={s.navBlock}>
          <HeadBtn name={"на главную"} link={"/"} />
          {!user && <HeadBtn name={"вход"} link={"/logup"} />}
        </nav>
      );

    // личная страница
    case currentPage.match(/^\/personal/)?.input:
      return (
        <nav className={s.navBlock}>
          <HeadBtn name={"на главную"} link={"/"} />
          {user && <HeadBtn name={"выход"} link={"/"} action={output} />}
        </nav>
      );
    default:
      console.log();
  }
};

export default HeadNav;
