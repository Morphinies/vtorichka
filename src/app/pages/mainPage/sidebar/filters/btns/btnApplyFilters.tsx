import * as React from "react";
import s from "../filters.module.css";

interface IBtnApplyFilters {
  action: () => void;
  img: string;
  name: string;
}
const BtnApplyFilters = ({
  action,
  img,
  name,
}: IBtnApplyFilters): JSX.Element => {
  return (
    <button
      type="button"
      onClick={() => action()}
      className={"btn " + s.btnApplyFilters}
    >
      <img src={img} alt={name} title={name} className={s.btnApplyFiltersImg} />
    </button>
  );
};

export default BtnApplyFilters;
