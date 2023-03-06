import React, { useState } from "react";
import s from "../editor.module.css";
import CatFieldBtn from "./catFieldBtn";

const CatFieldList = ({ catList, formValue, hideCatalog, setFormValue }) => {
  const [curCat, setCurCat] = useState([]); // current opened category
  const [visableCatList, setVisableCatList] = useState(catList); // current categories list

  return (
    visableCatList && (
      <ul className={s.list}>
        {visableCatList.map((catItem) => (
          <li key={catItem.name}>
            <CatFieldBtn
              curCat={curCat}
              catItem={catItem}
              formValue={formValue}
              setCurCat={setCurCat}
              hideCatalog={hideCatalog}
              setFormValue={setFormValue}
              visableCatList={visableCatList}
              setVisableCatList={setVisableCatList}
              setVisableCatListDefault={() => setVisableCatList(catList)}
            />
          </li>
        ))}
      </ul>
    )
  );
};

export default CatFieldList;
