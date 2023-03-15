import React from "react";
import s from "../../editor.module.css";
import arrowDown from "../../../../../../img/arrowDown.svg";

const CatFieldBtnOpenList = ({ setListOpened, listOpened, name }) => {
  return (
    <button
      type="button"
      onClick={() => {
        setListOpened((prevState) => !prevState);
      }}
      className={s.btn + " " + (listOpened && s.formValue)}
    >
      <p>{name}</p>
      <img className={s.arrowDown} src={arrowDown} alt="" />
    </button>
  );
};

export default CatFieldBtnOpenList;
