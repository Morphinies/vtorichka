import React, { useState } from "react";
import Footer from "../common/footer/footer";
import Header from "../common/header/header";
import SearchLine from "../common/searchLine/searchLine";
import Categories from "../common/categories/categories";
import Products from "../common/products/products";

const Main = () => {
  const [category, setCategory] = useState("");
  const chooseCategory = (category) => {
    setCategory(category);
  };

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <SearchLine />
        <Categories chooseCategory={chooseCategory} />
        <Products category={category} />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
