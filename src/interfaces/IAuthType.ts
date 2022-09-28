import { SchemaOf } from "yup";
import { IAuth } from "./IAuth";

export interface IAuthType {
  authType: string;
  authSchema: SchemaOf<IAuth>;
  defaultValues: IAuth
}