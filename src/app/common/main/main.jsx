import React, { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import Products from "../products/list/products";
import Conditions from "../conditions/conditions";
import SearchLine from "../searchLine/searchLine";
import ProductCard from "../productCard/productCard";

const Main = ({ defaultConditions }) => {
  // products in local storage
  const allProductsInLS = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];

  const [allProducts, setAllProducts] = useState(allProductsInLS);
  const [openedSideBar, setOpenedSideBar] = useState("");
  const [searchProducts, setSearchProducts] = useState([]);
  const [conditionsApplied, setConditionsApplied] = useState({
    ...defaultConditions,
  });
  const [openedProduct, setOpenedProduct] = useState({});

  const showProduct = (product) => {
    setOpenedProduct(product);
  };

  return (
    <>
      {openedProduct.id ? (
        <ProductCard
          product={openedProduct}
          closeCard={() => setOpenedProduct({})}
        />
      ) : (
        <>
          <SearchLine
            allProducts={allProducts}
            chooseProduct={showProduct}
            searchProducts={searchProducts}
            setSearchProducts={setSearchProducts}
          />
          <Conditions
            defaultConditions={defaultConditions}
            conditionsApplied={conditionsApplied}
            setConditionsApplied={setConditionsApplied}
          />
          <Products
            showProduct={showProduct}
            allProducts={allProducts}
            conditions={conditionsApplied}
            searchProducts={searchProducts}
            setAllProducts={setAllProducts}
          />
          <Sidebar
            openedSideBar={openedSideBar}
            setOpenedSideBar={setOpenedSideBar}
            defaultConditions={defaultConditions}
            conditionsApplied={conditionsApplied}
            setConditionsApplied={setConditionsApplied}
          />
        </>
      )}
    </>
  );
};

export default Main;
