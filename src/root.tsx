import * as React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./app/common/header/header";
import Footer from "./app/common/footer/footer";

const Root = (): JSX.Element => {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

export default Root;
