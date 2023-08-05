import * as React from "react";
import { Link } from "react-router-dom";
import s from "../myPage.module.css";

const AddProdBtn = (): JSX.Element => {
    return (
        <Link to="addProd" className={"btn " + s.addProdBtn}>
            добавить товар
        </Link>
    );
};

export default AddProdBtn;
