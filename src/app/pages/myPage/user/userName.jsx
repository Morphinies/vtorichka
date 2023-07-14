import React from "react";
import s from "../myPage.module.css";

const UserName = ({ name }) => {
  return <h1 className={s.avatarName}>{name}</h1>;
};

export default UserName;