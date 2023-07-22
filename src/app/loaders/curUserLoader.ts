import { Iseller } from "../../types/types";
import api from "../api";

export async function curUserloader(): Promise<Iseller | string> {
  const currentUserId: string = JSON.parse(localStorage.getItem("user"));
  let curUserData: string | Iseller;
  if (currentUserId) {
    curUserData = await api.users.fetchById(currentUserId);
  } else {
    curUserData = "";
  }
  return curUserData;
}
