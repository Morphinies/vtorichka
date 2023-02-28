import React from "react";
import s from "../personalArea.module.css";

const UserAbout = ({ text }) => {
  return (
    <div className={s.about}>
      <p className={s.textAbout}>{text}</p>
    </div>
  );
};

export default UserAbout;
