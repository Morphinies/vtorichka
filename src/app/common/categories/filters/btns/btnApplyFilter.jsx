import React, { useState } from "react";
import { useRef } from "react";
import s from "../../../categories/categories.module.css";

const BtnApplyFilter = ({
  name,
  applyFilters,
  choosedFilters,
  appliedFilters,
}) => {
  const equalObjects = (obj1, obj2) => {
    return (
      JSON.stringify(Object.entries(obj1).sort()) ===
      JSON.stringify(Object.entries(obj2).sort())
    );
  };

  let timeOut = useRef();
  const [waveStyle, setWaveStyle] = useState("");

  console.log(waveStyle);

  const waveOn = () => {
    // волновой эффект
    if (!!waveStyle) {
      setWaveStyle("");
      setTimeout(() => {
        setWaveStyle(s.wave);
      }, 100);
    } else if (!waveStyle) {
      setWaveStyle(s.wave);
    }

    // таймер выполнения волнового эффекта
    timeOut.current && clearTimeout(timeOut.current);
    timeOut.current = setTimeout(() => {
      setWaveStyle("");
      timeOut.current = undefined;
    }, 2000);
  };

  return (
    <button
      type="button"
      id={s.catBtnApply}
      className={
        s.categoriesBtn +
        (equalObjects(choosedFilters, appliedFilters) ? " disabled " : " ") +
        waveStyle
      }
      onClick={() => {
        if (equalObjects(choosedFilters, appliedFilters)) return;
        applyFilters(choosedFilters);
        waveOn();
      }}
    >
      <p className={s.categoriesBtnText}>{name}</p>
    </button>
  );
};

export default BtnApplyFilter;
