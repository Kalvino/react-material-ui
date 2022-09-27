import { IAuth } from "./IAuth";

export interface IAuthType {
  authType: string;
  authSchema: any;
  defaultValues: IAuth
}