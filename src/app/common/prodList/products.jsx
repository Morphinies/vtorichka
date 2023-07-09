import s from "./products.module.css";
import ProductsList from "./productsList";
import ProductsNav from "./nav/productsNav";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Products = ({ prodList }) => {
  const [choosedPage, setChoosedPage] = useState(1);
  const [productsNumbOnPage, setProductsNumbOnPage] = useState(5);
  const [productsOnPage, setProductsOnPage] = useState([]);

  // обновление продуктов на странице
  useEffect(() => {
    const startIndex = (choosedPage - 1) * productsNumbOnPage;
    const endIndex = startIndex + productsNumbOnPage;
    const arraysPiece = prodList.slice(startIndex, endIndex);
    setProductsOnPage(arraysPiece);
  }, [prodList, choosedPage, productsNumbOnPage]);

  // массив номеров страниц
  const pageNumbersArr = [];
  (() => {
    const pagesNumbers = Math.ceil(prodList.length / productsNumbOnPage);
    for (let i = 1; i <= pagesNumbers; i++) {
      pageNumbersArr.push(i);
    }
  })();

  return (
    <div className={s.productsWrap}>
      {/*список товаров на странице*/}
      <ProductsList productsOnPage={productsOnPage} />
      <ProductsNav
        choosedPage={choosedPage}
        pageNumbersArr={pageNumbersArr} //назначить
        setChoosedPage={setChoosedPage}
        productsNumbOnPage={productsNumbOnPage}
        setProductsNumbOnPage={setProductsNumbOnPage}
      />
    </div>
  );
};

export default Products;
