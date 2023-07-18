import * as React from "react";
import s from "../filters.module.css";
import v from "../../sidebar.module.css";
import { checked } from "../../../../../img/pictures";
import { IfiltersForm } from "../../../../../../types/types";

interface ICheckBox {
  tick: (v: string) => void;
  name: string;
  formData: IfiltersForm;
}
const CheckBox = ({ tick, name, formData }: ICheckBox): JSX.Element => {
  const isActive = formData.type === name || !formData.type;
  return (
    <div className={s.filterLine}>
      <button
        type="button"
        id={s.checkBoxContainer}
        onClick={() => tick(name)}
        className={s.inputContainer + " " + s.checkBoxContainer}
      >
        <p className={v.btnDisplayCatText + " " + s.labelCheckBox}>{name}</p>
        <div className={s.checkBox}>
          <img
            alt={name}
            src={String(checked)}
            className={s.imgCheckBox + " " + (isActive ? "" : s.imgHidden)}
          />
        </div>
      </button>
    </div>
  );
};

export default CheckBox;
