import * as React from "react";
import s from "../myPage.module.css";
import { Link } from "react-router-dom";
import settings from "../../../img/settings.svg";

const BtnEditBio = () => {
    return (
        <Link to={`editor`} className={s.btnToEdit} title="редактировать">
            <img src={settings} alt="editBio" />
        </Link>
    );
};

export default BtnEditBio;
