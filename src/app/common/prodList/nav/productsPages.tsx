import * as React from "react";
import s from "../products.module.css";
import { useSearchParams } from "react-router-dom";
import { IProductsPages } from "../../../../types/types";

const ProductsPages = ({
  choosedPage,
  setChoosedPage,
  pageNumbersArr,
}: IProductsPages): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (pageNumb: number) => {
    window.scrollTo(0, 0);
    setChoosedPage(pageNumb);
    searchParams.set("page", String(pageNumb));
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
