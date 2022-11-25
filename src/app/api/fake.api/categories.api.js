const categories = [
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
      resolve(categories);
    }, 500);
  });
const categoryList = { fetchAll };

export default categoryList;
