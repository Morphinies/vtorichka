import s from "./categories.module.css";
import cancel from "../../img/cancel.svg";
import arrowDown from "../../img/arrowDown.svg";
import React, { useEffect, useState } from "react";
import CategoriesDisplayBtn from "./categoriesDisplayBtn";
import GoodsList from "./goodsList";
import FiltersList from "../filters/filtersList";

const Categories = ({ chooseCategory, categories, btnName }) => {
  const [categoriesHidden, setCategoriesHidden] = useState(true);
  const [opacity, setOpacity] = useState(true);

  useEffect(() => {
    categories && categories.length && setCategoriesHidden(false);
  }, [categories]);

  const categoriesHide = (display) => {
    setCategoriesHidden(display);
    setOpacity(true);
  };

  useEffect(() => {
    setTimeout(() => setOpacity(false), 100);
  }, [categoriesHidden]);

  return (
    <nav className={s.categoriesNav}>
      <CategoriesDisplayBtn
        btnName={btnName}
        img={categoriesHidden ? arrowDown : cancel}
        display={categoriesHidden ? false : true}
        setCategoriesHidden={categoriesHide}
      />

      {!categoriesHidden && btnName === "каталог" && (
        <GoodsList
          opacity={opacity}
          categories={categories}
          chooseCategory={chooseCategory}
        />
      )}

      {!categoriesHidden && btnName === "фильтры" && (
        <FiltersList
          opacity={opacity}
          categories={categories}
          chooseCategory={chooseCategory}
        />
      )}
    </nav>
  );
};

export default Categories;
