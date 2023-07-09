import s from "../editor.module.css";
import React, { useState } from "react";
import CatFieldBtnOpenList from "./categoryFields/catFieldBtnOpenList";

const SelectField = ({ list, label, fieldId, formValue, setFormValues }) => {
  const [listOpened, setListOpened] = useState(false);

  const updateForm = (item) => {
    setFormValues((prevState) => {
      return { ...prevState, [fieldId]: item };
    });
    setListOpened(false);
  };

  return (
    <div className={s.inputField}>
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
              {list.map(
                (item) =>
                  item !== formValue && (
                    <li
                      key={item}
                      defaultValue={formValue}
                      className={s.selectItem}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          item !== formValue
                            ? updateForm(item)
                            : setListOpened(false)
                        }
                        className={
                          s.btn + " " + (item === formValue && s.formValue)
                        }
                      >
                        {item}
                      </button>
                    </li>
                  )
              )}
            </ul>
          )}
        </div>
      </label>
      <p className={s.errorMessage}></p>
    </div>
  );
};

export default SelectField;
