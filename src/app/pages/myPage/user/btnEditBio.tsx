import * as React from "react";
import { Link } from "react-router-dom";
import s from "../myPage.module.css";
import settings from "../../../img/settings.svg";

const BtnEditBio = () => {
    return (
        <Link to={`editor`} className={s.btnToEdit} title="редактировать">
            <img src={String(settings)} alt="editBio" />
        </Link>
    );
};

export default BtnEditBio;
