import * as React from "react";
import api from "../../../../api";
import ProdName from "./prodName";
import ProdPrice from "./prodPrice";
import ProdSeller from "./prodSeller";
import BtnsOfProd from "./btnsOfProd";
import s from "../prodCard.module.css";
import ProdMainInfo from "./prodMainInfo";
import { useEffect, useState } from "react";
import ProdAboutBlock from "./prodAboutBlock";
import { Iprod, Iseller } from "../../../../../types/types";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/hooks";
import {
    selectFavorites,
    updateFavorites,
} from "../../../../redux/slices/favoritesSlice";

interface IProdCardInfo {
    product: Iprod;
}
const ProdCardInfo = ({ product }: IProdCardInfo): JSX.Element => {
    const dispatch = useAppDispatch();
    const isFavorite = useAppSelector(selectFavorites).includes(product._id);
    // избранные товары
    const [seller, setSeller] = useState<Iseller>();

    // установка продавца
    useEffect(() => {
        api.users.fetchById(product.seller).then((data) => {
            setSeller(data);
        });
    }, [product.seller]);

    return (
        seller && (
            <div className={s.productInfo}>
                <ProdName name={product.name} />
                <ProdPrice price={product.price} />
                <ProdMainInfo
                    type={product.type}
                    place={product.place}
                    category={product.category}
                />
                <ProdAboutBlock textAbout={product.description} />
                <ProdSeller seller={seller} />
                <BtnsOfProd
                    seller={seller}
                    product={product}
                    isFavorite={isFavorite}
                    updateFavorite={() =>
                        dispatch(updateFavorites(product._id))
                    }
                />
            </div>
        )
    );
};

export default ProdCardInfo;
