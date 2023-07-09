import api from "../api";

export async function curUserloader() {
  const currentUserId = JSON.parse(localStorage.getItem("user"));
  let curUserData;
  if (currentUserId) {
    curUserData = await api.users.fetchById(currentUserId);
  } else {
    curUserData = null;
  }
  return curUserData;
}
