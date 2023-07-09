import React from "react";
import s from "../products.module.css";
import { useSearchParams } from "react-router-dom";

const ProductsPages = ({ choosedPage, setChoosedPage }) => {
  //, pageNumbersArr
  const [searchParams, setSearchParams] = useSearchParams();

  const pageNumbersArr = [1, 2];

  const handleClick = (pageNumb) => {
    window.scrollTo(0, "offsetTop");
    setChoosedPage(pageNumb);
    searchParams.set("page", pageNumb);
    setSearchParams(searchParams);
  };

  return (
    pageNumbersArr.length > 1 && (
      <ul className={s.pageNumberList}>
        {pageNumbersArr.map((pageNumb) => (
          <button
            key={pageNumb}
            onClick={() => handleClick(pageNumb)}
            className={
              s.pageNumberItem +
              " " +
              (choosedPage === pageNumb ? s.choosedPage : "")
            }
          >
            {pageNumb}
          </button>
        ))}
      </ul>
    )
  );
};

export default ProductsPages;
