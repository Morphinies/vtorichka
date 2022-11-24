import React from "react";
import s from "./categories.module.css";
import arrowDown from "../../img/arrowDown.svg";

const SubCategory = ({
  category,
  subCategories,
  chooseSubCategory,
  currentSubCategory,
}) => {
  return (
    <>
      {currentSubCategory === category.name && category.values && (
        <ul className={s.categoriesList}>
          {category.values.map((subCategory) => (
            <div key={subCategory.name}>
              <li
                className="btn"
                id={s.category}
                key={subCategory.name}
                onClick={() => chooseSubCategory(subCategory)}
              >
                <p className={s.categoryName}>{subCategory.name}</p>
                {subCategory.values && (
                  <img className={s.imgArrowDown} src={arrowDown} alt="" />
                )}
              </li>
              {subCategories}
            </div>
          ))}
        </ul>
      )}
    </>
  );
};

export default SubCategory;
