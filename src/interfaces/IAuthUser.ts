import { IUser } from "./IUser";

export interface IAuthUser extends IUser {
  authToken: string;
}