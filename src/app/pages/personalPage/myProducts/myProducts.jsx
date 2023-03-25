import api from "../../../api";
import AddProdBtn from "./addProdBtn";
import s from "../personalPage.module.css";
import React, { useEffect, useState } from "react";
import Loading from "../../../common/loading/loading";
import ProductsItem from "../../../common/products/item/productsItem";

const MyProducts = ({ userID }) => {
  const [myProducts, setMyProducts] = useState();

  useEffect(() => {
    api.products.fetchBySeller(userID).then((data) => {
      setMyProducts(data);
    });
  }, [userID]);

  return myProducts ? (
    <>
      <ul className={s.prodList}>
        {myProducts.map((product) => (
          <ProductsItem
            prod={product}
            key={product.id}
            maxVal={product.photo.length * 100}
          />
        ))}
      </ul>
      <AddProdBtn />
    </>
  ) : (
    <Loading />
  );
};

export default MyProducts;
