import s from "./categories.module.css";
import Catalog from "./catalog/catalog";
import cancel from "../../img/cancel.svg";
import FiltersList from "./filters/filtersList";
import arrowDown from "../../img/arrowDown.svg";
import React, { useEffect, useState } from "react";
import CategoriesDisplayBtn from "./categoriesDisplayBtn";

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
  const [choosedCategory, setChoosedCategory] = useState({});
  const [categoriesHidden, setCategoriesHidden] = useState(true);
  const [choosedFilters, setChoosedFilters] = useState(defaultFilters);

  // создать отображаемый список категорий
  useEffect(() => setCatList(categories), [categories]);

  // отображение категорий true/false
  const categoriesHide = (display) => {
    setOpacity(true);
    setCategoriesHidden(display);
  };

  // возвращение к первоначальному каталогу
  const setCatListDefault = () => {
    setCatList(categories);
  };

  // плавное появление каталога/фильтров
  useEffect(() => {
    setTimeout(() => setOpacity(false), 100);
  }, [categoriesHidden]);

  return (
    <nav className={s.categoriesNav} id={s["categoriesNav" + id]}>
      <CategoriesDisplayBtn
        btnName={btnName}
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
