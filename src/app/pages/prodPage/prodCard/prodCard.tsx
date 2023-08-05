import * as React from "react";
import { useEffect } from "react";
import s from "./prodCard.module.css";
import BtnCloseProduct from "./btnCloseProduct";
import ProdCardImg from "./prodImg/prodCardImg";
import ProdCardInfo from "./prodInfo/prodCardInfo";
import { useKeyPress } from "../../../hooks/useKeyPress";
import { useLoaderData, useNavigate } from "react-router-dom";
import ErrorMessage from "../../../common/errorMes/errorMessage";

const ProdCard = (): JSX.Element => {
    const product = useLoaderData();
    const navigate = useNavigate();
    const isEscPressed: boolean = useKeyPress("Escape");

    // выход на "Escape"
    useEffect(() => {
        isEscPressed && navigate(-1);
    }, [isEscPressed, navigate]);

    return product ? (
        <div className={s.productCard}>
            <BtnCloseProduct />
            <ProdCardImg product={product} />
            <ProdCardInfo product={product} />
        </div>
    ) : (
        <ErrorMessage message="Товар по заданному id не найден" />
    );
};

export default ProdCard;
