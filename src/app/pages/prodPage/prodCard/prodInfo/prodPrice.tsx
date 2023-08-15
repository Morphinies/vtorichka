import * as React from "react";
import s from "../prodCard.module.css";
import { getPrice } from "../../../../utils/getPrice";

const ProdPrice = ({ price }: { price: string }): JSX.Element => {
    return (
        <div className={s.priceWrap}>
            <h1 className={s.prodPrice}>{getPrice(price)} р.</h1>
        </div>
    );
};

export default ProdPrice;
