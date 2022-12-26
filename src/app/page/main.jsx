import api from "../api";
import Footer from "../common/footer/footer";
import Header from "../common/header/header";
import React, { useEffect, useState } from "react";
import Products from "../common/products/products";
import SearchLine from "../common/searchLine/searchLine";
// import Conditions from "../common/conditions/conditions";
import CatalogBlock from "../common/sidebar/catalog/catalogBlock";
import FiltersBlock from "../common/sidebar/filters/filtersBlock";
import SortingBlock from "../common/sidebar/sorting/sortingBlock";

const Main = ({ defaultConditions }) => {
  // console.log(conditionsApplied);

  // applied conditions
  const [conditionsApplied, setConditionsApplied] = useState({
    ...defaultConditions,
  });

  // sorting list
  const [sortingList, setSortingList] = useState();
  useEffect(() => {
    api.sortingList.fetchAll().then((data) => setSortingList(data));
  }, []);

  // choosed sorting
  const [choosedSorting, setChoosedSorting] = useState(
    defaultConditions.sorting
  );

  // category
  // const [choosedCategory, setChoosedCategory] = useState(
  //   defaultConditions.category
  // );

  // choosed filters
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
          conditionsApplied={conditionsApplied}
          setConditionsApplied={setConditionsApplied}
        />

        <Products />

        <FiltersBlock
          id="2"
          btnName="фильтры"
          filtersApplied={conditionsApplied.filters}
          setFiltersApplied={setConditionsApplied}
          appliedFilters={choosedFilters}
          applyFilters={setChoosedFilters}
          defaultFilters={defaultConditions.filters}
        />
        <SortingBlock
          btnName="сортировка"
          sortingList={sortingList}
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
