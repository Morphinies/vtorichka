import * as React from "react";
import s from "./products.module.css";
import ProdItem from "./item/prodItem";
import { IProductsList, Iprod } from "../../../types/types";
import { cloud } from "../../img/pictures";
import { useAppSelector } from "../../redux/hooks/hooks";
import { selectFavorites } from "../../redux/slices/favoritesSlice";

const ProductsList = ({ productsOnPage }: IProductsList): JSX.Element => {
  const favorites = useAppSelector(selectFavorites);

  return productsOnPage.length > 0 ? (
    <ul className={s.products}>
      {productsOnPage.map((prod: Iprod) => {
        const maxVal = prod.photo.length * 100;
        return (
          <ProdItem
            prod={prod}
            key={prod._id}
            maxVal={maxVal}
            isFavorite={favorites.includes(prod._id)}
          />
        );
      })}
    </ul>
  ) : (
    <div className={s.noProdsWrapper}>
      <img className={s.cloudIcon} src={cloud} alt="хранилище" />
      <p className={s.noProdsText}>Пусто</p>
    </div>
  );
};

export default ProductsList;
