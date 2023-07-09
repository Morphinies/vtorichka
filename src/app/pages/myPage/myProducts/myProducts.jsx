import React from "react";
import AddProdBtn from "./addProdBtn";
import s from "../myPage.module.css";
import { useLoaderData } from "react-router-dom";
import ProdItem from "../../../common/prodList/item/prodItem";

const MyProducts = () => {
  const products = useLoaderData();

  return (
    <>
      {products.length > 0 && (
        <ul className={s.prodList}>
          {products.map((product) => (
            <ProdItem
              prod={product}
              key={product._id}
              maxVal={product.photo.length * 100}
            />
          ))}
        </ul>
      )}
      <AddProdBtn />
    </>
  );
};

export default MyProducts;
