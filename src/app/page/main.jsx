import React, { useEffect, useState } from "react";
import Footer from "../common/footer/footer";
import Header from "../common/header/header";
import SearchLine from "../common/searchLine/searchLine";
import Categories from "../common/categories/categories";
import Products from "../common/products/products";
import api from "../api";

const Main = () => {
  const [filters, setFilters] = useState([]);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState("");

  useEffect(() => {
    api.categoryList.fetchAll().then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    api.filterList.fetchAll().then((data) => setFilters(data));
  });

  const chooseCategory = (category) => {
    setCategory(category);
  };

  const chooseFilters = (filters) => {
    setAppliedFilters(filters);
    // console.log(appliedFilters);
  };

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <SearchLine />
        <Categories
          btnName="каталог"
          categories={categories}
          chooseCategory={chooseCategory}
        />
        <Products category={category} />
        <Categories
          btnName="фильтры"
          categories={filters}
          chooseCategory={chooseFilters}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
