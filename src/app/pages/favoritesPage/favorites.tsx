import api from "../../api";
import * as React from "react";
import s from "./favorites.module.css";
import { useState, useEffect } from "react";
import { Iprod } from "../../../types/types";
import { useNavigation } from "react-router-dom";
import Products from "../../common/prodList/products";
import { useAppSelector } from "../../redux/hooks/hooks";
import { selectFavorites } from "../../redux/slices/favoritesSlice";

const Favorites = () => {
  const navigation = useNavigation();
  const favorites = useAppSelector(selectFavorites);
  const [favoritesProd, setFavoritesProd] = useState<Iprod[]>([]);

  useEffect(() => {
    favorites &&
      api.products
        .fetchFavorites(favorites)
        .then((data) => setFavoritesProd(data));
  }, [favorites]);

  return (
    <main
      className={"main " + (navigation.state === "loading" ? "loading" : "")}
    >
      <div className={s.pageTitle}>Избранное</div>
      <Products prodList={favoritesProd} />
    </main>
  );
};

export default Favorites;
