import React from "react";
import s from "../products.module.css";

const ProductsNumb = ({
  setChoosedPage,
  productsNumbOnPage,
  setProductsNumbOnPage,
}) => {
  return (
    <div className={s.numbOfProduct}>
      <p className={s.numbOfProductText}>По: </p>
      <ul className={s.numbOfProductList}>
        {[5, 10, 15].map((numb) => (
          <button
            key={numb}
            onClick={() => {
              productsNumbOnPage !== numb && window.scrollTo(0, "offsetTop");
              productsNumbOnPage !== numb && setProductsNumbOnPage(numb);
              productsNumbOnPage !== numb && setChoosedPage(1);
            }}
            className={
              s.numbOfProductItem +
              (productsNumbOnPage === numb
                ? " " + s.choosedNumbOfProductItem
                : "")
            }
          >
            {numb}
          </button>
        ))}
      </ul>
      <p className={s.numbOfProductText}> товаров</p>
    </div>
  );
};

export default ProductsNumb;
