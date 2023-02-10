import React from "react";
import s from "../products.module.css";

const ProductsPages = ({
  choosedPage,
  pageNumbersArr,
  setChoosedPage,
  filtByFiltProducts,
  productsNumbOnPage,
}) => {
  return (
    pageNumbersArr(filtByFiltProducts.length, productsNumbOnPage).length >
      1 && (
      <ul className={s.pageNumberList}>
        {pageNumbersArr(filtByFiltProducts.length, productsNumbOnPage).map(
          (pageNumb) => (
            <button
              key={pageNumb}
              onClick={() => {
                window.scrollTo(0, "offsetTop");
                setChoosedPage(pageNumb);
              }}
              className={
                s.pageNumberItem +
                (choosedPage === pageNumb ? " " + s.choosedPage : "")
              }
            >
              {pageNumb}
            </button>
          )
        )}
      </ul>
    )
  );
};

export default ProductsPages;
