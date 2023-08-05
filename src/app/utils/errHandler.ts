import { Ierror } from "../../types/types";

export function errHandler(form: any): Ierror {
    const password = form.password || "";
    const errors: Ierror = {};

    const emptyCheck = (key: string, value: string): void => {
        if (!value) {
            errors[key as keyof Ierror] = {
                name: key,
                message: "заполните поле",
            };
        }
    };

    const symbolsOnRus = (length: number): string => {
        let word;
        const lastSymb: number = +length.toString().at(-1);
        if (length === 1 || (length > 20 && lastSymb === 1)) {
            word = "символ";
        } else if (
            (length > 1 && length < 5) ||
            (length > 20 && lastSymb > 1 && lastSymb < 5)
        ) {
            word = "символа";
        } else {
            word = "символов";
        }
        return word;
    };

    const minLenght = (key: string, value: string, length: number): void => {
        const symbols = symbolsOnRus(length);
        if (value.length < length) {
            errors[key as keyof Ierror] = {
                name: key,
                message: `минимум ${length} ${symbols}`,
            };
        }
    };

    const maxLenght = (key: string, value: string, length: number): void => {
        const symbols = symbolsOnRus(length);
        if (value.length > length) {
            errors[key as keyof Ierror] = {
                name: key,
                message: `максимум ${length} ${symbols}`,
            };
        }
    };

    const nameChars = (key: string, value: string): void => {
        const nameRegExp = /^[А-ЯЁA-Z ]+$/i;
        if (!nameRegExp.test(value)) {
            errors[key as keyof Ierror] = {
                name: key,
                message: `разрешены русские/английские буквы и пробел`,
            };
        }
    };

    const emailChars = (key: string, value: string): void => {
        const emailRegExp = /^[A-Z][A-Z0-9._-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i;
        if (!emailRegExp.test(value)) {
            errors[key as keyof Ierror] = {
                name: key,
                message: `почтовый адрес введён некорректно`,
            };
        }
    };

    const pasChars = (key: string, value: string): void => {
        const pasRegExp = /^[A-Z0-9!._-]+$/i;
        if (!pasRegExp.test(value)) {
            errors[key as keyof Ierror] = {
                name: key,
                message: `разрешены английские буквы, цифры и символы(!._-)`,
            };
        }
    };

    const repeatPas = (key: string, value: string, password: string): void => {
        if (value !== password) {
            errors[key as keyof Ierror] = {
                name: key,
                message: `пароли не совпадают`,
            };
        }
    };

    for (let formItemKey in form) {
        const key: string = formItemKey;
        const value: string = form[key];
        switch (key) {
            case "name":
                nameChars(key, value);
                maxLenght(key, value, 30);
                minLenght(key, value, 4);
                emptyCheck(key, value);
                break;
            case "email":
                emailChars(key, value);
                emptyCheck(key, value);
                break;
            case "login":
                emailChars(key, value);
                emptyCheck(key, value);
                break;
            case "password":
                pasChars(key, value);
                maxLenght(key, value, 20);
                minLenght(key, value, 5);
                emptyCheck(key, value);
                break;
            case "rePassword":
                repeatPas(key, value, password);
                emptyCheck(key, value);
                break;
            default:
                console.log("value is undefined");
        }
    }

    return errors;
}
