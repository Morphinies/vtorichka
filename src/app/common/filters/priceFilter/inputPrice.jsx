import React from "react";
import BtnClearFilter from "../btns/btnClearFilter";
import s from "../../categories/categories.module.css";

const InputPrice = ({
  name,
  label,
  placeholder,
  choosedFilters,
  setChoosedFilters,
}) => {
  let regExpNumber = /\d/g;

  const regExpPrice = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <div className={s.inputContainer}>
      <label htmlFor={name} className={s.inputLabel}>
        {label}
      </label>

      <input
        type="text"
        value={
          (choosedFilters[name] && regExpPrice(choosedFilters[name])) || ""
        }
        maxLength={10}
        id={s.name}
        placeholder={placeholder}
        className={s.priceInput}
        onChange={(e) => {
          let numb = e.target.value;
          let addNumb = e.target.value.at(-1);
          numb === "" &&
            setChoosedFilters((prevState) => {
              delete prevState[name];
              return { ...prevState };
            });

          numb &&
            addNumb.match(regExpNumber) &&
            setChoosedFilters((prevState) => {
              return {
                ...prevState,
                [name]: numb.match(regExpNumber).join(""),
              };
            });
        }}
      />
      <BtnClearFilter setChoosedFilters={setChoosedFilters} name={name} />
    </div>
  );
};

export default InputPrice;
