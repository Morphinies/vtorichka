import React from "react";
import s from "./prodPage.module.css";
import ProdCard from "./prodCard/prodCard";

const ProdPage = () => {
  return (
    <div className={s.prodPage}>
      <ProdCard />
    </div>
  );
};

export default ProdPage;
