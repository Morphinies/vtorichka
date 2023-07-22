import * as React from "react";
import api from "../../../../api";
import s from "../../editor.module.css";
import CatFieldList from "./catFieldList";
import { useEffect, useState } from "react";
import CatFieldBtnOpenList from "./catFieldBtnOpenList";
import { ICatField, IcatItem } from "../../../../../types/types";

const CatField = ({
  label,
  error,
  catValue,
  errorsHidden,
  setFormValues,
}: ICatField): JSX.Element => {
  const [catList, setCatList] = useState<IcatItem[]>();
  const [listOpened, setListOpened] = useState(false);

  useEffect(() => {
    api.categoryList.fetchAll().then((data) => setCatList(data));
  }, [catList]);

  return (
    <div className={s.inputField}>
      <div className={s.label}>
        <p className={s.labelText}>{label}:</p>
        <div className={s.radioWrap}>
          <CatFieldBtnOpenList
            catValue={catValue}
            listOpened={listOpened}
            setListOpened={setListOpened}
          />
          {listOpened && (
            <CatFieldList
              catList={catList}
              formValue={catValue}
              setFormValues={setFormValues}
              hideCatalog={() => setListOpened(false)}
            />
          )}
        </div>
      </div>

      <p className={s.errorMessage}>{!errorsHidden && error}</p>
    </div>
  );
};

export default CatField;
