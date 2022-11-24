import React, { useEffect, useState } from "react";
import arrowDown from "../../img/arrowDown.svg";
import s from "./categories.module.css";

const CategoriesList = ({ categories, chooseCategory }) => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState([]);
  useEffect(() => setCategoriesList(categories), [categories]);

  // console.log(categoriesList);
  console.log(currentCategory);

  const displayCategory = (categoriesItem) => {
    const subArray = categoriesItem.values;
    const index = categoriesList.indexOf(categoriesItem) + 1;

    if (!categoriesItem.values) {
      chooseCategory(categoriesItem.name);
    } else if (
      currentCategory.length &&
      currentCategory.includes(categoriesItem)
    ) {
      (() => {
        setCategoriesList(
          categoriesList
            .slice(0, index)
            .concat(categoriesList.slice(index + subArray.length))
        );
        setCurrentCategory((arr) => [
          ...arr.slice(0, arr.indexOf(categoriesItem)),
          ...arr.slice(1 + arr.indexOf(categoriesItem)),
        ]);
      })();
    }
    // else if (currentCategory.includes(categoriesItem)) {
    //   (() => {
    //     setCategoriesList(
    //       categoriesList
    //         .slice(0, index)
    //         .concat(categoriesList.slice(index + subArray.length))
    //     );
    //     setCurrentCategory(
    //       currentCategory.slice(0, currentCategory.indexOf(categoriesItem))
    //     );
    //   })();
    // }
    else
      (() => {
        setCategoriesList(
          categoriesList
            .slice(0, index)
            .concat(subArray, categoriesList.slice(index))
        );
        setCurrentCategory((arr) => [...arr, categoriesItem]);
      })();
  };

  return (
    categoriesList && (
      <ul className={s.categoriesList}>
        {categoriesList.map((categoriesItem) => (
          <li
            key={categoriesItem.name}
            onClick={() => displayCategory(categoriesItem)}
            role="button"
            className="btn"
            id={s.category}
          >
            <p className={s.categoryName}>{categoriesItem.name}</p>
            {categoriesItem.values && (
              <img className={s.imgArrowDown} src={arrowDown} alt="" />
            )}
          </li>
        ))}
      </ul>
    )
  );
};

export default CategoriesList;
