import avatar from "../../img/avatar.jpg";

const usersList = [
  {
    id: 1,
    name: "Илья",
    avatar: avatar,
    password: "ilya123",
    phone: "+79108309115",
    email: "ilya@mail.ru",
    about: "I'm a good seller, I sell bananas!",
    products: [],
    favorites: [],
  },
  {
    id: 2,
    name: "Иван",
    avatar: avatar,
    password: "Murphy123",
    phone: "",
    email: "ivan@mail.ru",
    about: "I'm a good seller, I sell bananas!",
    products: [],
    favorites: [],
  },
];

// localStorage.clear();

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(usersList));
}

const usersOnLS = JSON.parse(localStorage.getItem("users"));

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(usersOnLS);
    }, 1500);
  });

const fetchById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(usersOnLS.find((user) => user.id === id));
    }, 100);
  });

const login = ({ login, password }) =>
  new Promise((resolve, reject) => {
    const user = usersOnLS.find(
      (userOnLs) => userOnLs.email === login && userOnLs.password === password
    );
    window.setTimeout(() => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        resolve("Добро пожаловать, " + user.name + "!");
      } else {
        reject("Логин или пароль не верен!");
      }
    }, 1000);
  });

const signup = ({ name, email, password }) =>
  new Promise((resolve, reject) => {
    const userExists = !!usersOnLS.find((userOnLS) => userOnLS.email === email);
    const newUser = {
      id: usersOnLS.length,
      name: name,
      avatar: avatar,
      email: email,
      password: password,
      phone: "+79108309115",
      about: "I'm a good seller, I sell bananas!",
      favorites: [],
    };
    window.setTimeout(() => {
      if (!userExists) {
        usersOnLS.push(newUser);
        localStorage.setItem("users", JSON.stringify(usersOnLS));
        localStorage.setItem("user", JSON.stringify(newUser));
        resolve("Регистрация прошла успешно!");
      } else {
        reject("Пользователь с такой почтой уже зарегистрирован");
      }
    }, 1000);
  });

const users = { fetchAll, login, signup, fetchById };

export default users;
