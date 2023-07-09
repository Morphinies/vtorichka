import api from "../../../../api";
import Catalog from "./catalog";
import { useEffect } from "react";
import v from "../sidebar.module.css";
import React, { useState } from "react";
import BtnDisplayBlock from "../btnDisplayBlock";

const CatalogBlock = ({
  id,
  btnName,
  searchParams,
  openedSideBar,
  setSearchParams,
  changeOpenedSideBar,
}) => {
  const [curCat, setCurCat] = useState([]); //путь до имени категории
  const [catList, setCatList] = useState();
  const [categories, setCategories] = useState([]);

  // подгрузка существующих категорий
  useEffect(() => {
    api.categoryList.fetchAll().then((data) => setCategories(data));
  }, []);

  // установка видимых категорий
  useEffect(() => {
    setCatList(categories);
  }, [categories]);

  // установка открытого sidebar'a
  const openBlock = () => {
    changeOpenedSideBar(openedSideBar === btnName ? "" : btnName);
  };

  return (
    <nav
      className={
        v.categoriesNav + " " + (openedSideBar === btnName && v.catNavOpened)
      }
      id={v["categoriesNav" + id]}
    >
      <BtnDisplayBlock
        btnName={btnName + (searchParams.get("category") ? " *" : "")}
        blockHidden={openedSideBar !== btnName}
        hideBlock={() => openBlock()}
      />

      {openedSideBar === btnName && (
        <Catalog
          curCat={curCat}
          catList={catList}
          setCurCat={setCurCat}
          setCatList={setCatList}
          searchParams={searchParams}
          hideCatalog={() => openBlock()}
          setSearchParams={setSearchParams}
          setCatListDefault={() => setCatList(categories)}
        />
      )}
    </nav>
  );
};

export default CatalogBlock;
