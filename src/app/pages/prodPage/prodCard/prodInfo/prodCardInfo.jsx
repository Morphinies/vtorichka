import ProdName from "./prodName";
import ProdPrice from "./prodPrice";
import ProdSeller from "./prodSeller";
import BtnsOfProd from "./btnsOfProd";
import ProdMainInfo from "./prodMainInfo";
import s from "../prodCard.module.css";
import ProdAboutBlock from "./prodAboutBlock";
import React, { useEffect, useState } from "react";
import api from "../../../../api";

const ProdCardInfo = ({ product }) => {
  // избранные товары
  const [seller, setSeller] = useState();
  const [isFavorite, setIsFavorite] = useState(false);

  // установка продавца
  useEffect(() => {
    api.users.fetchById(product.seller).then((data) => {
      setSeller(data);
    });
  }, [product.seller]);

  // установка избранного
  useEffect(() => {
    api.favorites
      .fetchAll()
      .then(
        (favorites) =>
          favorites.includes(product._id) &&
          setIsFavorite((prevState) => !prevState)
      );
  }, [product]);

  // обновление избранного
  const updateFavorites = (id) => {
    api.favorites
      .update(id)
      .then((favorites) =>
        favorites.includes(product._id)
          ? setIsFavorite(true)
          : setIsFavorite(false)
      )
      .catch((err) => console.log(err));
  };

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
          updateFavorite={() => updateFavorites(product._id)}
        />
      </div>
    )
  );
};

export default ProdCardInfo;
