import * as React from "react";
import s from "./header.module.css";
import logo from "../../img/logo.svg";
import { Link } from "react-router-dom";

interface IHeadLogo {
  logoName: string;
}
const HeadLogo = ({ logoName }: IHeadLogo): JSX.Element => {
  return (
    <Link to={""}>
      <div className={s.logoBlock}>
        <img className={s.logoImg} src={String(logo)} alt="logo" />
        <h1 className={s.logoName}>{logoName}</h1>
      </div>
    </Link>
  );
};

export default HeadLogo;
