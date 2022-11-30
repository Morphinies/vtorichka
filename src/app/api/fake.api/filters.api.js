const filters = [
  {
    name: "одежда",
    values: [
      {
        name: "рубашка",
        values: [{ name: "в клеточку", values: [{ name: "тряпочная" }] }],
      },
      {
        name: "брюки",
        values: [
          { name: "чёрные", values: [{ name: "джинсовые" }] },
          { name: "белые" },
        ],
      },
      { name: "носки" },
    ],
  },
  { name: "обувь", values: [{ name: "кеды" }, { name: "кросовки" }] },
  {
    name: "электроника",
    values: [{ name: "компьютер" }, { name: "телефон" }],
  },
  { name: "украшения", values: [{ name: "кольцо" }] },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(filters);
    }, 500);
  });
const filtersList = { fetchAll };

export default filtersList;
