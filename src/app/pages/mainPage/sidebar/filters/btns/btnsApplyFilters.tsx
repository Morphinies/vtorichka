import * as React from "react";
import s from "../filters.module.css";
import BtnApplyFilters from "./btnApplyFilters";
import { apply } from "../../../../../img/pictures";
import { reset } from "../../../../../img/pictures";

interface IBtnsApplyFilters {
  applyFilters: () => void;
  clearFilters: () => void;
}
const BtnsApplyFilters = ({
  applyFilters,
  clearFilters,
}: IBtnsApplyFilters): JSX.Element => {
  return (
    <div className={s.btnsApplyFilters}>
      <BtnApplyFilters action={applyFilters} img={apply} name="применить" />
      <BtnApplyFilters action={clearFilters} img={reset} name="сбросить" />
    </div>
  );
};

export default BtnsApplyFilters;
