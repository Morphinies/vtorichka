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
          defaultCategory={defaultConditions.category}
          conditionsApplied={conditionsApplied}
          setConditionsApplied={setConditionsApplied}
        />

        <Products />

        <FiltersBlock
          id="2"
          btnName="фильтры"
          conditionsApplied={conditionsApplied}
          defaultFilters={defaultConditions.filters}
          setConditionsApplied={setConditionsApplied}
        />
        <SortingBlock
          btnName="сортировка"
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
