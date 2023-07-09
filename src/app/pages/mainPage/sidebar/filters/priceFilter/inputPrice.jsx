import React from "react";
import s from "../filters.module.css";
import BtnClearInput from "../btns/btnClearInput";

const InputPrice = ({ name, value, formData, setFormData }) => {
  // регулярное выражение для представления цены
  const regExpPrice = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const clearFilter = (key) => {
    setFormData((prevState) => {
      delete prevState[key];
      return { ...prevState };
    });
  };

  const changePrice = (input) => {
    const regExpNumber = /\d/g;
    const inputSymbols = input.match(regExpNumber) || [];
    if (!inputSymbols.length) {
      return clearFilter(value);
    }
    const price = regExpPrice(inputSymbols.join(""));
    setFormData((prevState) => {
      return { ...prevState, [value]: price };
    });
  };

  return (
    <div className={s.filterLine}>
      <div className={s.inputContainer}>
        <input
          type="text"
          name={value}
          maxLength={12}
          placeholder={name}
          className={s.priceInput}
          value={formData[value] || ""}
          onChange={(e) => changePrice(e.target.value)}
        />
        <BtnClearInput value={value} clearFilter={clearFilter} />
      </div>
    </div>
  );
};

export default InputPrice;
