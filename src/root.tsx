import * as React from "react";
import { useEffect } from "react";
import Header from "./app/common/header/header";
import Footer from "./app/common/footer/footer";
import { useAppDispatch } from "./app/redux/hooks/hooks";
import { Outlet, useSearchParams } from "react-router-dom";
import { fetchCatList } from "./app/redux/slices/catListSlice";
import { fetchSortsList } from "./app/redux/slices/sortsListSlice";
import { fetchFavorites } from "./app/redux/slices/favoritesSlice";
import { fetchProds, updateProds } from "./app/redux/slices/prodsSlice";
import { fetchFiltersList } from "./app/redux/slices/filtersListSlice";

const Root = (): JSX.Element => {
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProds());
        dispatch(fetchCatList());
        dispatch(fetchFavorites());
        dispatch(fetchSortsList());
        dispatch(fetchFiltersList());
    }, [dispatch]);

    useEffect(() => {
        const paramsStr: string = `?${searchParams.toString()}`;
        dispatch(updateProds(paramsStr));
    }, [dispatch, searchParams]);

    return (
        <div className="wrapper">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
