import React from "react";
import s from "../personalArea.module.css";

const UserSections = () => {
  return (
    <ul>
      <li>
        <button className={"btn " + s.sectionBtn}>избранное</button>
      </li>
      <li>
        <button className={"btn " + s.sectionBtn}>мои объявления</button>
      </li>
    </ul>
  );
};

export default UserSections;
