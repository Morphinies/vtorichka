import api from "../api";

interface Iuser {
  _id: string;
  name: string;
  about: string;
  phone: string;
  email: string;
  avatar: string;
  products: string[];
  favorites: string[];
}
export async function curUserloader(): Promise<Iuser> {
  const currentUserId: string = JSON.parse(localStorage.getItem("user"));
  let curUserData: null | Iuser;
  if (currentUserId) {
    curUserData = await api.users.fetchById(currentUserId);
  } else {
    curUserData = null;
  }
  return curUserData;
}
