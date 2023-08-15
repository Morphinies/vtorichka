import * as React from "react";
import s from "./auth.module.css";
import { IBtnSubmit } from "../../../types/types";

const BtnSubmit = ({ name, isValid }: IBtnSubmit): JSX.Element => {
    return (
        <button type="submit" disabled={!isValid} className={s.btnSubmit}>
            {name}
        </button>
    );
};

export default BtnSubmit;
