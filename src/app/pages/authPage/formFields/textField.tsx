import * as React from "react";
import s from "../auth.module.css";
import { ITextField, Iform } from "../../../../types/types";

const TextField = ({
  type,
  label,
  error,
  formName,
  clearErr,
  maxLength,
  formValue,
  setFormValues,
}: ITextField): JSX.Element => {
  // обновление поля
  const updateField = (value: string) => {
    clearErr(formName);
    setFormValues((prevState: Iform) => ({ ...prevState, [formName]: value }));
  };

  return (
    <div>
      <p className={s.inputLine}>
        <label className={s.label} htmlFor={formName}>
          {label}:
        </label>
        <input
          type={type}
          name={formName}
          maxLength={maxLength}
          value={formValue ? formValue : ""}
          onChange={(e) => updateField(e.target.value)}
          className={s.input + " " + (error && s.inputError)}
        />
      </p>
      <p className={s.errorMessage}>{error && error + " *"}</p>
    </div>
  );
};

export default TextField;
