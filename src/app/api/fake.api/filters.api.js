const filters = [{ name: "тип", values: [{ name: "Б/У" }, { name: "новое" }] }];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(filters);
    }, 500);
  });
const filtersList = { fetchAll };

export default filtersList;
