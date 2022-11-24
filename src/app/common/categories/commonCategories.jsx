import React from "react";
import s from "./categories.module.css";
import arrowDown from "../../img/arrowDown.svg";

const CommonCategories = (
  categories,
  currentCategory,
  chooseCategory,
  subCategories
) => {
  return (
    <ul className={s.categoriesList}>
      {categories.map((category) => (
        <div key={category.name}>
          <li
            role="button"
            className="btn"
            id={
              category.name === currentCategory ? s.currentCategory : s.category
            }
            onClick={() => chooseCategory(category)}
          >
            <p className={s.categoryName}>{category.name}</p>
            {category.values && (
              <img className={s.imgArrowDown} src={arrowDown} alt="" />
            )}
          </li>
          {subCategories}
        </div>
      ))}
    </ul>
  );
};

export default CommonCategories;
