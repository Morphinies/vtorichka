import * as React from "react";
import HeadBtn from "./headBtn";
import s from "./header.module.css";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";

const HeadNav = (): JSX.Element | undefined => {
  const userIdLS = localStorage.getItem("user");
  const userId: string | null = userIdLS ? JSON.parse(userIdLS) : null;

  let currentPage: string = useLocation().pathname;

  const navigate: NavigateFunction = useNavigate();

  const output = (): void => {
    navigate("/");
    localStorage.removeItem("user");
  };

  switch (currentPage) {
    // главная
    case "/":
      return (
        <nav className={s.navBlock}>
          {!userId ? (
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
          {userId && <HeadBtn name={"личный кабинет"} link={"/personal/bio"} />}
        </nav>
      );

    // авторизация
    case "/logup":
      return (
        <nav className={s.navBlock}>
          <HeadBtn name={"на главную"} link={"/"} />
          {!userId && <HeadBtn name={"регистрация"} link={"/signup"} />}
        </nav>
      );

    // регистрация
    case "/signup":
      return (
        <nav className={s.navBlock}>
          <HeadBtn name={"на главную"} link={"/"} />
          {!userId && <HeadBtn name={"вход"} link={"/logup"} />}
        </nav>
      );

    // личная страница
    case currentPage.match(/^\/personal/)?.input:
      return (
        <nav className={s.navBlock}>
          <HeadBtn name={"на главную"} link={"/"} />
          {userId && <HeadBtn name={"выход"} link={"/"} action={output} />}
        </nav>
      );
    default:
      console.log();
  }
};

export default HeadNav;