const filters = [
  {
    name: "тип",
    value: [
      { name: "новое", value: true },
      { name: "б/у", value: true },
    ],
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(filters);
    }, 500);
  });
const filtersList = { fetchAll };

export default filtersList;
