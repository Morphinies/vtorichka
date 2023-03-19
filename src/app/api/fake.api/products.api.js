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
    sellerId: 1,
    category: "кеды",
    name: "джорданы 1",
    place: "г. Торопец",
    textAbout: textAbout,
    photo: [jordans, adidas, newBalance],
    time: new Date("August 19, 1975 23:15:30"),
  },
  {
    id: 2,
    type: "б/у",
    price: 2500,
    sellerId: 2,
    place: "г. Торопец",
    name: "Кроссовки adidas Ultimashow Кроссовки adidas Ultimashow ",
    category: "кеды",
    textAbout: textAbout,
    photo: [jordans, adidas, newBalance],
    time: new Date(2000, 1, 23, 11, 12, 50, 0),
  },
  {
    id: 3,
    type: "б/у",
    price: 2000,
    sellerId: 1,
    category: "кеды",
    name: "джорданы 1",
    place: "г. Торопец",
    textAbout: textAbout,
    photo: [jordans, adidas, newBalance],
    time: new Date("August 19, 1975 23:15:30"),
  },
  {
    id: 4,
    type: "б/у",
    price: 2500,
    sellerId: 2,
    place: "г. Торопец",
    name: "Кроссовки adidas Ultimashow Кроссовки adidas Ultimashow ",
    category: "кеды",
    textAbout: textAbout,
    photo: [jordans, adidas, newBalance],
    time: new Date(2000, 1, 23, 11, 12, 50, 0),
  },
  {
    id: 5,
    type: "б/у",
    price: 2000,
    sellerId: 1,
    category: "кеды",
    name: "джорданы 1",
    place: "г. Торопец",
    textAbout: textAbout,
    photo: [jordans, adidas, newBalance],
    time: new Date("August 19, 1975 23:15:30"),
  },
  {
    id: 6,
    type: "б/у",
    price: 2500,
    sellerId: 2,
    place: "г. Торопец",
    name: "Кроссовки adidas Ultimashow Кроссовки adidas Ultimashow ",
    category: "кеды",
    textAbout: textAbout,
    photo: [jordans, adidas, newBalance],
    time: new Date(2000, 1, 23, 11, 12, 50, 0),
  },
  {
    id: 7,
    type: "б/у",
    price: 2000,
    sellerId: 1,
    category: "кеды",
    name: "джорданы 1",
    place: "г. Торопец",
    textAbout: textAbout,
    photo: [jordans, adidas, newBalance],
    time: new Date("August 19, 1975 23:15:30"),
  },
  {
    id: 8,
    type: "б/у",
    price: 2500,
    sellerId: 2,
    place: "г. Торопец",
    name: "Кроссовки adidas Ultimashow Кроссовки adidas Ultimashow ",
    category: "кеды",
    textAbout: textAbout,
    photo: [jordans, adidas, newBalance],
    time: new Date(2000, 1, 23, 11, 12, 50, 0),
  },
  {
    id: 9,
    type: "б/у",
    sellerId: 2,
    place: "г. Торопец",
    time: new Date(2000, 8, 23, 11, 12, 50, 0),
    name: "джорданы 1",
    category: "кеды",
    price: 8500,
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
    sellerId: 2,
    textAbout: textAbout,
    photo: [jordans, adidas, newBalance],
  },
  {
    id: 11,
    type: "б/у",
    price: 2000,
    sellerId: 1,
    category: "кеды",
    name: "джорданы 1",
    place: "г. Торопец",
    textAbout: textAbout,
    photo: [jordans, adidas, newBalance],
    time: new Date("August 19, 1975 23:15:30"),
  },
  {
    id: 12,
    type: "б/у",
    price: 2500,
    sellerId: 2,
    place: "г. Торопец",
    name: "Кроссовки adidas Ultimashow Кроссовки adidas Ultimashow ",
    category: "кеды",
    textAbout: textAbout,
    photo: [jordans, adidas, newBalance],
    time: new Date(2000, 1, 23, 11, 12, 50, 0),
  },
];

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(allProducts));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      const prodsOnLS = JSON.parse(localStorage.getItem("products"));
      resolve(prodsOnLS);
    }, 500);
  });

const fetchById = (id) =>
  new Promise((resolve, reject) => {
    window.setTimeout(() => {
      const prodsOnLS = JSON.parse(localStorage.getItem("products"));
      const findedProd = prodsOnLS.find(
        (prod) => Number(prod.id) === Number(id)
      );
      findedProd
        ? resolve(findedProd)
        : reject(`Товара под номером ${id} не найдено :/`);
    }, 500);
  });

const fetchBySeller = (id) =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      const prodsOnLS = JSON.parse(localStorage.getItem("products"));
      resolve(prodsOnLS.filter((prod) => prod.sellerId === id));
    }, 500);
  });

const fetchByName = (name, maxLength) =>
  new Promise((resolve) => {
    const prodsOnLS = JSON.parse(localStorage.getItem("products"));
    const regExp = new RegExp(`${name}`, "gi");
    const filtredProds = prodsOnLS.filter((prod) => regExp.test(prod.name));
    window.setTimeout(() => {
      resolve(
        name
          ? maxLength
            ? filtredProds.slice(0, maxLength)
            : filtredProds
          : []
      );
    }, 500);
  });

const editProd = (prod) =>
  new Promise((resolve, reject) => {
    window.setTimeout(() => {
      const prodsOnLS = JSON.parse(localStorage.getItem("products"));
      const index = prodsOnLS.findIndex((prodOnLs) => prodOnLs.id === prod.id);
      if (index) {
        const editedProds = prodsOnLS;
        editedProds[index] = prod;
        localStorage.setItem("products", JSON.stringify(editedProds));
        resolve("Изменения сохранены!");
      } else {
        reject("что-то пошло не так :/");
      }
    }, 1000);
  });

const isMyProd = (id) =>
  new Promise((resolve, reject) => {
    window.setTimeout(() => {
      const userOnLS = JSON.parse(localStorage.getItem("user"));
      if (userOnLS && userOnLS.products.includes(id)) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  });

const products = {
  fetchAll,
  fetchById,
  fetchBySeller,
  fetchByName,
  editProd,
  isMyProd,
};

export default products;
