import heart from "../../../img/heart.svg";
import settings from "../../../img/settings.svg";
import { bin } from "../../../img/pictures";
import React, { useEffect, useState } from "react";
import heartFill from "../../../img/heartFill.svg";
import { useNavigate } from "react-router-dom";
import api from "../../../api";

const ProdInfo = ({ s, prod, isFavorite, updateFavorites }) => {
  const [myProd, setMyProd] = useState(false);
  const navigate = useNavigate();

  // проверка на myProduct
  useEffect(() => {
    const userIdOnLS = JSON.parse(localStorage.getItem("user"));

    if (userIdOnLS === prod.seller) {
      setMyProd(true);
    }
  }, [prod.seller]);

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

  const delProd = (id) => {
    console.log(id);
    api.products
      .deleteById(id)
      .then((data) => data && window.location.reload());
  };

  // удобочитаемое представление суммы
  const regExpPrice = (number) => {
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
              onClick={() => updateFavorites(prod._id)}
              src={isFavorite ? heartFill : heart}
            />
          )}
          {myProd && (
            <img
              src={settings}
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
              src={bin}
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
