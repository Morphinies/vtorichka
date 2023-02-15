import avatar from "../../img/avatar.jpg";

const users = [
  {
    id: 1,
    name: "Иван",
    avatar: avatar,
    password: "Murphy123",
    phone: "+79108309115",
    email: "ilya-novyy@mail.ru",
  },
  {
    id: 2,
    name: "Иван",
    avatar: avatar,
    password: "Murphy123",
    phone: "+79108309115",
    email: "ilya-novyy@mail.ru",
  },
  {
    id: 3,
    name: "Иван",
    avatar: avatar,
    password: "Murphy123",
    phone: "+79108309115",
    email: "ilya-novyy@mail.ru",
  },
  {
    id: 4,
    name: "Иван",
    avatar: avatar,
    password: "Murphy123",
    phone: "+79108309115",
    email: "ilya-novyy@mail.ru",
  },
  {
    id: 5,
    name: "Иван",
    avatar: avatar,
    password: "Murphy123",
    phone: "+79108309115",
    email: "ilya-novyy@mail.ru",
  },
  {
    id: 6,
    name: "Иван",
    avatar: avatar,
    password: "Murphy123",
    phone: "+79108309115",
    email: "ilya-novyy@mail.ru",
  },
  {
    id: 7,
    name: "Иван",
    avatar: avatar,
    password: "Murphy123",
    phone: "+79108309115",
    email: "ilya-novyy@mail.ru",
  },
  {
    id: 8,
    name: "Иван",
    avatar: avatar,
    password: "Murphy123",
    phone: "+79108309115",
    email: "ilya-novyy@mail.ru",
  },
  {
    id: 9,
    name: "Иван",
    avatar: avatar,
    password: "Murphy123",
    phone: "+79108309115",
    email: "ilya-novyy@mail.ru",
  },
  {
    id: 10,
    name: "Иван",
    avatar: avatar,
    password: "Murphy123",
    phone: "+79108309115",
    email: "ilya-novyy@mail.ru",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(users);
    }, 500);
  });

const usersList = { fetchAll };

export default usersList;
