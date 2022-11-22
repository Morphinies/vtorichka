const categories = [
  {
    name: "одежда",
    values: [
      { name: "рубашка", values: [{ name: "в клеточку" }] },
      { name: "брюки" },
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
    }, 2000);
  });
const categoryList = { fetchAll };

export default categoryList;
