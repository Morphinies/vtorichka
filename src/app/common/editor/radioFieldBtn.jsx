import React from "react";
import s from "./editor.module.css";
import arrowDown from "../../img/arrowDown.svg";

const RadioFieldBtn = ({ openList, setOpenList, formValue, name }) => {
  return (
    <button
      type="button"
      onClick={() => {
        name === formValue && setOpenList(!openList);
      }}
      className={s.btn + " " + (openList && s.formValue)}
    >
      <p>{name}</p>
      <img className={s.arrowDown} src={arrowDown} alt="" />
    </button>
  );
};

export default RadioFieldBtn;
