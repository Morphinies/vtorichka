import * as React from "react";
import s from "../editor.module.css";
import { ITextareaField } from "../../../../types/types";

const TextareaField = ({
  error,
  label,
  fieldId,
  maxLength,
  formValue,
  errorsHidden,
  setFormValues,
}: ITextareaField): JSX.Element => {
  // заполнение поля
  const updateField = (value: string): void => {
    value.length <= maxLength &&
      setFormValues((prevState) => {
        return { ...prevState, [fieldId]: value };
      });
  };

  return (
    <div className={s.inputField}>
      <label className={s.label} htmlFor={fieldId}>
        <p className={s.labelText}>{label}:</p>
        <textarea
          id={fieldId}
          name={fieldId}
          value={formValue}
          className={
            s.input +
            " " +
            s.textarea +
            " " +
            (!errorsHidden && error.message ? s.inputError : "")
          }
          onChange={(e) => updateField(e.target.value)}
        ></textarea>
      </label>
      <p className={s.errorMessage}>
        {!errorsHidden && error.message ? error.message + " *" : ""}
      </p>
    </div>
  );
};

export default TextareaField;
