import React from "react";
import s from "./editor.module.css";

const TextField = ({
  type,
  label,
  fieldId,
  maxLength,
  formValue,
  setFormValues,
}) => {
  // заполнение поля

  const regExpPrice = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const fieldValue = fieldId === "price" ? regExpPrice(formValue) : formValue;

  const updateField = (value) => {
    // price field
    fieldId === "price" &&
      setFormValues((prevState) => {
        return {
          ...prevState,
          [fieldId]:
            (value && value.match(/\d/g) && value.match(/\d/g).join("")) || "",
        };
      });

    // text field
    fieldId !== "price" &&
      setFormValues((prevState) => {
        return { ...prevState, [fieldId]: value };
      });
  };

  return (
    <label className={s.label} htmlFor={fieldId}>
      <p className={s.labelText}>{label}:</p>
      <input
        type={type}
        id={fieldId}
        name={fieldId}
        value={fieldValue}
        className={s.input}
        maxLength={maxLength}
        onChange={(e) => updateField(e.target.value)}
      />
    </label>
  );
};

export default TextField;
