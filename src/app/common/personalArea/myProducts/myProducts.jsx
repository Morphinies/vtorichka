import api from "../../../api";
import s from "../personalArea.module.css";
import React, { useEffect, useState } from "react";
import ProductsItem from "../../products/item/productsItem";
import Loading from "../../loading/loading";
import ProductCard from "../../productCard/productCard";
import Editor from "../../editor/editor";

const MyProducts = ({ userID }) => {
  console.log(userID);
  const [myProducts, setMyProducts] = useState();
  const [editableProd, setEditableProd] = useState({});
  const [openedProduct, setOpenedProduct] = useState({});

  const showProduct = (product) => {
    setOpenedProduct(product);
  };
  useEffect(() => {
    api.products.fetchById(userID).then((data) => {
      console.log(data);
      setMyProducts(data);
    });
  }, [userID]);

  const openEditor = (id) => {
    const editProd = myProducts.find((prod) => prod.id === id);
    setEditableProd(editProd);
  };

  const closeEditor = () => {
    setEditableProd({});
  };

  return myProducts ? (
    editableProd.id ? (
      <Editor editableProd={editableProd} closeEditor={closeEditor} />
    ) : openedProduct.id ? (
      <ProductCard
        openEditor={openEditor}
        product={openedProduct}
        closeCard={() => setOpenedProduct({})}
      />
    ) : (
      <ul className={s.prodList}>
        {myProducts.map((product) => (
          <ProductsItem
            i={product}
            key={product.id}
            openEditor={openEditor}
            showProduct={showProduct}
            maxVal={product.photo.length * 100}
          />
        ))}
      </ul>
    )
  ) : (
    <Loading />
  );
};

export default MyProducts;
