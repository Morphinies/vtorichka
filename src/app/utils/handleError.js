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
    if (rule === "mailFormat") {
      const mailRegExp = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i);
      if (!mailRegExp.test(value)) {
        error.name = "mailFormat";
        error.message = "неверный формат почты";
        break;
      }
    }
    if (rule === "min") {
      if (value.length < 4) {
        error.name = "min";
        error.message = "минимум 4 символа";
        break;
      }
    }
    if (rule === "min") {
      if (value.length < 4) {
        error.name = "min";
        error.message = "минимум 4 символа";
        break;
      }
    }
    if (rule === "equal") {
      if (comparisonValue !== value) {
        error.name = "equal";
        error.message = "пароли не совпадают";
        break;
      }
    }
    if (rule === "indent") {
      const indentExp1 = new RegExp(/^\s+/);
      const indentExp2 = new RegExp(/\s+$/);
      if (indentExp1.test(value) || indentExp2.test(value)) {
        error.name = "indent";
        error.message = "поле не должно начинаться/заканчиваться пробелом";
        break;
      }
    }
  }
  return error;
}
