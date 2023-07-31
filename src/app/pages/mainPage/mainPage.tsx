import api from "../../api";
import * as React from "react";
import Search from "./search/search";
import Sidebar from "./sidebar/sidebar";
import { useEffect, useState } from "react";
import { Iprod } from "../../../types/types";
import Conditions from "./conditions/conditions";
import Loading from "../../common/loading/loading";
import { useSearchParams } from "react-router-dom";
import Products from "../../common/prodList/products";

const MainPage = () => {
  const [searchParams] = useSearchParams();
  const [prodList, setProdList] = useState<Iprod[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false || !prodList);

  useEffect(() => {
    setIsLoading(true);
    const paramsStr: string = `?${searchParams.toString()}`;
    api.products.fetchByParams(paramsStr).then((data: Iprod[]) => {
      setProdList(data);
      setIsLoading(false);
    });
  }, [searchParams]);

  return (
    <main className={"main "}>
      <Search />
      <Conditions />
      {!isLoading ? <Products prodList={prodList} /> : <Loading />}
      <Sidebar />
    </main>
  );
};

export default MainPage;
