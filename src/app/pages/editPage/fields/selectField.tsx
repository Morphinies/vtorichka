import * as React from "react";
import { useState } from "react";
import s from "../editor.module.css";
import CatFieldBtnOpenList from "./categoryFields/catFieldBtnOpenList";
import { ISelectField, Iprod } from "../../../../types/types";

const SelectField = ({
  list,
  label,
  fieldId,
  formValue,
  setFormValues,
}: ISelectField): JSX.Element => {
  const [listOpened, setListOpened] = useState(false);

  const updateForm = (item: string) => {
    setFormValues((prevState: Iprod) => {
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
            catValue={formValue}
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
