import React from "react";
import s from "../personalArea.module.css";

const Section = ({ name }) => {
  return (
    <li className={s.sectionItem}>
      <button className={"btn " + s.sectionBtn}>{name}</button>
    </li>
  );
};

export default Section;
