import api from "../api";
import Footer from "../common/footer/footer";
import Header from "../common/header/header";
import Products from "../common/products/products";
import React, { useEffect, useState } from "react";
import SearchLine from "../common/searchLine/searchLine";
import CatalogBlock from "../common/sidebar/catalog/catalogBlock";
import FiltersBlock from "../common/sidebar/filters/filtersBlock";
import SortingBlock from "../common/sidebar/sorting/sortingBlock";
import Conditions from "../common/conditions/conditions";

const Main = () => {
  const defaultValues = {
    filters: { checkBox1: true, checkBox2: true },
    sorting: {
      name: "дате (c новых)",
      value: "dateToDown",
    },
    category: { name: "" },
  };

  const [catalog, setCatalog] = useState([]);
  const [choosedCategory, setChoosedCategory] = useState(
    defaultValues.category
  );
  const [choosedSorting, setChoosedSorting] = useState(defaultValues.sorting);
  const [choosedFilters, setChoosedFilters] = useState(defaultValues.filters);

  const [choosedConditions, setChoosedConditions] = useState({
    category: defaultValues.category,
    sorting: defaultValues.sorting,
    filters: defaultValues.filters,
  });

  useEffect(() => {
    choosedConditions.category !== choosedCategory &&
      setChoosedConditions((prevState) => {
        return { ...prevState, category: choosedCategory };
      });
    choosedConditions.sorting !== choosedSorting &&
      setChoosedConditions((prevState) => {
        return { ...prevState, sorting: choosedSorting };
      });
    choosedConditions.filters !== choosedFilters &&
      setChoosedConditions((prevState) => {
        return { ...prevState, filters: choosedFilters };
      });
  }, [choosedConditions, choosedCategory, choosedSorting, choosedFilters]);

  useEffect(() => {
    api.categoryList.fetchAll().then((data) => setCatalog(data));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <SearchLine />
        <Conditions
          defaultValues={defaultValues}
          choosedConditions={choosedConditions}
        />
        <CatalogBlock
          id="1"
          btnName="каталог"
          categories={catalog}
          chooseCategory={setChoosedCategory}
        />

        <Products category={choosedCategory} />

        <FiltersBlock
          id="2"
          btnName="фильтры"
          defaultFilters={defaultValues.filters}
          appliedFilters={choosedFilters}
          applyFilters={setChoosedFilters}
        />
        <SortingBlock
          btnName="сортировка"
          choosedSorting={choosedSorting}
          setChoosedSorting={setChoosedSorting}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
