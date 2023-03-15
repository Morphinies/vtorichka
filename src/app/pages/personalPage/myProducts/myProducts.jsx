import api from "../../../api";
import s from "../personalPage.module.css";
import React, { useEffect, useState } from "react";
import ProductsItem from "../../../common/products/item/productsItem";
import Loading from "../../../common/loading/loading";

const MyProducts = ({ userID }) => {
  const [myProducts, setMyProducts] = useState();

  useEffect(() => {
    api.products.fetchBySeller(userID).then((data) => {
      setMyProducts(data);
    });
  }, [userID]);

  return myProducts ? (
    <ul className={s.prodList}>
      {myProducts.map((product) => (
        <ProductsItem
          i={product}
          key={product.id}
          maxVal={product.photo.length * 100}
        />
      ))}
    </ul>
  ) : (
    <Loading />
  );
};

export default MyProducts;

/* <Editor editableProd={editableProd} closeEditor={closeEditor} /> */
