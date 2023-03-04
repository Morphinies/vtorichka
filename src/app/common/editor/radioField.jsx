import api from "../../api/index";
import s from "./editor.module.css";
import React, { useEffect, useState } from "react";
import RadioFieldBtn from "./radioFieldBtn";
import RadioFieldList from "./radioFieldList";

const RadioField = ({ label, fieldId, formValue }) => {
  const [catList, setCatList] = useState();
  const [openList, setOpenList] = useState(false);

  useEffect(() => {
    api.categoryList.fetchAll().then((data) => setCatList(data));
  }, [catList]);

  return (
    <label className={s.label} htmlFor={fieldId}>
      <p className={s.labelText}>{label}:</p>
      <div className={s.radioWrap}>
        <RadioFieldBtn
          name={formValue}
          openList={openList}
          formValue={formValue}
          setOpenList={setOpenList}
        />
        <RadioFieldList
          fieldId={fieldId}
          catList={catList}
          openList={openList}
          formValue={formValue}
          setOpenList={setOpenList}
        />
      </div>
    </label>
  );
};

export default RadioField;
