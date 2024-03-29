import * as React from "react";
import s from "../myPage.module.css";
import { NavLink } from "react-router-dom";
import { ISidebarBtn } from "../../../../types/types";

const SidebarBtn = ({ link, btnName }: ISidebarBtn): JSX.Element => {
    return (
        <NavLink
            to={link}
            className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
            <button type="button" className={s.btnOpenBlock}>
                <p className={s.btnOpenBlockText}>{btnName} </p>
            </button>
        </NavLink>
    );
};

export default SidebarBtn;
