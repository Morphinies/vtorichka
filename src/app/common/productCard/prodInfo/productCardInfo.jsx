import ProdName from "./prodName";
import React, { useEffect, useState } from "react";
import call from "../../../img/call.svg";
import s from "../productCard.module.css";
import heart from "../../../img/heart.svg";
import message from "../../../img/message.svg";
import heartFill from "../../../img/heartFill.svg";

const ProductCardInfo = ({ product }) => {
  // избранные товары
  const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem("favoriteProduct").includes(product.id)
  );

  useEffect(() => {
    const favoriteProducts = JSON.parse(
      localStorage.getItem("favoriteProduct")
    );
    favoriteProducts.includes(product.id)
      ? localStorage.setItem(
          "favoriteProduct",
          JSON.stringify([
            ...favoriteProducts.slice(0, favoriteProducts.indexOf(product.id)),
            ...favoriteProducts.slice(favoriteProducts.indexOf(product.id) + 1),
          ])
        )
      : localStorage.setItem(
          "favoriteProduct",
          JSON.stringify([...favoriteProducts, product.id])
        );
  }, [isFavorite, product.id]);

  // const updateFavorite = (id) => {};

  return (
    <div className={s.productInfo}>
      <ProdName name={product.name} />
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
          <img title="написать" alt="" className={s.prodBtnImg} src={message} />
        </button>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={s.prodBtn + " " + s.btnFavorite}
        >
          <img
            alt=""
            title="избранное"
            className={s.prodBtnImg}
            src={isFavorite ? heartFill : heart}
          />
        </button>
        <button className={s.prodBtn + " " + s.btnCall}>
          <img title="позвонить" alt="" className={s.prodBtnImg} src={call} />
        </button>
      </div>
    </div>
  );
};

export default ProductCardInfo;
