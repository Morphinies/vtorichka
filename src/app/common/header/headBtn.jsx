import React from "react";
import { Link } from "react-router-dom";
import s from "./header.module.css";

const HeadBtn = ({ name, link }) => {
  return (
    <Link to={link}>
      <button className={"btn " + s.headerBtn}>{name}</button>
    </Link>
  );
};

export default HeadBtn;
