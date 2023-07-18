import * as React from "react";
import s from "../filters.module.css";
import BtnClearInput from "../btns/btnClearInput";
import { IfiltersForm } from "../../../../../../types/types";

interface IPriceFilter {
  name: string;
  value: string;
  formData: IfiltersForm;
  setFormData: (v: (t: IfiltersForm) => IfiltersForm) => void;
}
const InputPrice = ({
  name,
  value,
  formData,
  setFormData,
}: IPriceFilter): JSX.Element => {
  // регулярное выражение для представления цены
  const regExpPrice = (number: string) => {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const clearFilter = (key: string) => {
    setFormData((prevState: IfiltersForm) => {
      delete prevState[key as keyof IfiltersForm];
      return { ...prevState };
    });
  };

  const changePrice = (input: string) => {
    const regExpNumber = /\d/g;
    const inputSymbols: string[] = input.match(regExpNumber) || [];
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
          value={formData[value as keyof IfiltersForm] || ""}
          onChange={(e) => changePrice(e.target.value)}
        />
        <BtnClearInput value={value} clearFilter={clearFilter} />
      </div>
    </div>
  );
};

export default InputPrice;
