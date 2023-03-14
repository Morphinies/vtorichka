import ProdName from "./prodName";
import ProdPrice from "./prodPrice";
import ProdSeller from "./prodSeller";
import BtnsOfProd from "./btnsOfProd";
import ProdMainInfo from "./prodMainInfo";
import s from "../productCard.module.css";
import ProdAboutBlock from "./prodAboutBlock";
import React, { useEffect, useState } from "react";
import api from "../../../api";

const ProductCardInfo = ({ product, openEditor }) => {
  // избранные товары
  const [seller, setSeller] = useState();
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoritesIsUpdating, setFavoritesIsUpdating] = useState(false);

  // установка продавца
  useEffect(() => {
    api.users.fetchById(product.sellerId).then((data) => {
      setSeller(data);
    });
  }, [product.sellerId]);

  // установка избранного
  useEffect(() => {
    api.favorites
      .fetchAll()
      .then((data) => data.includes(product.id) && setIsFavorite(true));
  }, [product.id]);

  // обновление избранного
  useEffect(() => {
    Number(favoritesIsUpdating) &&
      api.favorites.update(favoritesIsUpdating).then((data) => {
        setIsFavorite((prevState) => !prevState);
        setFavoritesIsUpdating(false);
      });
  }, [favoritesIsUpdating]);

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
        <ProdAboutBlock textAbout={product.textAbout} />
        <ProdSeller seller={seller} />
        <BtnsOfProd
          productId={product.id}
          openEditor={openEditor}
          seller={seller}
          isFavorite={isFavorite}
          updateFavorite={() => setFavoritesIsUpdating(product.id)}
        />
      </div>
    )
  );
};

export default ProductCardInfo;
