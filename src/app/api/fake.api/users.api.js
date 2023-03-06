import avatar from "../../img/avatar.jpg";

const users = [
  {
    id: 1,
    name: "Иван",
    avatar: avatar,
    password: "Murphy123",
    phone: "+79108309115",
    email: "ilya-novyy@mail.ru",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    name: "Иван",
    avatar: avatar,
    password: "Murphy123",
    phone: "+79108309115",
    email: "ilya-novyy@mail.ru",
    about: "I'm a good seller, I sell bananas!",
  },
  {
    id: 3,
    name: "Иван",
    avatar: avatar,
    password: "Murphy123",
    phone: "+79108309115",
    email: "ilya-novyy@mail.ru",
    about: "I'm a good seller, I sell bananas!",
  },
  {
    id: 4,
    name: "Иван",
    avatar: avatar,
    password: "Murphy123",
    phone: "+79108309115",
    email: "ilya-novyy@mail.ru",
    about: "I'm a good seller, I sell bananas!",
  },
  {
    id: 5,
    name: "Иван",
    avatar: avatar,
    password: "Murphy123",
    phone: "+79108309115",
    email: "ilya-novyy@mail.ru",
    about: "I'm a good seller, I sell bananas!",
  },
  {
    id: 6,
    name: "Иван",
    avatar: avatar,
    password: "Murphy123",
    phone: "+79108309115",
    email: "ilya-novyy@mail.ru",
    about: "I'm a good seller, I sell bananas!",
  },
  {
    id: 7,
    name: "Иван",
    avatar: avatar,
    password: "Murphy123",
    phone: "+79108309115",
    email: "ilya-novyy@mail.ru",
    about: "I'm a good seller, I sell bananas!",
  },
  {
    id: 8,
    name: "Иван",
    avatar: avatar,
    password: "Murphy123",
    phone: "+79108309115",
    email: "ilya-novyy@mail.ru",
    about: "I'm a good seller, I sell bananas!",
  },
  {
    id: 9,
    name: "Иван",
    avatar: avatar,
    password: "Murphy123",
    phone: "+79108309115",
    email: "ilya-novyy@mail.ru",
    about: "I'm a good seller, I sell bananas!",
  },
  {
    id: 10,
    name: "Иван",
    avatar: avatar,
    password: "Murphy123",
    phone: "+79108309115",
    email: "ilya-novyy@mail.ru",
    about: "I'm a good seller, I sell bananas!",
  },
];

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(users));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(JSON.parse(localStorage.getItem("users")));
    }, 1500);
  });

const usersList = { fetchAll };

export default usersList;
