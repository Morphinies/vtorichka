import avatar from "../../img/avatar.jpg";
import adidas from "../../img/productImg/adidas.jpg";
import jordans from "../../img/productImg/jordans.jpg";
import newBalance from "../../img/productImg/newBalance.png";

const textAbout = `Откуда он появился? Многие думают, что Lorem Ipsum - взятый с потолка
псевдо-латинский набор слов, но это не совсем так. Его корни уходят в
один фрагмент классической латыни 45 года н.э., то есть более двух
тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа
Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem
Ipsum, "consectetur", и занялся его поисками в классической латинской
литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum
в разделах 1.10.32 и 1.10.33 книги "de Finibus Bonorum et Malorum" ("О
пределах добра и зла"), написанной Цицероном в 45 году н.э. Этот трактат
по теории этики был очень популярен в эпоху Возрождения. Первая строка
Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из
строк в разделе 1.10.32 Классический текст Lorem Ipsum, используемый с
XVI века, приведён ниже. `;

const allProducts = [
  {
    id: 1,
    type: "б/у",
    price: 2000,
    category: "кеды",
    name: "джорданы 1",
    place: "г. Торопец",
    textAbout: textAbout,
    photo: [jordans, adidas, newBalance],
    seller: { id: 1, phone: "+79108309115", name: "Иван", avatar: avatar },
    time: new Date("August 19, 1975 23:15:30"),
  },
  {
    id: 2,
    type: "б/у",
    place: "г. Торопец",
    time: new Date(2000, 1, 23, 11, 12, 50, 0),
    name: "Кроссовки adidas Ultimashow Кроссовки adidas Ultimashow ",
    category: "кеды",
    price: 2500,
    seller: { id: 2, phone: "+79108309115", name: "Иван", avatar: avatar },
    textAbout: textAbout,
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
    seller: { id: 3, phone: "+79108309115", name: "Иван", avatar: avatar },
    textAbout: textAbout,
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
    seller: { id: 4, phone: "+79108309115", name: "Иван", avatar: avatar },
    textAbout: textAbout,
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
    seller: { id: 5, phone: "+79108309115", name: "Иван", avatar: avatar },
    textAbout: textAbout,
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
    seller: { id: 6, phone: "+79108309115", name: "Иван", avatar: avatar },
    textAbout: textAbout,
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
    seller: { id: 7, phone: "+79108309115", name: "Иван", avatar: avatar },
    textAbout: textAbout,
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
    seller: { id: 8, phone: "+79108309115", name: "Иван", avatar: avatar },
    textAbout: textAbout,
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
    seller: { id: 9, phone: "+79108309115", name: "Иван", avatar: avatar },
    textAbout: textAbout,
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
    seller: { id: 10, phone: "+79108309115", name: "Иван", avatar: avatar },
    textAbout: textAbout,
    photo: [jordans, adidas, newBalance],
  },
];

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(allProducts));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(JSON.parse(localStorage.getItsem("products")));
    }, 1500);
  });

const fetchById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(
        JSON.parse(localStorage.getItem("products")).findIndex(
          (prod) => prod.id === id
        )
      );
    }, 500);
  });

const products = { fetchAll, fetchById };

export default products;
