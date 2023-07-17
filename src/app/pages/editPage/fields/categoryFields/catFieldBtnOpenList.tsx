import * as React from "react";
import s from "../../editor.module.css";
import arrowDown from "../../../../img/arrowDown.svg";

interface ICatFieldBtnOpenList {
  setListOpened: (v: (t: boolean) => boolean) => void;
  listOpened: boolean;
  name: string;
}
const CatFieldBtnOpenList = ({
  setListOpened,
  listOpened,
  name,
}: ICatFieldBtnOpenList) => {
  return (
    <button
      type="button"
      onClick={() => {
        setListOpened((prevState) => !prevState);
      }}
      className={s.btn + " " + (listOpened && s.formValue)}
    >
      <p>{name}</p>
      <img className={s.arrowDown} src={String(arrowDown)} alt="" />
    </button>
  );
};

export default CatFieldBtnOpenList;
