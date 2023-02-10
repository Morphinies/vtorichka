import React from "react";
import s from "./header.module.css";

const HeadBtn = ({ name }) => {
  return <button className={"btn " + s.headerBtn}>{name}</button>;
};

export default HeadBtn;
