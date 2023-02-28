import React from "react";
import s from "../personalArea.module.css";

const UserName = ({ name }) => {
  return <h1 className={s.avatarName}>{name}</h1>;
};

export default UserName;
