import { useState } from "react";
import s from "../filters.module.css";
import React, { useEffect } from "react";
import cancel from "../../../../img/cancel.svg";

const BtnClearFilter = ({ formData, clearFilter, id }) => {
  // эффект вращения при нажатии
  const [rotation, setRotation] = useState(false);
  useEffect(() => {
    setTimeout(() => setRotation(false), 1000);
  }, [rotation]);

  const searchIndex = (array) => {
    for (let i in array) {
      if (array[i].id === id) return i;
    }
  };

  return (
    <button
      onClick={() => {
        if (searchIndex(formData)) {
          setRotation(true);
          clearFilter();
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
