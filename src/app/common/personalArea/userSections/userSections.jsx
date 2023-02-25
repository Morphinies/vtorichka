import React from "react";
import Section from "./section";
import s from "../personalArea.module.css";

const UserSections = () => {
  return (
    <ul className={s.sectionsList}>
      <Section name="мои объявления" />
      <Section name="избранное" />
      <Section name="диалоги" />
      <Section name="отзывы" />
    </ul>
  );
};

export default UserSections;
