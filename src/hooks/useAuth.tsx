import { useEffect } from "react";
import { useUser } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";
import { IAuthUser } from "../interfaces/IAuthUser";

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem('user');
    if (user) {
      addUser(JSON.parse(user));
    }
  }, []);

  const login = (user: IAuthUser) => {
    addUser(user);
  }

  const logout = () => {
    removeUser();
  }

  return { user, login, logout };
};