import { useState } from "react";
import s from "../filters.module.css";
import React, { useEffect } from "react";
import cancel from "../../../../img/cancel.svg";

const BtnClearFilter = ({ setChoosedFilters, choosedFilters, name }) => {
  // эффект вращения при нажатии
  const [rotation, setRotation] = useState(false);
  useEffect(() => {
    setTimeout(() => setRotation(false), 1000);
  }, [rotation]);

  return (
    <button
      onClick={() => {
        if (choosedFilters[name]) {
          setRotation(true);
          setChoosedFilters((prevState) => {
            delete prevState[name];
            return { ...prevState };
          });
        }
      }}
      type="button"
      className={"btn " + s.btnClear}
    >
      <img
        className={s.imgBtnClear + " " + (rotation ? s.rotation : "")}
        src={cancel}
        alt="очистить"
      />
    </button>
  );
};

export default BtnClearFilter;
