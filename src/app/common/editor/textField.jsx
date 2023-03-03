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

  const updateField = (enterValue) => {
    setFormValues(enterValue);
  };

  return (
    <label className={s.label} htmlFor={fieldId}>
      <p className={s.labelText}>{label}:</p>
      <input
        type={type}
        id={fieldId}
        name={fieldId}
        value={fieldId !== "price" && formValue} //!!!!!
        className={s.input}
        maxLength={maxLength}
        onChange={(e) => updateField(e.target.value)}
      />
    </label>
  );
};

export default TextField;
