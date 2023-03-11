import avatar from "../../img/avatar.jpg";

const usersList = [
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
    window.setTimeout(() => {
      if (!userExists) {
        usersOnLS.push({
          id: usersOnLS.length,
          name: name,
          avatar: avatar,
          email: email,
          password: password,
          phone: "+79108309115",
          about: "I'm a good seller, I sell bananas!",
        });
        localStorage.setItem("users", JSON.stringify(usersOnLS));
        resolve("Регистрация прошла успешно!");
      } else {
        reject("Пользователь с такой почтой уже зарегистрирован");
      }
    }, 1000);
  });

const users = { fetchAll, login, signup };

export default users;
