import React, { useEffect, useState } from "react";
import Footer from "../common/footer/footer";
import Header from "../common/header/header";
import SearchLine from "../common/searchLine/searchLine";
import Categories from "../common/categories/categories";
import Products from "../common/products/products";
import api from "../api";

const Main = () => {
  const [openedCat, setOpenedCat] = useState("");
  const [filters, setFilters] = useState([]);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState({
    checkBox1: true,
    checkBox2: true,
  });
  const defaultFilters = {
    checkBox1: true,
    checkBox2: true,
  };

  useEffect(() => {
    api.categoryList.fetchAll().then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    api.filterList.fetchAll().then((data) => setFilters(data));
  });

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <SearchLine />
        <Categories
          id="1"
          openedCat={openedCat}
          setOpenedCat={setOpenedCat}
          btnName="каталог"
          categories={categories}
          chooseCategory={setCategory}
        />
        <Products category={category} />
        <Categories
          id="2"
          openedCat={openedCat}
          setOpenedCat={setOpenedCat}
          btnName="фильтры"
          categories={filters}
          defaultFilters={defaultFilters}
          appliedFilters={appliedFilters}
          applyFilters={setAppliedFilters}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
