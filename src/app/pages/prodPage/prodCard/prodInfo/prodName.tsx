import * as React from "react";
import s from "../prodCard.module.css";

const ProdName = ({ name }: { name: string }): JSX.Element => {
    return <h2 className={s.prodName}>{name}</h2>;
};

export default ProdName;
