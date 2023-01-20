import jordans from "../../img/productImg/jordans.jpg";
import adidas from "../../img/productImg/adidas.jpg";
import newBalance from "../../img/productImg/newBalance.png";

const products = [
  {
    id: 1,
    type: "б/у",
    place: "г. Торопец",
    time: new Date("2022-01-17T13:04:00"),
    name: "джорданы 1",
    category: "кеды",
    price: 2000,
    seller: "Иван",
    photo: jordans,
  },
  {
    id: 2,
    type: "б/у",
    place: "г. Торопец",
    time: new Date("2022-02-17T03:14:00"),
    name: "Кроссовки adidas Ultimashow Кроссовки adidas Ultimashow ",
    category: "кеды",
    price: 2500,
    seller: "Иван",
    photo: adidas,
  },
  {
    id: 3,
    type: "б/у",
    place: "г. Торопец",
    time: new Date("2022-03-17T03:16:00"),
    name: "нью баланс",
    category: "кеды",
    price: 3500,
    seller: "Иван",
    photo: newBalance,
  },
  {
    id: 4,
    type: "б/у",
    place: "г. Торопец",
    time: new Date("2022-04-17T03:17:00"),
    name: "модные адики",
    category: "кеды",
    price: 4500,
    seller: "Иван",
    photo: adidas,
  },
  {
    id: 5,
    type: "б/у",
    place: "г. Торопец",
    time: new Date("2022-05-17T03:18:00"),
    name: "джорданы 1",
    category: "кеды",
    price: 5500,
    seller: "Иван",
    photo: jordans,
  },
  {
    id: 6,
    type: "б/у",
    place: "г. Торопец",
    time: new Date("2022-06-17T03:19:00"),
    name: "джорданы 1",
    category: "кеды",
    price: 6500,
    seller: "Иван",
    photo: jordans,
  },
  {
    id: 7,
    type: "б/у",
    place: "г. Торопец",
    time: new Date("2022-07-17T03:20:00"),
    name: "джорданы 1",
    category: "кеды",
    price: 1500,
    seller: "Иван",
    photo: jordans,
  },
  {
    id: 8,
    type: "б/у",
    place: "г. Торопец",
    time: new Date("2023-01-18T21:01:00"),
    name: "adidas for running top",
    category: "кеды",
    price: 7500,
    seller: "Иван",
    photo: adidas,
  },
  {
    id: 9,
    type: "б/у",
    place: "г. Торопец",
    time: new Date("2022-09-17T03:22:00"),
    name: "джорданы 1",
    category: "кеды",
    price: 8500,
    seller: "Иван",
    photo: jordans,
  },
  {
    id: 10,
    type: "б/у",
    place: "г. Торопец",
    time: new Date("2022-10-17T03:23:00"),
    name: "джорданы 1",
    category: "кеды",
    price: 2700,
    seller: "Иван",
    photo: jordans,
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
