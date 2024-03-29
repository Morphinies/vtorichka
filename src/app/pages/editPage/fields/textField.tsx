import * as React from "react";
import s from "../editor.module.css";
import { ITextField } from "../../../../types/types";

const TextField = ({
    type,
    label,
    error,
    fieldId,
    maxLength,
    formValue,
    errorsHidden,
    setFormValues,
}: ITextField): JSX.Element => {
    const errors: boolean = Boolean(!errorsHidden && error && error.message);
    let fieldValue: string;

    // регулярка оформления ввода цены товара
    const regExpPrice = (number: string) => {
        return number.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    // регулярка оформления ввода тел. номера
    const regExpPhone = (number: string) => {
        const arr = number.split("").slice(1);
        arr.length > 0 && arr.splice(0, 1, "+7");
        arr.length > 1 && arr.splice(1, 0, "(");
        arr.length > 5 && arr.splice(5, 0, ")-");
        arr.length > 9 && arr.splice(9, 0, "-");
        arr.length > 12 && arr.splice(12, 0, "-");
        return arr.join("");
    };

    // оформление отображаемых данных формы в зависимости от поля
    switch (fieldId) {
        case "price":
            fieldValue = regExpPrice(String(formValue));
            break;
        case "phone":
            fieldValue = regExpPhone(formValue);
            break;
        default:
            fieldValue = formValue;
    }

    // контролируемый input
    const updateField = (value: string) => {
        switch (fieldId) {
            case "price":
                setFormValues((prevState) => {
                    return {
                        ...prevState,
                        [fieldId]:
                            (value &&
                                value.match(/\d/g) &&
                                value.match(/\d/g).join("")) ||
                            "",
                    };
                });
                break;

            case "phone":
                setFormValues((prevState) => {
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
            <div className={s.label}>
                <p className={s.labelText}>{label}:</p>
                <input
                    type={type}
                    id={fieldId}
                    name={fieldId}
                    title={fieldId}
                    value={fieldValue}
                    className={s.input + " " + (errors ? s.inputError : "")}
                    maxLength={maxLength}
                    onChange={(e) => updateField(e.target.value)}
                />
            </div>
            <p className={s.errorMessage}>
                {errors ? error.message + " *" : ""}
            </p>
        </div>
    );
};

export default TextField;
