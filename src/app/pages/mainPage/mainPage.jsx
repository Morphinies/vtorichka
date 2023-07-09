import api from "../../api";
import Sidebar from "./sidebar/sidebar";
import Conditions from "./conditions/conditions";
import React, { useEffect, useState } from "react";
import Products from "../../common/prodList/products";
import {
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import Search from "./search/search";

const MainPage = () => {
  const navigation = useNavigation();
  const defProducts = useLoaderData();
  const [searchParams] = useSearchParams();
  const [prodList, setProdList] = useState(defProducts);

  // установка параметров поиска товаров
  useEffect(() => {
    const paramsStr = `?${searchParams.toString()}`;
    paramsStr !== "?"
      ? api.products.fetchByParams(paramsStr).then((data) => setProdList(data))
      : setProdList(defProducts);
  }, [searchParams, defProducts]);

  return (
    <main
      className={"main " + (navigation.state === "loading" ? "loading" : "")}
    >
      <Search />
      <Conditions />
      <Products prodList={prodList} />
      <Sidebar />
    </main>
  );
};

export default MainPage;
