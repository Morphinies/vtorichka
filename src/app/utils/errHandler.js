export function errHandler(form) {
  const password = form.password || "";
  const errors = {};

  const emptyCheck = (key, value) => {
    if (!value) {
      errors[key] = "заполните поле";
    }
  };

  const symbolsOnRus = (length) => {
    let word;
    const lastSymb = length.toString().at(-1);
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

  const minLenght = (key, value, length) => {
    const symbols = symbolsOnRus(length);
    if (value.length < length) {
      errors[key] = `минимум ${length} ${symbols}`;
    }
  };

  const maxLenght = (key, value, length) => {
    const symbols = symbolsOnRus(length);
    if (value.length > length) {
      errors[key] = `максимум ${length} ${symbols}`;
    }
  };

  const nameChars = (key, value) => {
    const nameRegExp = /^[А-ЯЁA-Z ]+$/i;
    if (!nameRegExp.test(value)) {
      errors[key] = "разрешены русские/английские буквы и пробел";
    }
  };

  const emailChars = (key, value) => {
    const emailRegExp = /^[A-Z][A-Z0-9._-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i;
    if (!emailRegExp.test(value)) {
      errors[key] = "почтовый адрес введён некорректно";
    }
  };

  const pasChars = (key, value) => {
    const pasRegExp = /^[A-Z0-9!._-]+$/i;
    if (!pasRegExp.test(value)) {
      errors[key] = "разрешены английские буквы, цифры и символы(!._-)";
    }
  };

  const repeatPas = (key, value, password) => {
    if (value !== password) {
      errors[key] = "пароли не совпадают";
    }
  };

  for (let formItemKey in form) {
    const key = formItemKey;
    const value = form[key];
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
