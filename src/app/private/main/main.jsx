import api from "../../api";
import React, { useEffect, useState } from "react";
import Sidebar from "../../common/sidebar/sidebar";
import Products from "../../common/products/list/products";
import Conditions from "../../common/conditions/conditions";
import SearchLine from "../../common/searchLine/searchLine";
import ProductCard from "../../common/productCard/productCard";

const Main = ({ defaultConditions }) => {
  // states
  const [products, setProducts] = useState([]);
  const [openedProduct, setOpenedProduct] = useState({});
  const [openedSideBar, setOpenedSideBar] = useState("");
  const [searchProducts, setSearchProducts] = useState([]);
  const [conditionsApplied, setConditionsApplied] = useState({
    ...defaultConditions,
  });

  // assign loaded "productsOnLS" value to var "products"
  useEffect(() => {
    const productsOnLS = localStorage.getItem("products");
    const parsedProd = JSON.parse(productsOnLS);
    productsOnLS
      ? setProducts(parsedProd)
      : api.products.fetchAll().then((data) => {
          localStorage.setItem("products", JSON.stringify(data));
          productsOnLS && setProducts(parsedProd);
        });
  }, []);

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
            products={products}
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
            products={products}
            conditions={conditionsApplied}
            searchProducts={searchProducts}
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
