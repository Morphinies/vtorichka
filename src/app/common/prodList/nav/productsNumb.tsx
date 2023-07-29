import * as React from "react";
import s from "../products.module.css";
import { IProductsNumb } from "../../../../types/types";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { setValue } from "../../../redux/slices/pageNumbSlice";

const ProductsNumb = ({
  productsNumbOnPage,
  setProductsNumbOnPage,
}: IProductsNumb): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleClick = (numb: number) => {
    if (productsNumbOnPage !== numb) {
      window.scrollTo(0, 0);
      setProductsNumbOnPage(numb);
      dispatch(setValue(1));
    }
  };

  return (
    <div className={s.numbOfProduct}>
      <p className={s.numbOfProductText}>По: </p>
      <ul className={s.numbOfProductList}>
        {[5, 10, 15].map((numb) => (
          <button
            key={numb}
            onClick={() => handleClick(numb)}
            className={
              s.numbOfProductItem +
              " " +
              (productsNumbOnPage === numb ? s.choosedNumbOfProductItem : "")
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
