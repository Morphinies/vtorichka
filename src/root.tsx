import * as React from "react";
import { useEffect } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import Header from "./app/common/header/header";
import Footer from "./app/common/footer/footer";
import { useAppDispatch } from "./app/redux/hooks/hooks";
import { fetchFavorites } from "./app/redux/slices/favoritesSlice";
import { fetchProds, updateProds } from "./app/redux/slices/prodsSlice";

const Root = (): JSX.Element => {
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchFavorites());
        dispatch(fetchProds());
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
