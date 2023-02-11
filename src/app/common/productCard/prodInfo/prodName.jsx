import React from "react";
import s from "../productCard.module.css";

const ProdName = ({ name }) => {
  return <h2 className={s.prodName}>{name}</h2>;
};

export default ProdName;
