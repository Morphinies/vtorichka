import * as React from "react";
import s from "../myPage.module.css";
import { NavLink } from "react-router-dom";

interface ISidebarBtn {
  link: string;
  btnName: string;
}
const SidebarBtn = ({ link, btnName }: ISidebarBtn): JSX.Element => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? s.activeLink : undefined)}
    >
      <button type="button" className={s.btnOpenBlock}>
        <p className={s.btnOpenBlockText}>{btnName} </p>
      </button>
    </NavLink>
  );
};

export default SidebarBtn;
