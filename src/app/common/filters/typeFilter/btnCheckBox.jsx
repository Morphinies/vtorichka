import React from "react";
import checked from "../../../img/checked.svg";
import s from "../../categories/categories.module.css";

const BtnCheckBox = ({ setChoosedFilters, choosedFilters, label, name }) => {
  return (
    <button
      onClick={() => {
        setChoosedFilters((prevState) => {
          return { ...prevState, [name]: !prevState[name] };
        });
      }}
      type="button"
      className={s.inputContainer + " " + s.inputCheckBox}
    >
      <label className={s.labelCheckBox} htmlFor="name">
        {label}
      </label>
      <input
        id={s.name}
        type="checkbox"
        onChange={() => {}}
        className={s.checkBoxHidden}
        checked={setChoosedFilters[name]}
      />
      <div className={s.checkBox}>
        {choosedFilters[name] && <img alt="checked" src={checked} />}
      </div>
    </button>
  );
};

export default BtnCheckBox;

// setCheckedNumb((prevState) => prevState - 1);
