import api from "../../api";
import * as React from "react";
import Search from "./search/search";
import Sidebar from "./sidebar/sidebar";
import { useEffect, useState } from "react";
import { Iprod } from "../../../types/types";
import Conditions from "./conditions/conditions";
import Products from "../../common/prodList/products";
import { useNavigation, useSearchParams } from "react-router-dom";

const MainPage = () => {
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const [prodList, setProdList] = useState<Iprod[]>([]);

  useEffect(() => {
    const paramsStr: string = `?${searchParams.toString()}`;
    api.products
      .fetchByParams(paramsStr)
      .then((data: Iprod[]) => setProdList(data));
  }, [searchParams]);

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
