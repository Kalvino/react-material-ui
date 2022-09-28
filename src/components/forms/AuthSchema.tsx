import * as yup from "yup";
import { IAuth } from '../../interfaces/IAuth'

export const LoginSchema: yup.SchemaOf<IAuth> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(20).required(),
}).required();

export const SignupSchema: yup.SchemaOf<IAuth> = LoginSchema.shape({
  password_confirmation: yup.string().min(6).max(20).required(),
}).required();