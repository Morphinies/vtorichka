import s from "./categories.module.css";
import arrowDown from "../../img/arrowDown.svg";
import React, { useEffect, useState } from "react";

const CategoriesList = ({ categories, chooseCategory }) => {
  const [catList, setCatList] = useState([]);
  const [curCat, setCurCat] = useState([]);
  useEffect(() => setCatList(categories), [categories]);

  const displayCat = (catItem) => {
    const calcSumOpenCat = () => {
      let sum = 0;
      const catItemOpenCats = curCat.slice(curCat.indexOf(catItem));
      catItemOpenCats.map((category) => (sum += category.values.length));
      return sum;
    };
    let allSumOpenCat = 0;
    const catItemCats = catItem.values;
    const sumOpenCat = calcSumOpenCat();
    const lIndexOfCurCat = curCat.length - 1;
    const indexOfCatItem = catList.indexOf(catItem) + 1;
    curCat.map((category) => (allSumOpenCat += category.values.length));

    if (!catItem.values) {
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~ открытие ветки категорий ~~~~~~~~~~~~~~~~~~~~~~~~~~//
    else if (!curCat.length) {
      (() => {
        setCatList(
          catList
            .slice(0, indexOfCatItem)
            .concat(catItemCats, catList.slice(indexOfCatItem))
        );
        setCurCat((arr) => [...arr, catItem]);
      })();
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~ внутренняя категория ~~~~~~~~~~~~~~~~~~~~~~~~~~//
    else if (
      curCat.length &&
      !curCat.includes(catItem) &&
      curCat[lIndexOfCurCat].values.includes(catItem)
    ) {
      setCatList(
        catList
          .slice(0, indexOfCatItem)
          .concat(catItemCats, catList.slice(indexOfCatItem))
      );
      setCurCat((arr) => [...arr, catItem]);
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~ определение соседней категории ~~~~~~~~~~~~~~~~~~~~~~~~~~//
    else if (
      curCat.length &&
      !curCat.includes(catItem) &&
      !curCat[lIndexOfCurCat].values.includes(catItem)
    ) {
      let isNeighbor = 0;
      curCat.map(
        (category) => category.values.includes(catItem) && isNeighbor++
      );

      //~~~~~~~~~~~~~~~~~~~~~~~~~~ переключение на соседнюю категорию  ~~~~~~~~~~~~~~~~~~~~~~~~~~//
      if (isNeighbor) {
        let dadCats = [];
        const newDadCatList = [];

        curCat.map(
          (category) =>
            category.values.includes(catItem) && dadCats.push(category)
        );

        const dadCatItem = dadCats[0];
        const dadIndexInCurCat = curCat.indexOf(dadCatItem);
        const dadIndexInCatList = catList.indexOf(dadCatItem) + 1;

        dadCatItem.values.map((category) =>
          category === catItem
            ? newDadCatList.push(category) &&
              newDadCatList.push(...category.values)
            : newDadCatList.push(category)
        );

        setCatList(
          catList
            .slice(0, dadIndexInCatList)
            .concat(
              newDadCatList,
              catList.slice(dadIndexInCatList + allSumOpenCat)
            )
        );
        setCurCat((arr) =>
          arr.slice(0, dadIndexInCurCat + 1).concat([catItem])
        );
      }

      //~~~~~~~~~~~~~~~~~~~~~~~~~~ переключение на соседнюю ветку категорий ~~~~~~~~~~~~~~~~~~~~~~~~~~//
      else {
        const startNewBranch = catList.slice(0, catList.indexOf(curCat[0]) + 1);
        const newBranch = startNewBranch.concat(
          catList.slice(startNewBranch.length + allSumOpenCat)
        );
        const indexNewCat = newBranch.indexOf(catItem) + 1;

        setCatList(
          newBranch
            .slice(0, indexNewCat)
            .concat(catItemCats, newBranch.slice(indexNewCat))
        );
        setCurCat([catItem]);
      }
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~ повторное нажатие на категорию из истории ~~~~~~~~~~~~~~~~~~~~~~~~~~//
    else if (curCat.length && curCat.includes(catItem)) {
      setCatList(
        catList
          .slice(0, indexOfCatItem)
          .concat(catList.slice(indexOfCatItem + sumOpenCat))
      );
      setCurCat((arr) => [...arr.slice(0, arr.indexOf(catItem))]);
    }
  };

  return (
    catList && (
      <ul className={s.catList}>
        {catList.map((catItem) => (
          <li
            role="button"
            id={s.curCategory}
            key={catItem.name}
            className={s.category}
          >
            <div className={s.wrapper}>
              <p
                className="btn"
                id={s.categoryName}
                onClick={() => chooseCategory(catItem.name)}
              >
                {catItem.name}
              </p>
              {catItem.values && (
                <div
                  className="btn"
                  id={s.divImgArrowDown}
                  onClick={() => displayCat(catItem)}
                >
                  <img className={s.imgArrowDown} alt="" src={arrowDown} />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    )
  );
};

export default CategoriesList;
