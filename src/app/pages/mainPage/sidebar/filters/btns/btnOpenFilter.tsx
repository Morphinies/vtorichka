import * as React from "react";
import v from "../../sidebar.module.css";
import { arrowDown } from "../../../../../img/pictures";

interface IBtnOpenFilter {
  name: string;
  action: (v: string) => void;
  isOpen: boolean;
}
const BtnOpenFilter = ({
  name,
  action,
  isOpen,
}: IBtnOpenFilter): JSX.Element => {
  return (
    <button
      type="button"
      onClick={() => action(name)}
      className={v.btnDisplayCat}
      id={isOpen ? v.openCatItem : ""}
    >
      <p className={v.btnDisplayCatText}>{name}</p>
      <img className={v.imgArrowDown} alt="" src={String(arrowDown)} />
    </button>
  );
};

export default BtnOpenFilter;
