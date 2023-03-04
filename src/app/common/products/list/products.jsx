import s from "../products.module.css";
import ProductsNav from "../nav/productsNav";
import React, { useState, useEffect } from "react";
import ProductsList from "./productsList";

const Products = ({ conditions, products, showProduct, searchProducts }) => {
  const [visibleProd, setVisibleProd] = useState([]);
  const [choosedPage, setChoosedPage] = useState(1);
  const [sortProducts, setSortProducts] = useState([]);
  const [productsOnPage, setProductsOnPage] = useState([]);
  const [filtByCatProducts, setFiltByCatProducts] = useState([]);
  const [filtByFiltProducts, setFiltByFiltProducts] = useState([]);
  const [productsNumbOnPage, setProductsNumbOnPage] = useState(5);

  const sortArrBy = (arr, by) => {
    //sorting
    switch (by) {
      case "c новых":
        return arr.sort(function (a, b) {
          return Date.parse(b.time) - Date.parse(a.time);
        });
      case "со старых":
        return arr.sort(function (a, b) {
          return Date.parse(a.time) - Date.parse(b.time);
        });
      case "с дорогих":
        return arr.sort(function (a, b) {
          return b.price - a.price;
        });
      case "с дешевых":
        return arr.sort(function (a, b) {
          return a.price - b.price;
        });
      default:
        return null;
    }
  };

  useEffect(() => {
    if (searchProducts.length) {
      setVisibleProd(searchProducts);
    } else {
      setVisibleProd(products);
    }
  }, [searchProducts, products]);

  //обновления списка товаров в зависимости от задания сортировки
  useEffect(() => {
    setSortProducts([...sortArrBy(visibleProd, conditions.sorting.value)]);
  }, [visibleProd, conditions.sorting.value]);

  //обновления списка товаров в зависимости от задания категории
  useEffect(() => {
    if (conditions.category.name) {
      setFiltByCatProducts([
        ...sortProducts.filter(
          (product) => product.category === conditions.category.name
        ),
      ]);
    } else {
      setFiltByCatProducts([...sortProducts]);
    }
  }, [sortProducts, conditions.category.name]);

  //обновления списка товаров в зависимости от задания сортировки
  useEffect(() => {
    conditions.filters.map((filter) => {
      filter.name === "тип" &&
        filter.value.map(
          (type) =>
            type.value &&
            setFiltByFiltProducts(
              filtByCatProducts.filter((product) => product.type === type.name)
            )
        );
      filter.name === "цена" &&
        filter.id === "от" &&
        setFiltByFiltProducts((prevState) =>
          prevState.filter((product) => product.price >= filter.value)
        );
      filter.name === "цена" &&
        filter.id === "до" &&
        setFiltByFiltProducts((prevState) =>
          prevState.filter((product) => product.price <= filter.value)
        );
      return "";
    });
  }, [filtByCatProducts, conditions.filters]);

  //обновления списка товаров одной страницы в зависимости от товара/страницы/кол-ва товаров
  useEffect(() => {
    setProductsOnPage(
      filtByFiltProducts.slice(
        (choosedPage - 1) * productsNumbOnPage,
        (choosedPage - 1) * productsNumbOnPage + productsNumbOnPage
      )
    );
  }, [filtByFiltProducts, choosedPage, productsNumbOnPage]);

  const pageNumbersArr = (productsLength, productsNumbOnPage) => {
    const pageNumb = Math.ceil(productsLength / productsNumbOnPage);
    const pageNumbArr = [];
    for (let i = 1; i <= pageNumb; i++) {
      pageNumbArr.push(i);
    }
    return pageNumbArr;
  };

  return (
    <div className={s.productsWrap}>
      {/*список товаров на странице*/}
      <ProductsList showProduct={showProduct} productsOnPage={productsOnPage} />
      <ProductsNav
        choosedPage={choosedPage}
        pageNumbersArr={pageNumbersArr}
        setChoosedPage={setChoosedPage}
        productsNumbOnPage={productsNumbOnPage}
        filtByFiltProducts={filtByFiltProducts}
        setProductsNumbOnPage={setProductsNumbOnPage}
      />
    </div>
  );
};

export default Products;
