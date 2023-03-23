import React from "react";
import s from "../../editor.module.css";

const PasswordField = ({
  error,
  label,
  fieldId,
  maxLength,
  formValue,
  errorsHidden,
  setFormValues,
}) => {
  // заполнение поля
  const updateField = (value) => {
    value.length <= maxLength &&
      setFormValues((prevState) => {
        return { ...prevState, [fieldId]: value };
      });
  };
  return (
    <div className={s.inputField}>
      <label className={s.label} htmlFor={fieldId}>
        <p className={s.labelText}>{label}:</p>
        <input
          type={"password"}
          value={formValue}
          name={fieldId}
          id={fieldId}
          className={
            s.input +
            " " +
            s.password +
            " " +
            (!errorsHidden && error.message ? s.inputError : "")
          }
          onChange={(e) => updateField(e.target.value)}
        />
      </label>
      <p className={s.errorMessage}>
        {!errorsHidden && error.message ? error.message + " *" : ""}
      </p>
    </div>
  );
};

export default PasswordField;
