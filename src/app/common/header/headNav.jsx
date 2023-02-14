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
          <HeadBtn name={"вход"} link={"/auth"} />
          <HeadBtn name={"регистрация"} link={"/reg"} />
        </nav>
      );
    case "/auth":
      return (
        <nav className={s.navBlock}>
          <HeadBtn name={"на главную"} link={"/"} />
          <HeadBtn name={"регистрация"} link={"/reg"} />
        </nav>
      );
    case "/reg":
      return (
        <nav className={s.navBlock}>
          <HeadBtn name={"на главную"} link={"/"} />
          <HeadBtn name={"вход"} link={"/auth"} />
        </nav>
      );
    default:
      console.log();
  }
};

export default HeadNav;
