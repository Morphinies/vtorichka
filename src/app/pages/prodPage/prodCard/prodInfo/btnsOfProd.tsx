import * as React from "react";
import BtnCall from "./btnCall";
import BtnEdit from "./btnEdit";
import BtnWrite from "./btnWrite";
import s from "../prodCard.module.css";
import BtnFavorite from "./btnFavorite";
import { useEffect, useState } from "react";
import { IBtnsOfProd } from "../../../../../types/types";

const BtnsOfProd = ({
    product,
    isFavorite,
    updateFavorite,
    seller,
}: IBtnsOfProd): JSX.Element => {
    const [isMyProd, setIsMyProd] = useState<boolean>(false);
    // проверка на "своё" объявление
    useEffect(() => {
        const userIdOnLS = JSON.parse(localStorage.getItem("user"));
        if (userIdOnLS === product.seller) {
            setIsMyProd(true);
        }
    }, [product.seller]);

    return (
        <div className={s.prodBtns}>
            {!isMyProd ? (
                <>
                    <BtnWrite sellerId={seller._id} />
                    <BtnFavorite
                        isFavorite={isFavorite}
                        updateFavorite={updateFavorite}
                    />
                    <BtnCall phone={seller.phone} />
                </>
            ) : (
                <>
                    <BtnEdit productId={product._id} />
                </>
            )}
        </div>
    );
};

export default BtnsOfProd;
