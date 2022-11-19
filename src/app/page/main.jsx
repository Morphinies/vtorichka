import React from "react";
import Footer from "../common/footer/footer";
import Header from "../common/header/header";
import SearchLine from "../common/searchLine/searchLine";
import Categories from "../common/categories/categories";

const Main = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <SearchLine />
        <Categories />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
