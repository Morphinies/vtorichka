import React from "react";
import s from "../editor.module.css";

const TextField = ({
  type,
  label,
  error,
  fieldId,
  maxLength,
  formValue,
  errorsHidden,
  setFormValues,
}) => {
  // заполнение поля
  let fieldValue;

  const regExpPrice = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const regExpPhone = (number) => {
    const phoneRegEx = /^\+7/;
    const arr = phoneRegEx.test(number)
      ? number.split("").slice(1)
      : number.split("");
    arr[0] = "+7(";
    arr.length >= 4 && arr.splice(4, 0, ")-");
    arr.length >= 8 && arr.splice(8, 0, "-");
    arr.length >= 11 && arr.splice(11, 0, "-");
    return arr.join("");
  };

  switch (fieldId) {
    case "price":
      fieldValue = regExpPrice(formValue);
      break;
    case "phone":
      fieldValue = regExpPhone(formValue);
      break;
    default:
      fieldValue = formValue;
  }

  const updateField = (value) => {
    console.log(value);
    switch (fieldId) {
      case "price":
        setFormValues((prevState) => {
          return {
            ...prevState,
            [fieldId]:
              (value &&
                value.match(/\d/g) &&
                Number(value.match(/\d/g).join(""))) ||
              "",
          };
        });
        break;

      case "phone":
        setFormValues((prevState) => {
          const phoneNumb = value.match(/\d/g).join("");
          console.log(phoneNumb);
          return {
            ...prevState,
            [fieldId]:
              (value &&
                value.match(/\d/g) &&
                "+" + value.match(/\d/g).join("")) ||
              "",
          };
        });
        break;

      default:
        setFormValues((prevState) => {
          return { ...prevState, [fieldId]: value };
        });
    }
  };
  return (
    <div className={s.inputField}>
      <label className={s.label} htmlFor={fieldId}>
        <p className={s.labelText}>{label}:</p>
        <input
          type={type}
          id={fieldId}
          name={fieldId}
          title={fieldId}
          value={fieldValue}
          className={
            s.input + " " + (!errorsHidden && error.message ? s.inputError : "")
          }
          maxLength={maxLength}
          onChange={(e) => updateField(e.target.value)}
        />
      </label>
      <p className={s.errorMessage}>
        {!errorsHidden && error.message ? error.message + " *" : ""}
      </p>
    </div>
  );
};

export default TextField;
