import React from "react";
import heart from "../../img/heart.svg";
import s from "./productCard.module.css";
import message from "../../img/message.svg";

const ProductCardInfo = ({ product }) => {
  console.log(product);
  return (
    <div className={s.productInfo}>
      <h2 className={s.prodName}>{product.name}</h2>
      <div className={s.priceWrap}>
        <h1 className={s.prodPrice}>{product.price}р</h1>
      </div>
      <div className={s.mainInfo}>
        <p className={s.prodPlace}>{product.place}</p>
        <p className={s.prodCategory}>{product.category}</p>
        <p className={s.prodType}>{product.type}</p>
      </div>
      <div className={s.prodAboutWrap}>
        <p className={s.prodAbout}>
          {" "}
          Откуда он появился? Многие думают, что Lorem Ipsum - взятый с потолка
          псевдо-латинский набор слов, но это не совсем так. Его корни уходят в
          один фрагмент классической латыни 45 года н.э., то есть более двух
          тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа
          Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в
          Lorem Ipsum, "consectetur", и занялся его поисками в классической
          латинской литературе. В результате он нашёл неоспоримый первоисточник
          Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de Finibus Bonorum et
          Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году
          н.э. Этот трактат по теории этики был очень популярен в эпоху
          Возрождения. Первая строка Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", происходит от одной из строк в разделе 1.10.32 Классический
          текст Lorem Ipsum, используемый с XVI века, приведён ниже.
        </p>
      </div>
      <div className={s.seller}>
        <div className={s.sellerImgWrap}></div>
        <p className={s.sellerName}>{product.seller}</p>
      </div>
      <div className={s.prodBtns}>
        <button className={s.prodBtn + " " + s.btnWrite}>
          <p className={s.prodBtnName}>написать</p>{" "}
          <img alt="" className={s.prodBtnImg} src={message} />
        </button>
        <button className={s.prodBtn + " " + s.btnFavorite}>
          <p className={s.prodBtnName}>избранное</p>{" "}
          <img alt="" className={s.prodBtnImg} src={heart} />
        </button>
      </div>
    </div>
  );
};

export default ProductCardInfo;
