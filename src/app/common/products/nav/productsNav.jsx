import React from "react";
import s from "../products.module.css";
import ProductsNumb from "./productsNumb";
import ProductsPages from "./productsPages";

const ProductsNav = ({
  choosedPage,
  pageNumbersArr,
  setChoosedPage,
  productsNumbOnPage,
  filtByFiltProducts,
  setProductsNumbOnPage,
}) => {
  return (
    <div className={s.pageNumber}>
      {/*переход по страницам*/}
      <ProductsPages
        choosedPage={choosedPage}
        pageNumbersArr={pageNumbersArr}
        setChoosedPage={setChoosedPage}
        filtByFiltProducts={filtByFiltProducts}
        productsNumbOnPage={productsNumbOnPage}
      />

      {/*количество отображаемых карточек*/}
      <ProductsNumb
        setChoosedPage={setChoosedPage}
        productsNumbOnPage={productsNumbOnPage}
        setProductsNumbOnPage={setProductsNumbOnPage}
      />
    </div>
  );
};

export default ProductsNav;
