import React from "react";
import s from "../prodCard.module.css";

const ProdAboutBlock = ({ textAbout }) => {
  return (
    <div className={s.prodAboutWrap}>
      <p className={s.prodAbout}>{textAbout}</p>
    </div>
  );
};

export default ProdAboutBlock;