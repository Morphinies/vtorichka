import React, { useEffect, useState } from "react";
import api from "../../api/index";
import s from "./editor.module.css";

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
        <button
          type="button"
          onClick={() => {
            setOpenList(!openList);
          }}
          className={s.btn + " " + s.formValue}
        >
          {formValue}
        </button>
        <ul className={s.list} id={fieldId}>
          {catList &&
            openList &&
            catList.map((catItem) => (
              <li>
                <button type="button" className={s.btn}>
                  {catItem.name}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </label>
  );
};

export default RadioField;
