import s from "../myPage.module.css";
import React, { useState } from "react";
import ProdItem from "../../../common/prodList/item/prodItem";

const MySales = () => {
  const [products] = useState([]);

  return (
    <ul className={s.prodList}>
      {products.map((product) => (
        <ProdItem
          prod={product}
          key={product._id}
          maxVal={product.photo.length * 100}
        />
      ))}
    </ul>
  );
};

export default MySales;
