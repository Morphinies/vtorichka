// updated
async function fetchAll() {
  const response = await fetch("http://localhost:7000/api/users", {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  if (response.ok === true) {
    const users = await response.json();
    return users;
  }
}

// user by id api request
async function fetchById(userId) {
  if (!userId) {
    return Promise.reject("id не указан");
  }
  const response = await fetch("http://localhost:7000/api/users/" + userId, {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  if (response.ok === true) {
    const user = await response.json();
    return user;
  } else {
    const err = await response.text();
    return Promise.reject(err);
  }
}

// user edit api request
async function editUser(user) {
  console.log(user);
  const response = await fetch("http://localhost:7000/api/users/editUser", {
    method: "PUT",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (response.ok === true) {
    const user = await response.json();
    return user;
  } else {
    const err = await response.text();
    return Promise.reject(err);
  }
}

// user favorites edit api request
async function editUserFavorites(data) {
  const response = await fetch(
    "http://localhost:7000/api/users/editUserFavorites",
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  if (response.ok === true) {
    const favorites = await response.json();
    return favorites;
  } else {
    const err = await response.text();
    return Promise.reject(err);
  }
}

// login api request
async function logup(user) {
  const response = await fetch("http://localhost:7000/api/users/logup/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (response.ok === true) {
    const user = await response.json();
    localStorage.setItem("user", JSON.stringify(user._id));
    const message = `Добро пожаловать, ${user.name}!`;
    return Promise.resolve(message);
  } else {
    const err = await response.text();
    return Promise.reject(err);
  }
}

// registration api request
async function signup(user) {
  const response = await fetch("http://localhost:7000/api/users/signup", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (response.ok === true) {
    const userId = await response.text();
    localStorage.setItem("user", userId);
    return Promise.resolve("Регистрация прошла успешно!");
  } else {
    const err = await response.text();
    return Promise.reject(err);
  }
}

const users = {
  fetchAll,
  logup,
  signup,
  fetchById,
  editUser,
  editUserFavorites,
};

export default users;
