import api from "../../api";
import s from "./categories.module.css";
import cancel from "../../img/cancel.svg";
import arrowDown from "../../img/arrowDown.svg";
import React, { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentSubCategory, setCurrentSubCategory] = useState("");
  const [categoriesHidden, setCategoriesHidden] = useState(false);
  console.log(currentCategory);

  useEffect(() => {
    api.categoryList.fetchAll().then((data) => setCategories(data));
  }, []);

  const chooseCategory = (category) => {
    setCurrentCategory(category.name);
    currentCategory === category.name && setCurrentCategory("");
  };

  const chooseSubCategory = (subCategory1) => {
    setCurrentSubCategory(subCategory1.name);
    currentSubCategory === subCategory1.name && setCurrentSubCategory("");
  };

  return (
    <nav className={s.categoriesNav}>
      {!categoriesHidden ? (
        <>
          <button
            onClick={() => setCategoriesHidden(true)}
            className="btn"
            id={s.categoriesHideBtn}
          >
            <p className={s.categoriesHideText}>категории</p>
            <img className={s.imgCancel} src={cancel} alt="" />
          </button>

          {categories && categories.values && (
            <ul className={s.categoriesList}>
              {categories.map((category) => (
                <>
                  <li
                    role="button"
                    className="btn"
                    id={
                      category.name === currentCategory
                        ? s.currentCategory
                        : s.category
                    }
                    key={category.name}
                    onClick={() => chooseCategory(category)}
                  >
                    <p className={s.categoryName}>{category.name}</p>
                    {category.values && (
                      <img className={s.imgArrowDown} src={arrowDown} alt="" />
                    )}
                  </li>

                  {currentCategory === category.name && category.values && (
                    <ul className={s.categoriesList}>
                      {category.values.map((subCategory1) => (
                        <>
                          <li
                            className="btn"
                            id={s.category}
                            key={subCategory1.name}
                            onClick={() => chooseSubCategory(subCategory1)}
                          >
                            <p className={s.categoryName}>
                              {subCategory1.name}
                            </p>
                            {subCategory1.values && (
                              <img
                                className={s.imgArrowDown}
                                src={arrowDown}
                                alt=""
                              />
                            )}
                          </li>
                          {currentSubCategory === subCategory1.name &&
                            subCategory1.values && (
                              <ul className={s.categoriesList}>
                                {subCategory1.values.map((subCategory2) => (
                                  <li
                                    className="btn"
                                    id={s.category}
                                    key={subCategory2.name}
                                    onClick={() =>
                                      chooseSubCategory(subCategory2)
                                    }
                                  >
                                    <p className={s.categoryName}>
                                      {subCategory2.name}
                                    </p>
                                    {subCategory2.values && (
                                      <img
                                        className={s.imgArrowDown}
                                        src={arrowDown}
                                        alt=""
                                      />
                                    )}
                                  </li>
                                ))}
                              </ul>
                            )}
                        </>
                      ))}
                    </ul>
                  )}
                </>
              ))}
            </ul>
          )}
        </>
      ) : (
        <button
          onClick={() => setCategoriesHidden(false)}
          className="btn"
          id={s.categoriesHideBtn}
        >
          <p className={s.categoriesHideText}>категории</p>
          <img className={s.imgArrowDown} src={arrowDown} alt="" />
        </button>
      )}
    </nav>
  );
};

export default Categories;
