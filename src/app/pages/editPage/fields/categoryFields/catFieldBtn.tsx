import * as React from "react";
import s from "../../editor.module.css";
import arrowDown from "../../../../img/arrowDown.svg";
import { ICatFieldBtn, IcatItem } from "../../../../../types/types";

const CatFieldBtn = ({
  curCat,
  catItem,
  setCurCat,
  formValue,
  hideCatalog,
  setFormValues,
  visableCatList,
  setVisableCatList,
  setVisableCatListDefault,
}: ICatFieldBtn): JSX.Element => {
  // handle click on category button
  const displayCat = (catItem: IcatItem) => {
    let allSumOpenCat = 0;
    const catItemCats = catItem.value;
    const lIndexOfCurCat = curCat.length - 1;
    curCat.map((category) => (allSumOpenCat += category.value.length));

    //~~~~~~~~~~~~~~~~~~~~~~~~~~ повторное нажатие на выбранную категорию ~~~~~~~~~~~~~~~~~~~~~~~~~~//
    if (catItem.name === formValue) {
      hideCatalog();
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~ выбор/смена категории ~~~~~~~~~~~~~~~~~~~~~~~~~~//
    else if (!catItem.value) {
      setFormValues((prevState) => ({
        ...prevState,
        category: catItem.name,
      }));
      hideCatalog();
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~ открытие ветки категорий ~~~~~~~~~~~~~~~~~~~~~~~~~~//
    else if (!curCat.length) {
      (() => {
        setVisableCatList([catItem].concat(catItemCats));
        setCurCat((arr) => [...arr, catItem]);
      })();
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~ внутренняя категория ~~~~~~~~~~~~~~~~~~~~~~~~~~//
    else if (
      curCat.length &&
      !curCat.includes(catItem) &&
      curCat[lIndexOfCurCat].value.includes(catItem)
    ) {
      setVisableCatList(curCat.concat([catItem], catItemCats));
      setCurCat((arr) => [...arr, catItem]);
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~ повторное нажатие на категорию из истории ~~~~~~~~~~~~~~~~~~~~~~~~~~//
    else if (
      curCat.length &&
      curCat.includes(catItem) &&
      curCat[0] !== catItem
    ) {
      setVisableCatList(
        visableCatList
          .slice(0, visableCatList.indexOf(catItem))
          .concat(visableCatList[visableCatList.indexOf(catItem) - 1].value)
      );
      setCurCat((arr) => [...arr.slice(0, arr.indexOf(catItem))]);
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~ возвращение к основному каталогу ~~~~~~~~~~~~~~~~~~~~~~~~~~//
    else if (
      curCat.length &&
      curCat.includes(catItem) &&
      curCat[0] === catItem
    ) {
      setVisableCatListDefault();
      setCurCat(() => []);
    }
  };

  return (
    <button
      type="button"
      onClick={() => displayCat(catItem)}
      className={
        s.btn +
        " " +
        ((catItem.name === formValue || curCat.includes(catItem)) &&
          s.formValue)
      }
    >
      <p>{catItem.name}</p>
      {catItem.value && (
        <img className={s.arrowDown} src={String(arrowDown)} alt="" />
      )}
    </button>
  );
};

export default CatFieldBtn;
