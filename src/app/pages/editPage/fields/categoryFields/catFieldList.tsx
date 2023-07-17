import * as React from "react";
import { useState } from "react";
import s from "../../editor.module.css";
import CatFieldBtn from "./catFieldBtn";
import { ICatFieldList, IcatItem } from "../../../../../types/types";

const CatFieldList = ({
  catList,
  formValue,
  hideCatalog,
  setFormValues,
}: ICatFieldList) => {
  const [curCat, setCurCat] = useState<IcatItem[]>([]); // current opened category
  const [visableCatList, setVisableCatList] = useState<IcatItem[]>(catList); // current categories list

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
              setFormValues={setFormValues}
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
