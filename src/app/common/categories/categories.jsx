import api from "../../api";
import s from "./categories.module.css";
import React, { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [categoriesHidden, setCategoriesHidden] = useState(true);

  useEffect(() => {
    api.categoryList.fetchAll().then((data) => setCategories(data));
  }, []);
  categories && console.log(categories);
  return (
    <aside className={s.aside}>
      {categoriesHidden ? (
        <button
          className="btn"
          id={s.categoryBtn}
          onClick={() => setCategoriesHidden(false)}
        >
          <p className={s.btnsText}>показать категории</p>
        </button>
      ) : (
        <ul className={s.categories}>
          {categories && (
            <>
              <button
                onClick={() => setCategoriesHidden(true)}
                className="btn"
                id={s.btnHideCategory}
              >
                скрыть
              </button>
              {categories.map((category) => (
                <li className={s.category}>
                  <p className={s.categoryName}>{Object.keys(category)}</p>
                  <svg
                    width="16"
                    height="8"
                    fill="none"
                    viewBox="0 0 31 15"
                    xmlns="http://www.w3.org/2000/svg"
                    className={s.arrowDown}
                  >
                    <path
                      d="M29.4395 0.500003L15.5 14.2965L1.56052 0.5L29.4395 0.500003Z"
                      stroke="#F6F6F6"
                    />
                  </svg>
                </li>
              ))}
            </>
          )}
        </ul>
      )}
    </aside>
  );
};

export default Categories;
