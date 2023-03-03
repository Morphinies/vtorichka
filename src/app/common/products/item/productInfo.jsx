import React from "react";
import heart from "../../../img/heart.svg";
import heartFill from "../../../img/heartFill.svg";
import settings from "../../../img/settings.svg";

const ProductInfo = ({ s, i, addFavorite, favoriteProduct, openEditor }) => {
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
  publicTime.setTime(Date.parse(i.time));
  return (
    <div className={s.productInfoWrap}>
      <button className={s.productName}>{i.name}</button>
      <p className={s.productPrice}>{regExpPrice(i.price)} р.</p>
      <div className={s.moreInfoWrap}>
        <p className={s.place}> {i.place} </p>
        <p className={s.time}>
          {publicTime.getDate() +
            " " +
            getMonth(publicTime.getMonth() + 1) +
            " " +
            publicTime.getHours() +
            ":" +
            publicTime.getMinutes()}
        </p>
        {favoriteProduct ? (
          <img
            alt="в избранное"
            title="в избранное"
            className={s.likeImg}
            onClick={() => addFavorite(i.id)}
            src={favoriteProduct.includes(i.id) ? heartFill : heart}
          />
        ) : (
          <img
            src={settings}
            alt="редактировать"
            title="редактировать"
            className={s.likeImg}
            onClick={() => openEditor(i.id)}
          />
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
