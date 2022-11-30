import s from "./categories.module.css";
import arrowDown from "../../img/arrowDown.svg";
import React, { useEffect, useState } from "react";

const CategoriesList = ({ categories, chooseCategory, opacity }) => {
  const [curCat, setCurCat] = useState([]);
  const [catList, setCatList] = useState([]);
  const [choosedCategory, setChoosedCategory] = useState({});

  useEffect(() => setCatList(categories), [categories]);

  const displayCat = (catItem) => {
    let allSumOpenCat = 0;
    const catItemCats = catItem.values;
    const lIndexOfCurCat = curCat.length - 1;
    curCat.map((category) => (allSumOpenCat += category.values.length));

    if (!catItem.values) {
      chooseCategory(catItem.name);
      setChoosedCategory(catItem);
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~ открытие ветки категорий ~~~~~~~~~~~~~~~~~~~~~~~~~~//
    else if (!curCat.length) {
      (() => {
        setCatList([catItem].concat(catItemCats));
        setCurCat((arr) => [...arr, catItem]);
      })();
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~ внутренняя категория ~~~~~~~~~~~~~~~~~~~~~~~~~~//
    else if (
      curCat.length &&
      !curCat.includes(catItem) &&
      curCat[lIndexOfCurCat].values.includes(catItem)
    ) {
      setCatList(curCat.concat([catItem], catItemCats));
      setCurCat((arr) => [...arr, catItem]);
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~ повторное нажатие на категорию из истории ~~~~~~~~~~~~~~~~~~~~~~~~~~//
    else if (
      curCat.length &&
      curCat.includes(catItem) &&
      curCat[0] !== catItem
    ) {
      console.log(catList.indexOf(catItem));
      setCatList(
        catList
          .slice(0, catList.indexOf(catItem))
          .concat(catList[catList.indexOf(catItem) - 1].values)
      );
      setCurCat((arr) => [...arr.slice(0, arr.indexOf(catItem))]);
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~ возвращение к основному каталогу ~~~~~~~~~~~~~~~~~~~~~~~~~~//
    else if (
      curCat.length &&
      curCat.includes(catItem) &&
      curCat[0] === catItem
    ) {
      setCatList(categories);
      setCurCat([]);
    }
  };

  return (
    catList && (
      <ul className={s.catList} id={!opacity ? s.opacity : ""}>
        {catList.map((catItem) => (
          <li
            role="button"
            onClick={() => displayCat(catItem)}
            className={s.categoriesBtn}
            id={
              curCat.includes(catItem)
                ? s.openCatItem
                : catItem === choosedCategory
                ? s.choosedCatItem
                : ""
            }
            key={catItem.name}
          >
            <p className={s.categoriesBtnText}>{catItem.name}</p>
            {catItem.values && (
              <img className={s.imgArrowDown} alt="" src={arrowDown} />
            )}
          </li>
        ))}
      </ul>
    )
  );
};

export default CategoriesList;
