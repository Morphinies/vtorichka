import * as React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./app/common/header/header";
import Footer from "./app/common/footer/footer";
import { useAppDispatch } from "./app/redux/hooks/hooks";
import { setFavoritesAsync } from "./app/redux/slices/favoritesSlice";

const Root = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFavoritesAsync());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
