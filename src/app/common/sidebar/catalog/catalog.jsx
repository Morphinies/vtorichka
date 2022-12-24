import React from "react";
import s from "./catalog.module.css";
import v from "../sidebar.module.css";
import arrowDown from "../../../img/arrowDown.svg";

const Catalog = ({
  curCat,
  catList,
  setCurCat,
  setCatList,
  chooseCategory,
  choosedCategory,
  setCatListDefault,
  setChoosedCategory,
}) => {
  const displayCat = (catItem) => {
    let allSumOpenCat = 0;
    const catItemCats = catItem.values;
    const lIndexOfCurCat = curCat.length - 1;
    curCat.map((category) => (allSumOpenCat += category.values.length));

    //~~~~~~~~~~~~~~~~~~~~~~~~~~ убрать категорию ~~~~~~~~~~~~~~~~~~~~~~~~~~//
    if (!catItem.values && catItem.name === choosedCategory.name) {
      chooseCategory((prevState) => {
        return { ...prevState, name: "" };
      });
      setChoosedCategory({});
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~ выбор/смена категории ~~~~~~~~~~~~~~~~~~~~~~~~~~//
    else if (!catItem.values) {
      chooseCategory((prevState) => {
        return { ...prevState, name: catItem.name };
      });
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
      setCatListDefault();
      setCurCat([]);
    }
  };

  return (
    catList && (
      <ul className={s.catList}>
        {catList.map((catItem) => (
          <li
            role="button"
            onClick={() => displayCat(catItem)}
            className={v.btnDisplayCat}
            id={
              curCat.includes(catItem)
                ? v.openCatItem
                : catItem === choosedCategory
                ? s.choosedCatItem
                : ""
            }
            key={catItem.name}
          >
            <p className={v.btnDisplayCatText}>{catItem.name}</p>
            {catItem.values && (
              <img className={v.imgArrowDown} alt="" src={arrowDown} />
            )}
          </li>
        ))}
      </ul>
    )
  );
};

export default Catalog;
