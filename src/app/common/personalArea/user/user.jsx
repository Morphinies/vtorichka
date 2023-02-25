import React from "react";
import About from "./about";
import Avatar from "./avatar";
import s from "../personalArea.module.css";

const User = ({ user }) => {
  return (
    <div className={s.user}>
      <Avatar photo={user.avatar} name={user.name} />
      <About text={user.about} />
    </div>
  );
};

export default User;
