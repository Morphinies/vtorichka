import React from "react";
import { Link } from "react-router-dom";
import s from "../personalPage.module.css";
import settings from "../../../img/settings.svg";

const BtnEditBio = ({ userID }) => {
  return (
    <Link
      to={`/userEditor/${userID}`}
      className={s.btnToEdit}
      title="редактировать"
    >
      <img src={settings} alt="editBio" />
    </Link>
  );
};

export default BtnEditBio;
