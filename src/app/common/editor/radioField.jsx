import api from "../../api/index";
import s from "./editor.module.css";
import arrowDown from "../../img/arrowDown.svg";
import React, { useEffect, useState } from "react";

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
          className={s.btn + " " + (openList && s.formValue)}
        >
          <p>{formValue}</p>
          <img className={s.arrowDown} src={arrowDown} alt="" />
        </button>
        <ul className={s.list} id={fieldId}>
          {catList &&
            openList &&
            catList.map((catItem) => (
              <li>
                <button type="button" className={s.btn}>
                  <p>{catItem.name}</p>
                  <img className={s.arrowDown} src={arrowDown} alt="" />
                </button>
              </li>
            ))}
        </ul>
      </div>
    </label>
  );
};

export default RadioField;
