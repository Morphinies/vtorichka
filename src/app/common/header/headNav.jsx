import React from "react";
import HeadBtn from "./headBtn";
import s from "./header.module.css";

const HeadNav = () => {
  return (
    <nav className={s.navBlock}>
      <HeadBtn name={"вход"} />
      <HeadBtn name={"регистрация"} />
    </nav>
  );
};

export default HeadNav;
