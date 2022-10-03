import { SchemaOf } from "yup";
import { IAuth } from "./IAuth";

export interface IAuthFormDetails {
  authType: string;
  authSchema: SchemaOf<IAuth>;
  defaultValues: IAuth
}