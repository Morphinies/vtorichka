import s from "../auth.module.css";
import React, { useRef, useState } from "react";

const TextField = ({
  type,
  error,
  label,
  fieldName,
  formValue,
  setFormValues,
}) => {
  // заполнение поля
  const [handling, setHandling] = useState(true);
  const fieldIsValid = !error || !error.message;
  const timer = useRef();

  const updateField = (enterValue) => {
    const regExp = new RegExp(/[A-Z1-9_%+@.-]/gi);
    const matchArr = enterValue.match(regExp);
    if (matchArr || enterValue === "") {
      clearTimeout(timer.current);
      setHandling(true);
      const resValue = enterValue ? matchArr.join("") : "";
      enterValue.length <= 30 &&
        setFormValues((prevState) => {
          return { ...prevState, [fieldName]: resValue };
        });
      timer.current = setTimeout(() => {
        setHandling(false);
      }, 1000);
    }
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
          maxLength={30}
          name={fieldName}
          value={formValue}
          onChange={(e) => updateField(e.target.value)}
          className={
            s.input +
            " " +
            (!fieldIsValid && !handling && s.inputError) +
            " " +
            (fieldIsValid && !handling && s.inputSuccess)
          }
        />
      </p>
      <p className={s.errorMessage}>
        {!fieldIsValid && !handling && error.message + " *"}
      </p>
    </div>
  );
};

export default TextField;
