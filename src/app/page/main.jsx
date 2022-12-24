import React, { useState } from "react";
import Footer from "../common/footer/footer";
import Header from "../common/header/header";
import Products from "../common/products/products";
// import Conditions from "../common/conditions/conditions";
import SearchLine from "../common/searchLine/searchLine";
import CatalogBlock from "../common/sidebar/catalog/catalogBlock";
import FiltersBlock from "../common/sidebar/filters/filtersBlock";
import SortingBlock from "../common/sidebar/sorting/sortingBlock";

const Main = ({ defaultConditions }) => {
  //conditions
  const [conditionsApplied, setConditionsApplied] = useState({
    ...defaultConditions,
  });
  // console.log(conditionsApplied);

  //category
  // const [choosedCategory, setChoosedCategory] = useState(
  //   defaultConditions.category
  // );

  //sorting
  const [choosedSorting, setChoosedSorting] = useState(
    defaultConditions.sorting
  );

  //filters
  const [choosedFilters, setChoosedFilters] = useState(
    defaultConditions.filters
  );

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <SearchLine />
        {/* <Conditions
          defaultConditions={defaultConditions}
          conditionsApplied={conditionsApplied}
        /> */}
        <CatalogBlock
          id="1"
          btnName="каталог"
          // chooseCategory={setChoosedCategory}
          setConditionsApplied={setConditionsApplied}
        />

        <Products />

        <FiltersBlock
          id="2"
          btnName="фильтры"
          appliedFilters={choosedFilters}
          applyFilters={setChoosedFilters}
          defaultFilters={defaultConditions.filters}
        />
        <SortingBlock
          btnName="сортировка"
          choosedSorting={choosedSorting}
          setChoosedSorting={setChoosedSorting}
          setConditionsApplied={setConditionsApplied}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
