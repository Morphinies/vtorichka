import api from "../../../api";
import Catalog from "./catalog";
import { useEffect } from "react";
import v from "../sidebar.module.css";
import React, { useState } from "react";
import BtnDisplayBlock from "../btnDisplayBlock";

const CatalogBlock = ({
  id,
  btnName,
  openedSideBar,
  defaultCategory,
  conditionsApplied,
  changeOpenedSideBar,
  setConditionsApplied,
}) => {
  const [curCat, setCurCat] = useState([]);
  const [catList, setCatList] = useState();
  const [categories, setCategories] = useState([]);

  const equalObjects = (obj1, obj2) => {
    return (
      JSON.stringify(Object.entries(obj1).sort()) ===
      JSON.stringify(Object.entries(obj2).sort())
    );
  };

  useEffect(() => {
    api.categoryList.fetchAll().then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    setCatList(categories);
  }, [categories]);

  return (
    <nav
      className={
        v.categoriesNav + " " + (openedSideBar === btnName && v.catNavOpened)
      }
      id={v["categoriesNav" + id]}
    >
      <BtnDisplayBlock
        btnName={
          btnName +
          (equalObjects(conditionsApplied.category, defaultCategory)
            ? ""
            : " *")
        }
        blockHidden={openedSideBar !== btnName}
        conditionsApplied={conditionsApplied}
        hideBlock={() =>
          changeOpenedSideBar(openedSideBar === btnName ? "" : btnName)
        }
      />

      {openedSideBar === btnName && (
        <Catalog
          curCat={curCat}
          catList={catList}
          setCurCat={setCurCat}
          setCatList={setCatList}
          conditionsApplied={conditionsApplied}
          setConditionsApplied={setConditionsApplied}
          setCatListDefault={() => setCatList(categories)}
          hideCatalog={() =>
            changeOpenedSideBar(openedSideBar === btnName ? "" : btnName)
          }
        />
      )}
    </nav>
  );
};

export default CatalogBlock;
