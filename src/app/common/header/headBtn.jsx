import React from "react";
import { Link } from "react-router-dom";
import s from "./header.module.css";

const HeadBtn = ({ name, link, action }) => {
  return (
    <Link to={link}>
      <button onClick={action} className={"btn " + s.headerBtn}>
        {name}
      </button>
    </Link>
  );
};

export default HeadBtn;
