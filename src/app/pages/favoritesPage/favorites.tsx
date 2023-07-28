import api from "../../api";
import * as React from "react";
import { useState, useEffect } from "react";
import { Iprod } from "../../../types/types";
import { useNavigation } from "react-router-dom";
import Products from "../../common/prodList/products";

const Favorites = () => {
  const navigation = useNavigation();
  const [favoriteProdList, setFavoriteProdList] = useState<Iprod[]>([]);

  useEffect(() => {
    api.products.fetchFavorites().then((data) => setFavoriteProdList(data));
  }, []);

  return (
    <main
      className={"main " + (navigation.state === "loading" ? "loading" : "")}
    >
      <Products prodList={favoriteProdList} />
    </main>
  );
};

export default Favorites;
