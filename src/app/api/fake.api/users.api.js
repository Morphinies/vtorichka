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
    products: [1, 3, 5, 7, 11],
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
    products: [2, 4, 6, 8, 9, 10],
    favorites: [],
  },
];

// localStorage.clear();

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(usersList));
}

// const usersOnLS = JSON.parse(localStorage.getItem("users"));

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      const usersOnLS = JSON.parse(localStorage.getItem("users"));
      resolve(usersOnLS);
    }, 1500);
  });

const fetchById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      const usersOnLS = JSON.parse(localStorage.getItem("users"));
      resolve(usersOnLS.find((user) => Number(user.id) === Number(id)));
    }, 100);
  });

const login = ({ login, password }) =>
  new Promise((resolve, reject) => {
    window.setTimeout(() => {
      const usersOnLS = JSON.parse(localStorage.getItem("users"));
      const user = usersOnLS.find(
        (userOnLs) => userOnLs.email === login && userOnLs.password === password
      );
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        resolve("Добро пожаловать, " + user.name + "!");
      } else {
        reject("Логин или пароль не верен!");
      }
    }, 100);
  });

const signup = ({ name, email, password }) =>
  new Promise((resolve, reject) => {
    window.setTimeout(() => {
      const usersOnLS = JSON.parse(localStorage.getItem("users"));
      const userExists = !!usersOnLS.find(
        (userOnLS) => userOnLS.email === email
      );
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
      if (!userExists) {
        usersOnLS.push(newUser);
        localStorage.setItem("users", JSON.stringify(usersOnLS));
        localStorage.setItem("user", JSON.stringify(newUser));
        resolve("Регистрация прошла успешно!");
      } else {
        reject("Пользователь с такой почтой уже зарегистрирован");
      }
    }, 100);
  });

const editUser = (user) =>
  new Promise((resolve, reject) => {
    window.setTimeout(() => {
      const updatedUser = user.newPas
        ? { ...user, password: user.newPas }
        : user;
      delete updatedUser.oldPas;
      delete updatedUser.newPas;
      const usersOnLS = JSON.parse(localStorage.getItem("users"));
      const updatedUsers = usersOnLS.map((userOnLS) =>
        userOnLS.id === user.id ? updatedUser : userOnLS
      );
      localStorage.setItem("user", JSON.stringify(updatedUser));
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      updatedUsers.length
        ? resolve("Редактирование успешно завершено!")
        : reject("Что-то пошло не так :/ Попробуйте ещё раз");
    }, 500);
  });

const users = { fetchAll, login, signup, fetchById, editUser };

export default users;
