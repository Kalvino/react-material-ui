import { useContext, useState } from "react";
import { useAuth } from "./useAuth";
import { AuthContext } from "../context/AuthContext";
import { IAuth } from "../interfaces/IAuth";
import axiosInstance from "../api/axios";
import { IAuthUser } from "../interfaces/IAuthUser";
import { DialogContext } from "../context/DialogContext";
const LOGIN_URL = '/signup';

export const useSignup = () => {
  const [authErrors, setAuthErrors] = useState<[] | string>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { user, setUser } = useContext(AuthContext)
  const { open, setOpen } = useContext(DialogContext)

  const signup = async (data: IAuth) => {
    setIsLoading(true);
    setAuthErrors([]);

    axiosInstance.post<IAuth, IAuthUser, IAuth>(
      LOGIN_URL,
      data
    ).then(response => {
      // save to localstorage
      localStorage.setItem('user', JSON.stringify(response));

      // update auth context
      setUser(response)

      console.log(response);

      setIsLoading(false)
      setOpen(!open)
    })
      .catch(errors => {

        setIsLoading(false);

        setAuthErrors(errors)
        // errRef?.current.focus()
      })
  }

  return { signup, isLoading, authErrors }
}
