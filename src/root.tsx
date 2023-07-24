import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./app/common/header/header";
import Footer from "./app/common/footer/footer";

const Root = (): JSX.Element => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
