import React from "react";
import { Link } from "react-router-dom";
import s from "./header.module.css";

interface IHeadBtn {
  name: string;
  link: string;
  action?: () => void;
}

const HeadBtn = ({ name, link, action }: IHeadBtn): JSX.Element => {
  return (
    <Link to={link}>
      <button onClick={action} className={"btn " + s.headerBtn}>
        {name}
      </button>
    </Link>
  );
};

export default HeadBtn;
