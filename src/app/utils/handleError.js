export default function handleError(value, rules) {
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
  }
  return error;
}
