import React from "react";
import s from "../prodCard.module.css";

const ProdMainInfo = ({ place, category, type }) => {
  return (
    <div className={s.mainInfo}>
      <p className={s.prodPlace}>{place}</p>
      <p className={s.prodCategory}>{category}</p>
      <p className={s.prodType}>{type}</p>
    </div>
  );
};

export default ProdMainInfo;
