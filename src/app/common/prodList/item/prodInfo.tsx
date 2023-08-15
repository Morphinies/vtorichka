import * as React from "react";
import api from "../../../api";
import s from "../products.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import settings from "../../../img/settings.svg";
import { IProdInfo } from "../../../../types/types";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { bin, heartDark, heartDarkFill } from "../../../img/pictures";
import { updateFavorites } from "../../../redux/slices/favoritesSlice";
import { getPrice } from "../../../utils/getPrice";
import { getStrMonth } from "../../../utils/getStrMonth";

const ProdInfo = ({ prod, isFavorite }: IProdInfo): JSX.Element => {
    const dispatch = useAppDispatch();

    const [myProd, setMyProd] = useState<boolean>(false);
    const navigate = useNavigate();

    // проверка на myProduct
    useEffect(() => {
        const userIdOnLS = JSON.parse(localStorage.getItem("user"));

        if (userIdOnLS === prod.seller) {
            setMyProd(true);
        }
    }, [prod.seller]);

    // из числового в строчное представление месяца

    const delProd = (id: string) => {
        console.log(id);
        api.products
            .deleteById(id)
            .then((data) => data && window.location.reload());
    };

    let publicTime = new Date();
    publicTime.setTime(Date.parse(prod.data));

    return (
        <div className={s.productInfoWrap}>
            <p className={s.productPrice}>{getPrice(prod.price)} р.</p>
            <p className={s.productName}>{prod.name}</p>
            <div className={s.moreInfoWrap}>
                <div>
                    <p className={s.place}> {prod.place} </p>
                    <p className={s.time}>
                        {publicTime.getDate() +
                            " " +
                            getStrMonth(publicTime.getMonth() + 1) +
                            " " +
                            publicTime.getHours() +
                            ":" +
                            publicTime.getMinutes()}
                    </p>
                </div>

                <div className={s.prodBtnMinis}>
                    {!myProd && (
                        <img
                            alt="в избранное"
                            title="в избранное"
                            className={s.prodBtnMini}
                            onClick={() => dispatch(updateFavorites(prod._id))}
                            src={isFavorite ? heartDarkFill : heartDark}
                        />
                    )}
                    {myProd && (
                        <img
                            src={settings}
                            alt="редактировать"
                            title="редактировать"
                            onClick={() => {
                                navigate(
                                    "/personal/products/editor/" + prod._id
                                );
                            }}
                            className={s.prodBtnMini}
                        />
                    )}
                    {myProd && (
                        <img
                            src={bin}
                            alt="удалить"
                            title="удалить"
                            onClick={() => delProd(prod._id)}
                            className={s.prodBtnMini}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProdInfo;
