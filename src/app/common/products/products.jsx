import React from "react";
import s from "./products.module.css";

const Products = ({ category }) => {
  return (
    <div className={s.products}>
      <h1 className={s.header}>{category}</h1>
    </div>
  );
};

export default Products;
