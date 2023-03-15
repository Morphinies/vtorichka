import React, { useState } from "react";
import CatFieldBtnOpenList from "./categoryField/catFieldBtnOpenList";
import s from "../editor.module.css";

const SelectField = ({ list, label, fieldId, formValue, setFormValue }) => {
  const [listOpened, setListOpened] = useState(false);

  const updateForm = (item) => {
    setFormValue((prevState) => {
      return { ...prevState, [fieldId]: item };
    });
    setListOpened(false);
  };

  return (
    <label className={s.label} htmlFor={fieldId}>
      <p className={s.labelText}>{label}:</p>

      <div className={s.radioWrap}>
        <CatFieldBtnOpenList
          name={formValue}
          listOpened={listOpened}
          setListOpened={setListOpened}
        />
        {listOpened && (
          <ul id={fieldId} className={s.list}>
            {list.map((item) => (
              <li key={item} defaultValue={formValue} className={s.selectItem}>
                <button
                  type="button"
                  onClick={() =>
                    item !== formValue ? updateForm(item) : setListOpened(false)
                  }
                  className={s.btn + " " + (item === formValue && s.formValue)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </label>
  );
};

export default SelectField;
