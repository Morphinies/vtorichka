import React from "react";
import s from "../filters.module.css";
// import v from "../../sidebar.module.css";
import BtnClearFilter from "../btns/btnClearFilter";

const InputPrice = ({
  name,
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
      <input
        type="text"
        value={
          (choosedFilters[name] && regExpPrice(choosedFilters[name])) || ""
        }
        maxLength={12}
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
      <BtnClearFilter
        name={name}
        choosedFilters={choosedFilters}
        setChoosedFilters={setChoosedFilters}
      />
    </div>
  );
};

export default InputPrice;
