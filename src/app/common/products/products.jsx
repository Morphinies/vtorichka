import React from "react";
import s from "./products.module.css";

const Products = () => {
  const arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
  return (
    <ul className={s.products}>
      {arr.map((i) => (
        <li className={s.productCard}></li>
      ))}
    </ul>
  );
};

export default Products;
