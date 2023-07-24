import * as React from "react";
import s from "./header.module.css";
import { Link } from "react-router-dom";
import { IHeadBtn } from "../../../types/types";

const HeadBtn = ({ icon, name, link, action }: IHeadBtn): JSX.Element => {
  return (
    <Link to={link}>
      <button onClick={action} className={"btn " + s.headerBtn}>
        {icon ? <img src={icon} alt={name} title={name} /> : name}
      </button>
    </Link>
  );
};

export default HeadBtn;
