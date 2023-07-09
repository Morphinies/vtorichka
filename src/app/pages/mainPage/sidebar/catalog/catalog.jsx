import React from "react";
import v from "../sidebar.module.css";
import CatalogItem from "./catalogItem";

const Catalog = ({
  curCat,
  catList,
  setCurCat,
  setCatList,
  hideCatalog,
  searchParams,
  setSearchParams,
  setCatListDefault,
}) => {
  // handle click on category button
  const displayCat = (catItem) => {
    const curCategory = searchParams.get("category");
    //
    let allSumOpenCat = 0;
    const catItemCats = catItem.value;
    const lIndexOfCurCat = curCat.length - 1;
    curCat.map((category) => (allSumOpenCat += category.value.length));

    //~~~~~~~~~~~~~~~~~~~~~~~~~~ убрать категорию ~~~~~~~~~~~~~~~~~~~~~~~~~~//
    if (catItem.name === curCategory) {
      searchParams.delete("category");
      setSearchParams(searchParams);
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~ выбор/смена категории ~~~~~~~~~~~~~~~~~~~~~~~~~~//
    else if (!catItem.value) {
      searchParams.set("category", catItem.name);
      setSearchParams(searchParams);
      hideCatalog();
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
      curCat[lIndexOfCurCat].value.includes(catItem)
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
          .concat(catList[catList.indexOf(catItem) - 1].value)
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
      <ul className={v.catList}>
        {catList.map((catItem) => (
          <CatalogItem
            curCat={curCat}
            catItem={catItem}
            key={catItem.name}
            displayCat={displayCat}
            choosedCat={searchParams.get("category")}
          />
        ))}
      </ul>
    )
  );
};

export default Catalog;
