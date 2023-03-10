import s from "../auth.module.css";
import React from "react";

const TextField = ({
  type,
  error,
  label,
  maxLength,
  fieldName,
  formValue,
  errorsHidden,
  setFormValues,
  setErrorsHidden,
}) => {
  // обновление поля
  const updateField = (enterValue) => {
    setErrorsHidden(true);
    enterValue.length <= maxLength &&
      setFormValues((prevState) => {
        return { ...prevState, [fieldName]: enterValue };
      });
  };

  return (
    <div>
      <p className={s.inputLine}>
        <label className={s.label} htmlFor={fieldName}>
          {label}:
        </label>
        <input
          type={type}
          id={fieldName}
          name={fieldName}
          value={formValue}
          maxLength={maxLength}
          onChange={(e) => updateField(e.target.value)}
          className={
            s.input +
            " " +
            (!errorsHidden && error.message && s.inputError) +
            " " +
            (!errorsHidden && !error.message && s.inputSuccess)
          }
        />
      </p>
      <p className={s.errorMessage}>
        {!errorsHidden && error.message ? error.message + " *" : ""}
      </p>
    </div>
  );
};

export default TextField;
