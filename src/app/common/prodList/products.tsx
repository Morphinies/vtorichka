import * as React from "react";
import { useState } from "react";
import s from "./products.module.css";
import ProductsList from "./productsList";
import ProductsNav from "./nav/productsNav";
import { IProducts } from "../../../types/types";
import { useAppSelector } from "../../redux/hooks/hooks";
import { arrayFromNumber } from "../../utils/arrFromNumb";
import { selectPage } from "../../redux/slices/pageNumbSlice";

const Products = ({ prodList }: IProducts): JSX.Element => {
    const choosedPage = useAppSelector(selectPage);
    const [productsNumbOnPage, setProductsNumbOnPage] = useState<number>(5);
    const startLimit = (choosedPage - 1) * productsNumbOnPage;
    const pagesNumber = Math.ceil(prodList.length / productsNumbOnPage);
    const pagesNumbersArr = arrayFromNumber(pagesNumber);

    return (
        <div className={s.productsWrap}>
            {/*список товаров на странице*/}
            <ProductsList
                productsOnPage={prodList.slice(
                    startLimit,
                    startLimit + productsNumbOnPage
                )}
            />
            <ProductsNav
                pageNumbersArr={pagesNumbersArr}
                productsNumbOnPage={productsNumbOnPage}
                setProductsNumbOnPage={setProductsNumbOnPage}
            />
        </div>
    );
};

export default Products;
