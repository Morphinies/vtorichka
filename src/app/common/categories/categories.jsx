import api from "../../api";
import s from "./categories.module.css";
import cancel from "../../img/cancel.svg";
import CategoriesList from "./categoriesList";
import arrowDown from "../../img/arrowDown.svg";
import React, { useEffect, useState } from "react";
import CategoriesDisplayBtn from "./categoriesDisplayBtn";

const Categories = ({ chooseCategory }) => {
  const [categories, setCategories] = useState([]);
  const [categoriesHidden, setCategoriesHidden] = useState(true);

  useEffect(() => {
    api.categoryList.fetchAll().then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    categories.length && setCategoriesHidden(false);
  }, [categories]);

  return (
    <nav className={s.categoriesNav}>
      {!categoriesHidden ? (
        <>
          <CategoriesDisplayBtn
            img={cancel}
            display={true}
            setCategoriesHidden={setCategoriesHidden}
          />

          <CategoriesList
            categories={categories}
            chooseCategory={chooseCategory}
          />
        </>
      ) : (
        <CategoriesDisplayBtn
          display={false}
          img={arrowDown}
          setCategoriesHidden={setCategoriesHidden}
        />
      )}
    </nav>
  );
};

export default Categories;
