import React from "react";
import { NavLink } from "react-router-dom";
import s from "../myPage.module.css";

const SidebarBtn = ({ link, btnName }) => {
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
