import api from "../../../api";
import heart from "../../../img/heart.svg";
import settings from "../../../img/settings.svg";
import React, { useEffect, useState } from "react";
import heartFill from "../../../img/heartFill.svg";
import { useNavigate } from "react-router-dom";

const ProductInfo = ({ s, prod, isFavorite, updateFavorites }) => {
  const [myProd, setMyProd] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    api.products
      .isMyProd(prod.id)
      .then((data) => setMyProd(data))
      .catch((reason) => setMyProd(reason));
  }, [prod.id]);

  // из числового в строчное представление месяца
  const getMonth = (monthNumb) => {
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

  // удобочитаемое представление суммы
  const regExpPrice = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  let publicTime = new Date();
  publicTime.setTime(Date.parse(prod.time));

  return (
    <div className={s.productInfoWrap}>
      <button className={s.productName}>{prod.name}</button>
      <p className={s.productPrice}>{regExpPrice(prod.price)} р.</p>
      <div className={s.moreInfoWrap}>
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
        {!myProd && (
          <img
            alt="в избранное"
            title="в избранное"
            className={s.likeImg}
            onClick={() => updateFavorites(prod.id)}
            src={isFavorite ? heartFill : heart}
          />
        )}
        {myProd && (
          <img
            src={settings}
            alt="редактировать"
            title="редактировать"
            onClick={() => {
              navigate(`/prodEditor/${prod.id}`);
            }}
            className={s.likeImg}
          />
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
