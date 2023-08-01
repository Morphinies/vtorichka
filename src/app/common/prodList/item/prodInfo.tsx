import * as React from "react";
import api from "../../../api";
import s from "../products.module.css";
import heart from "../../../img/heart.svg";
import { bin } from "../../../img/pictures";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import settings from "../../../img/settings.svg";
import heartFill from "../../../img/heartFill.svg";
import { IProdInfo } from "../../../../types/types";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { updateFavorites } from "../../../redux/slices/favoritesSlice";

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
  const getMonth = (monthNumb: number) => {
    switch (monthNumb) {
      case 1:
        return "янв";
      case 2:
        return "фев";
      case 3:
        return "мар";
      case 4:
        return "апр";
      case 5:
        return "май";
      case 6:
        return "июн";
      case 7:
        return "июл";
      case 8:
        return "авг";
      case 9:
        return "сен";
      case 10:
        return "окт";
      case 11:
        return "ноя";
      case 12:
        return "дек";
      default:
        return "";
    }
  };

  const delProd = (id: string) => {
    console.log(id);
    api.products
      .deleteById(id)
      .then((data) => data && window.location.reload());
  };

  // удобочитаемое представление суммы
  const regExpPrice = (number: string) => {
    return Number(number)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  let publicTime = new Date();
  publicTime.setTime(Date.parse(prod.data));

  return (
    <div className={s.productInfoWrap}>
      <button className={s.productName}>{prod.name}</button>
      <p className={s.productPrice}>{regExpPrice(prod.price)} р.</p>
      <div className={s.moreInfoWrap}>
        <div>
          <p className={s.place}> {prod.place} </p>
          <p className={s.time}>
            {publicTime.getDate() +
              " " +
              getMonth(publicTime.getMonth() + 1) +
              " " +
              publicTime.getHours() +
              ":" +
              publicTime.getMinutes()}
          </p>
        </div>

        <div className={s.prodBtns}>
          {!myProd && (
            <img
              alt="в избранное"
              title="в избранное"
              className={s.likeImg}
              onClick={() => dispatch(updateFavorites(prod._id))}
              src={String(isFavorite ? heartFill : heart)}
            />
          )}
          {myProd && (
            <img
              src={String(settings)}
              alt="редактировать"
              title="редактировать"
              onClick={() => {
                navigate("/personal/products/editor/" + prod._id);
              }}
              className={s.likeImg}
            />
          )}
          {myProd && (
            <img
              src={String(bin)}
              alt="удалить"
              title="удалить"
              onClick={() => delProd(prod._id)}
              className={s.likeImg}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProdInfo;
