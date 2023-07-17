import * as React from "react";
import s from "./auth.module.css";
import { IBtnAuth } from "../../../types/types";

const BtnAuth = ({ name, isValid }: IBtnAuth): JSX.Element => {
  return (
    <button type="submit" disabled={!isValid} className={"btn " + s.button}>
      {name}
    </button>
  );
};

export default BtnAuth;
