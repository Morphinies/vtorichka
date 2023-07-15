import api from "../../api";
import Sidebar from "./sidebar/sidebar";
import Conditions from "./conditions/conditions";
import * as React from "react";
import { useEffect, useState } from "react";
import Products from "../../common/prodList/products";
import {
  Navigation,
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import Search from "./search/search";
import { Iprod } from "../../../types/types";

const MainPage = () => {
  const navigation: Navigation = useNavigation();
  const defProducts = useLoaderData() as Iprod[];
  const [searchParams] = useSearchParams();
  const [prodList, setProdList] = useState(defProducts);

  // установка параметров поиска товаров
  useEffect(() => {
    const paramsStr: string = `?${searchParams.toString()}`;
    paramsStr !== "?"
      ? api.products
          .fetchByParams(paramsStr)
          .then((data: Iprod[]) => setProdList(data))
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
