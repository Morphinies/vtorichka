import React from "react";
import s from "../filters.module.css";
import v from "../../sidebar.module.css";
import { checked } from "../../../../../img/pictures";

const CheckBox = ({ tick, name, formData }) => {
  const isActive = formData.type === name || !formData.type;

  return (
    <div className={s.filterLine}>
      <button
        type="button"
        id={s.checkBoxContainer}
        onClick={() => tick(name)}
        className={s.inputContainer + " " + s.checkBoxContainer}
      >
        <p
          htmlFor="name"
          className={v.btnDisplayCatText + " " + s.labelCheckBox}
        >
          {name}
        </p>
        <div className={s.checkBox}>
          <img
            alt={name}
            src={checked}
            className={s.imgCheckBox + " " + (isActive ? "" : s.imgHidden)}
          />
        </div>
      </button>
    </div>
  );
};

export default CheckBox;
