import api from "../../../api";
import Catalog from "./catalog";
import { useEffect } from "react";
import v from "../sidebar.module.css";
import React, { useState } from "react";
import BtnDisplayBlock from "../btnDisplayBlock";

const CatalogBlock = ({
  id,
  btnName,
  conditionsApplied,
  setConditionsApplied,
}) => {
  const [curCat, setCurCat] = useState([]);
  const [catList, setCatList] = useState();
  const [catalogHidden, setCatalogHidden] = useState(true);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    api.categoryList.fetchAll().then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    setCatList(categories);
  }, [categories]);

  return (
    <nav
      className={v.categoriesNav + " " + (!catalogHidden && v.catNavOpened)}
      id={v["categoriesNav" + id]}
    >
      <BtnDisplayBlock
        btnName={btnName}
        blockHidden={catalogHidden}
        hideBlock={() => setCatalogHidden(!catalogHidden)}
      />

      {!catalogHidden && (
        <Catalog
          curCat={curCat}
          catList={catList}
          setCurCat={setCurCat}
          setCatList={setCatList}
          conditionsApplied={conditionsApplied}
          setConditionsApplied={setConditionsApplied}
          setCatListDefault={() => setCatList(categories)}
        />
      )}
    </nav>
  );
};

export default CatalogBlock;
