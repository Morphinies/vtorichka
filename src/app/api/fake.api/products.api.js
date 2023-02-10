import adidas from "../../img/productImg/adidas.jpg";
import jordans from "../../img/productImg/jordans.jpg";
import newBalance from "../../img/productImg/newBalance.png";

const products = [
  {
    id: 1,
    type: "б/у",
    place: "г. Торопец",
    time: new Date(2000, 0, 23, 11, 12, 50, 0),
    name: "джорданы 1",
    category: "кеды",
    price: 2000,
    seller: "Иван",
    photo: [jordans, adidas, newBalance],
  },
  {
    id: 2,
    type: "б/у",
    place: "г. Торопец",
    time: new Date(2000, 1, 23, 11, 12, 50, 0),
    name: "Кроссовки adidas Ultimashow Кроссовки adidas Ultimashow ",
    category: "кеды",
    price: 2500,
    seller: "Иван",
    photo: [jordans, adidas, newBalance],
  },
  {
    id: 3,
    type: "б/у",
    place: "г. Торопец",
    time: new Date(2000, 2, 23, 11, 12, 50, 0),
    name: "нью баланс",
    category: "кеды",
    price: 3500,
    seller: "Иван",
    photo: [jordans, adidas, newBalance],
  },
  {
    id: 4,
    type: "б/у",
    place: "г. Торопец",
    time: new Date(2000, 3, 23, 11, 12, 50, 0),
    name: "модные адики",
    category: "кеды",
    price: 4500,
    seller: "Иван",
    photo: [jordans, adidas, newBalance],
  },
  {
    id: 5,
    type: "б/у",
    place: "г. Торопец",
    time: new Date(2000, 4, 23, 11, 12, 50, 0),
    name: "джорданы 1",
    category: "кеды",
    price: 5500,
    seller: "Иван",
    photo: [jordans, adidas, newBalance],
  },
  {
    id: 6,
    type: "б/у",
    place: "г. Торопец",
    time: new Date(2000, 5, 23, 11, 12, 50, 0),
    name: "джорданы 1",
    category: "кеды",
    price: 6500,
    seller: "Иван",
    photo: [jordans, adidas, newBalance],
  },
  {
    id: 7,
    type: "б/у",
    place: "г. Торопец",
    time: new Date(2000, 6, 23, 11, 12, 50, 0),
    name: "джорданы 1",
    category: "кеды",
    price: 1500,
    seller: "Иван",
    photo: [jordans, adidas, newBalance],
  },
  {
    id: 8,
    type: "б/у",
    place: "г. Торопец",
    time: new Date(2000, 7, 23, 11, 12, 50, 0),
    name: "adidas for running top",
    category: "кеды",
    price: 7500,
    seller: "Иван",
    photo: [jordans, adidas, newBalance],
  },
  {
    id: 9,
    type: "б/у",
    place: "г. Торопец",
    time: new Date(2000, 8, 23, 11, 12, 50, 0),
    name: "джорданы 1",
    category: "кеды",
    price: 8500,
    seller: "Иван",
    photo: [jordans, adidas, newBalance],
  },
  {
    id: 10,
    type: "б/у",
    place: "г. Торопец",
    time: new Date(2000, 9, 23, 11, 12, 50, 0),
    name: "джорданы 1",
    category: "кеды",
    price: 2700,
    seller: "Иван",
    photo: [jordans, adidas, newBalance],
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(products);
    }, 500);
  });

const productsList = { fetchAll };

export default productsList;
