import { useContext, useState } from "react";
import { IAuth } from "../interfaces/IAuth";
import axiosInstance from "../api/axios";
import { IAuthUser } from "../interfaces/IAuthUser";
import { useAuth } from "./useAuth"
const LOGIN_URL = '/signup';

export const useSignup = (toggle: () => void) => {
  const [authErrors, setAuthErrors] = useState<[] | string>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { login, logout } = useAuth();

  const signup = async (data: IAuth) => {
    setIsLoading(true);
    setAuthErrors([]);

    axiosInstance.post<IAuth, IAuthUser, IAuth>(
      LOGIN_URL,
      data
    ).then(response => {
      login(response);

      console.log(response);

      setIsLoading(false)
      toggle
    })
      .catch(errors => {

        setIsLoading(false);
        logout()

        setAuthErrors(errors)
        // errRef?.current.focus()
      })
  }

  return { signup, isLoading, authErrors }
}
