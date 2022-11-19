const categories = [
  { одежда: ["рубашка", "брюки", "носки"] },
  { обувь: ["кеды", "кросовки"] },
  { электроника: ["компьютер", "телефон"] },
  { украшения: ["кольцо"] },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(categories);
    }, 2000);
  });
const categoryList = { fetchAll };

export default categoryList;
