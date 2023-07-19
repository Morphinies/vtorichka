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

interface IProdCardInfo {
  product: Iprod;
}
const ProdCardInfo = ({ product }: IProdCardInfo): JSX.Element => {
  // избранные товары
  const [seller, setSeller] = useState<Iseller>();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

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
  const updateFavorites = (id: string) => {
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
