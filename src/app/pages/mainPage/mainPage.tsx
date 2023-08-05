import * as React from "react";
import Search from "./search/search";
import Sidebar from "./sidebar/sidebar";
import Conditions from "./conditions/conditions";
import Loading from "../../common/loading/loading";
import Products from "../../common/prodList/products";
import { useAppSelector } from "../../redux/hooks/hooks";

const MainPage = () => {
    const prods = useAppSelector((store) => store.prods);
    const isLoading = prods.status === "loading";

    return (
        <main className={"main " + (isLoading ? "loading" : "")}>
            <Search />
            <Conditions />
            {isLoading ? <Loading /> : <Products prodList={prods.value} />}
            <Sidebar />
        </main>
    );
};

export default MainPage;
