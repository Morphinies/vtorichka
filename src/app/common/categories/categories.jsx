import s from "./categories.module.css";
import cancel from "../../img/cancel.svg";
import arrowDown from "../../img/arrowDown.svg";
import React, { useEffect, useState } from "react";
import CategoriesDisplayBtn from "./categoriesDisplayBtn";
import Catalog from "./catalog/catalog";
import FiltersList from "./filters/filtersList";

const Categories = ({
  id,
  btnName,
  categories,
  applyFilters,
  appliedFilters,
  chooseCategory,
  defaultFilters,
}) => {
  const [curCat, setCurCat] = useState([]);
  const [catList, setCatList] = useState([]);
  const [opacity, setOpacity] = useState(true);
  const [openedFilters, setOpenedFilters] = useState([]);
  const [choosedFilters, setChoosedFilters] = useState({
    checkBox1: true,
    checkBox2: true,
  });
  const [choosedCategory, setChoosedCategory] = useState({});
  const [categoriesHidden, setCategoriesHidden] = useState(true);

  useEffect(() => setCatList(categories), [categories]);

  useEffect(() => {
    categories && categories.length && setCategoriesHidden(false);
  }, [categories]);

  const categoriesHide = (display) => {
    setOpacity(true);
    setCategoriesHidden(display);
  };

  const setCatListDefault = () => {
    setCatList(categories);
  };

  useEffect(() => {
    setTimeout(() => setOpacity(false), 100);
  }, [categoriesHidden]);

  return (
    <nav className={s.categoriesNav} id={s["categoriesNav" + id]}>
      <CategoriesDisplayBtn
        btnName={btnName}
        appliedFilters={appliedFilters}
        defaultFilters={defaultFilters}
        setCategoriesHidden={categoriesHide}
        display={categoriesHidden ? false : true}
        img={categoriesHidden ? arrowDown : cancel}
      />

      {!categoriesHidden && btnName === "каталог" && (
        <Catalog
          curCat={curCat}
          opacity={opacity}
          catList={catList}
          setCurCat={setCurCat}
          setCatList={setCatList}
          chooseCategory={chooseCategory}
          choosedCategory={choosedCategory}
          setCatListDefault={setCatListDefault}
          setChoosedCategory={setChoosedCategory}
        />
      )}

      {!categoriesHidden && btnName === "фильтры" && (
        <FiltersList
          opacity={opacity}
          applyFilters={applyFilters}
          openedFilters={openedFilters}
          choosedFilters={choosedFilters}
          appliedFilters={appliedFilters}
          defaultFilters={defaultFilters}
          setOpenedFilters={setOpenedFilters}
          setChoosedFilters={setChoosedFilters}
        />
      )}
    </nav>
  );
};

export default Categories;
