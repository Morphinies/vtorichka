import api from "../../../../api";
import s from "../../editor.module.css";
import CatFieldList from "./catFieldList";
import React, { useEffect, useState } from "react";
import CatFieldBtnOpenList from "./catFieldBtnOpenList";

const CatField = ({ label, formValue, setFormValue }) => {
  const [catList, setCatList] = useState();
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
            name={formValue}
            listOpened={listOpened}
            setListOpened={setListOpened}
          />

          {listOpened && (
            <CatFieldList
              catList={catList}
              formValue={formValue}
              setFormValue={setFormValue}
              hideCatalog={() => setListOpened(false)}
            />
          )}
        </div>
      </div>

      <p className={s.errorMessage}></p>
    </div>
  );
};

export default CatField;
