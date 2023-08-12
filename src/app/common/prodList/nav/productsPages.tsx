import * as React from "react";
import s from "../products.module.css";
import { IProductsPages } from "../../../../types/types";
import { selectPage, setValue } from "../../../redux/slices/pageNumbSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";

const ProductsPages = ({ pageNumbersArr }: IProductsPages): JSX.Element => {
    const dispatch = useAppDispatch();
    const choosedPage = useAppSelector(selectPage);

    const handleClick = (pageNumb: number) => {
        window.scrollTo(0, 0);
        dispatch(setValue(pageNumb));
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
