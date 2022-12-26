const filters = [
  {
    name: "тип",
    value: [
      { name: "б/у", value: true },
      { name: "новое", value: true },
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
