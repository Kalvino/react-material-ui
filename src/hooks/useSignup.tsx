import { useContext, useState } from "react";
import { useAuth } from "./useAuth";
import { AuthContext } from "../context/AuthContext";
import { IAuth } from "../interfaces/IAuth";
import axiosInstance from "../api/axios";
import { IAuthUser } from "../interfaces/IAuthUser";
const LOGIN_URL = '/signup';

export const useSignup = () => {
  const [authErrors, setAuthErrors] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState(false)
  const { user, setUser } = useContext(AuthContext)

  const signup = async (data: IAuth) => {
    setIsLoading(true);
    setAuthErrors([]);

    axiosInstance.post<IAuth, IAuthUser>(
      LOGIN_URL,
      data
    ).then(response => {
      // save to localstorage
      localStorage.setItem('user', JSON.stringify(response));

      // update auth context
      setUser(response)

      console.log(response);

      setIsLoading(false)
    })
      .catch(errors => {

        setIsLoading(false);
        // const err = JSON.parse(response)
        // const err = error.response.data.errors[0]
        console.log(errors);

        setAuthErrors(errors)
        // errRef?.current.focus()
      })
  }

  return { signup, isLoading, authErrors }
}
