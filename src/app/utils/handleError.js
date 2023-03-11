export default function handleError(value, rules, comparisonValue) {
  const error = {};
  for (let rule of rules) {
    // empty
    if (rule === "empty") {
      if (value === "") {
        error.name = "empty";
        error.message = "заполните поле";
        break;
      }
    }
    // mailFormat
    else if (rule === "mailFormat") {
      const mailRegExp = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i);
      if (!mailRegExp.test(value)) {
        error.name = "mailFormat";
        error.message = "неверный формат почты";
        break;
      }
    }
    // min symbols
    else if (rule === "min") {
      if (value.length < 4) {
        error.name = "min";
        error.message = "минимум 4 символа";
        break;
      }
    }
    // password equals
    else if (rule === "equal") {
      if (comparisonValue !== value) {
        error.name = "equal";
        error.message = "пароли не совпадают";
        break;
      }
    }
    // password equals
    else if (rule === "indent") {
      const indentExp1 = new RegExp(/^\s+/);
      const indentExp2 = new RegExp(/\s+$/);
      if (indentExp1.test(value) || indentExp2.test(value)) {
        error.name = "indent";
        error.message = "поле не должно начинаться/заканчиваться пробелом";
        break;
      }
    } // password requirements
    else if (rule === "password") {
      const minSymbols = 5;
      const pasExp = new RegExp(/[^A-Za-z1-9.!_-]/);
      if (value <= minSymbols) {
        error.name = "password";
        error.message = "пароль должен содержать минимум 5 символов";
        break;
      } else if (pasExp.test(value)) {
        error.name = "password";
        error.message =
          "необходимо использовать латинские буквы, цифры, знаки (.!_-)";
        break;
      }
    }
  }
  return error;
}
