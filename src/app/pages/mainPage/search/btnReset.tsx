import * as React from "react";
import s from "./search.module.css";

interface IBtnReset {
  resetSearch: () => void;
}
const BtnReset = ({ resetSearch }: IBtnReset): JSX.Element => {
  return (
    <button type="button" onClick={() => resetSearch()} className={s.btnReset}>
      сброс
    </button>
  );
};

export default BtnReset;
