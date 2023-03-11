import api from "../../api";
import Loading from "../../common/loading/loading";
import React, { useEffect, useState } from "react";
import Sidebar from "../../common/sidebar/sidebar";
import Products from "../../common/products/list/products";
import Conditions from "../../common/conditions/conditions";
import SearchLine from "../../common/searchLine/searchLine";
import ProductCard from "../../common/productCard/productCard";

const Main = ({ defaultConditions }) => {
  // states
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [openedProduct, setOpenedProduct] = useState({}); // открытая карточка товара
  const [openedSideBar, setOpenedSideBar] = useState(""); // имя открытого бок. меню
  const [conditionsApplied, setConditionsApplied] = useState({
    ...defaultConditions,
  }); // условия показа товаров

  // установка поиска в зависимости от поисковой строки
  useEffect(() => {
    setLoading(true);
    conditionsApplied.search
      ? api.products.fetchByName(conditionsApplied.search).then((data) => {
          setProducts(data);
          setLoading(false);
        })
      : api.products.fetchAll().then((data) => {
          setProducts(data);
          setLoading(false);
        });
  }, [conditionsApplied.search]);

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
            searchActive={!!conditionsApplied.search}
            setConditionsApplied={setConditionsApplied}
            showProduct={(product) => setOpenedProduct(product)}
          />
          <Conditions
            defaultConditions={defaultConditions}
            conditionsApplied={conditionsApplied}
            setConditionsApplied={setConditionsApplied}
          />
          {!loading ? (
            <Products
              products={products}
              conditions={conditionsApplied}
              showProduct={(product) => setOpenedProduct(product)}
            />
          ) : (
            <Loading />
          )}
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