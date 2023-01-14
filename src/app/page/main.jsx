import React, { useState } from "react";
import Conditions from "../common/conditions/conditions";
import Footer from "../common/footer/footer";
import Header from "../common/header/header";
import Products from "../common/products/products";
import SearchLine from "../common/searchLine/searchLine";
import CatalogBlock from "../common/sidebar/catalog/catalogBlock";
import FiltersBlock from "../common/sidebar/filters/filtersBlock";
import SortingBlock from "../common/sidebar/sorting/sortingBlock";

const Main = ({ defaultConditions }) => {
  const [filtersHidden, setFiltersHidden] = useState(true);
  const [sortingHidden, setSortingHidden] = useState(true);
  const [categoriesHidden, setCategoriesHidden] = useState(true);

  const openCategories = () => {
    setCategoriesHidden(false);
    setSortingHidden(true);
    setFiltersHidden(true);
  };

  const openSorting = () => {
    setCategoriesHidden(true);
    setSortingHidden(false);
    setFiltersHidden(true);
  };

  const openFilters = () => {
    setCategoriesHidden(true);
    setSortingHidden(true);
    setFiltersHidden(false);
  };

  // applied conditions
  const [conditionsApplied, setConditionsApplied] = useState({
    ...defaultConditions,
  });

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <SearchLine />
        <Conditions
          defaultConditions={defaultConditions}
          conditionsApplied={conditionsApplied}
          setConditionsApplied={setConditionsApplied}
        />
        <CatalogBlock
          id="1"
          btnName="каталог"
          catalogHidden={categoriesHidden}
          conditionsApplied={conditionsApplied}
          setCatalogHidden={() => {
            categoriesHidden ? openCategories() : setCategoriesHidden(true);
          }}
          setConditionsApplied={setConditionsApplied}
          defaultCategory={defaultConditions.category}
        />

        <Products />

        <FiltersBlock
          id="2"
          btnName="фильтры"
          categoriesHidden={filtersHidden}
          conditionsApplied={conditionsApplied}
          setCategoriesHidden={() => {
            filtersHidden ? openFilters() : setFiltersHidden(true);
          }}
          defaultFilters={defaultConditions.filters}
          setConditionsApplied={setConditionsApplied}
        />
        <SortingBlock
          btnName="сортировка"
          blockHidden={sortingHidden}
          setBlockHidden={() => {
            sortingHidden ? openSorting() : setSortingHidden(true);
          }}
          conditionsApplied={conditionsApplied}
          defaultSorting={defaultConditions.sorting}
          setConditionsApplied={setConditionsApplied}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
