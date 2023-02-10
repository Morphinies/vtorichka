import React from "react";
import heart from "../../../img/heart.svg";
import heartFill from "../../../img/heartFill.svg";

const ProductInfo = ({ s, i, addFavorite, favoriteProduct }) => {
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

  return (
    <div className={s.productInfoWrap}>
      <button className={s.productName}>{i.name}</button>
      <p className={s.productPrice}>{regExpPrice(i.price)} р.</p>
      <div className={s.moreInfoWrap}>
        <p className={s.place}> {i.place} </p>
        <p className={s.time}>
          {i.time.slice(8, 10) +
            " " +
            getMonth(Number(i.time.slice(5, 7))) +
            (String(i.time.slice(11, 13)).length === 1 ? " 0" : " ") +
            i.time.slice(11, 13) +
            (String(i.time.slice(14, 16)).length === 1 ? ":0" : ":") +
            i.time.slice(14, 16)}
        </p>
        <img
          src={favoriteProduct.includes(i.id) ? heartFill : heart}
          onClick={() => addFavorite(i.id)}
          alt=""
          className={s.likeImg}
        />
      </div>
    </div>
  );
};

export default ProductInfo;
