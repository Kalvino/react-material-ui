import { useEffect, useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { IAuthUser } from "../interfaces/IAuthUser";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const { value, setItem, getItem, removeItem } = useLocalStorage();

  useEffect(() => {
    const storedUser = getItem('user') as IAuthUser | null;
    const authUser = user ?? storedUser;

    const token = authUser?.authToken;
    // TODO check for expiry of token .eg logout if invalid token
    if (authUser && token) {
      setItem('user', JSON.stringify(authUser));
      setUser(authUser)
    } else {
      removeItem('user')
      setUser(null);
    }
  }, [user, value]);

  const login = (user: IAuthUser) => {
    setUser(user);
    setItem('user', JSON.stringify(user));
  }

  const logout = () => {
    setUser(null);
    removeItem('user');
  }

  return { user, login, logout };
};