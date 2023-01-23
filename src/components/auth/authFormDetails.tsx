import { LoginSchema } from "../forms/AuthSchema";
import { IAuthFormDetails } from "../../interfaces/IAuthFormDetails";
import { SignupSchema } from "../forms/AuthSchema";
import { IAuthButton } from "../../interfaces/IAuthButton";

export const getAuthFormDetails = (authType: string): IAuthFormDetails => {
  if (authType == "Login") {
    return {
      authType: authType,
      authSchema: LoginSchema,
      defaultValues: {
        email: '',
        password: ''
      }
    }
  } else {
    return {
      authType: authType,
      authSchema: SignupSchema,
      defaultValues: {
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  }
}