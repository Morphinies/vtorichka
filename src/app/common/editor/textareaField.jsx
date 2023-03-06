import React from "react";
import s from "./editor.module.css";

const TextareaField = ({
  label,
  fieldId,
  maxLength,
  formValue,
  setFormValues,
}) => {
  // заполнение поля

  const updateField = (value) => {
    setFormValues((prevState) => {
      return { ...prevState, [fieldId]: value };
    });
  };

  return (
    <label className={s.label} htmlFor={fieldId}>
      <p className={s.labelText}>{label}:</p>
      <textarea
        id={fieldId}
        name={fieldId}
        value={formValue}
        className={s.input + " " + s.textarea}
        onChange={(e) => updateField(e.target.value)}
      ></textarea>
    </label>
  );
};

export default TextareaField;
