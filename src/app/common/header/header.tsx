import React from "react";
import HeadNav from "./headNav";
import s from "./header.module.css";
import HeadLogo from "./headLogo";

const Header = (): JSX.Element => {
  return (
    <header className={s.header}>
      <HeadLogo />
      <HeadNav />
    </header>
  );
};

export default Header;
