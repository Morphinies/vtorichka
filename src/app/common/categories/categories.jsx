import s from "./categories.module.css";
import cancel from "../../img/cancel.svg";
import CategoriesList from "./categoriesList";
import arrowDown from "../../img/arrowDown.svg";
import React, { useEffect, useState } from "react";
import CategoriesDisplayBtn from "./categoriesDisplayBtn";

const Categories = ({ chooseCategory, categories }) => {
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
        img={categoriesHidden ? arrowDown : cancel}
        display={categoriesHidden ? false : true}
        setCategoriesHidden={categoriesHide}
      />
      {!categoriesHidden && (
        <CategoriesList
          opacity={opacity}
          categories={categories}
          chooseCategory={chooseCategory}
        />
      )}
    </nav>
  );
  // <nav className={s.categoriesNav} id={!opacity ? s.opacity : ""}>
  //   <CategoriesDisplayBtn
  //     display={false}
  //     img={arrowDown}
  //     setCategoriesHidden={categoriesHide}
  //   />
  // </nav>
};

export default Categories;
