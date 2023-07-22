import * as React from "react";
import s from "./products.module.css";
import ProductsList from "./productsList";
import ProductsNav from "./nav/productsNav";
import { useEffect, useState } from "react";
import { Iprod, IProducts } from "../../../types/types";

const Products = ({ prodList }: IProducts): JSX.Element => {
  const [choosedPage, setChoosedPage] = useState<number>(1);
  const [productsNumbOnPage, setProductsNumbOnPage] = useState<number>(5);
  const [productsOnPage, setProductsOnPage] = useState<Iprod[]>([]);

  // обновление продуктов на странице
  useEffect(() => {
    const startIndex: number = (choosedPage - 1) * productsNumbOnPage;
    const endIndex: number = startIndex + productsNumbOnPage;
    const arraysPiece: Iprod[] = prodList.slice(startIndex, endIndex);
    setProductsOnPage(arraysPiece);
  }, [prodList, choosedPage, productsNumbOnPage]);

  // массив номеров страниц
  const pageNumbersArr: number[] = [];
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
        pageNumbersArr={pageNumbersArr}
        setChoosedPage={setChoosedPage}
        productsNumbOnPage={productsNumbOnPage}
        setProductsNumbOnPage={setProductsNumbOnPage}
      />
    </div>
  );
};

export default Products;
